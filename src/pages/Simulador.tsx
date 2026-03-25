import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { TrendingUp, Clock, PiggyBank, Lightbulb } from "lucide-react";

type Modo = "objetivo" | "prazo";

interface DadoGrafico {
  mes: number;
  valor: number;
  investido: number;
}

interface Resultado {
  meses: number;
  acumulado: number;
  investido: number;
  rendimentos: number;
  dados: DadoGrafico[];
  metaAtingida: boolean;
}

function simularPorObjetivo(inicial: number, aporte: number, taxaAnual: number, meta: number): Resultado {
  if (meta <= 0) return { meses: 0, acumulado: inicial, investido: inicial, rendimentos: 0, dados: [], metaAtingida: false };
  if (inicial >= meta) {
    return { meses: 0, acumulado: inicial, investido: inicial, rendimentos: 0, dados: [{ mes: 0, valor: Math.round(inicial), investido: Math.round(inicial) }], metaAtingida: true };
  }

  const taxaMensal = taxaAnual > 0 ? Math.pow(1 + taxaAnual / 100, 1 / 12) - 1 : 0;
  let acumulado = inicial;
  let meses = 0;
  const maxMeses = 1200;
  const dados: DadoGrafico[] = [{ mes: 0, valor: Math.round(inicial), investido: Math.round(inicial) }];

  while (acumulado < meta && meses < maxMeses) {
    const rendimento = acumulado * taxaMensal;
    acumulado = acumulado + rendimento + aporte;
    meses++;
    dados.push({ mes: meses, valor: Math.round(acumulado), investido: Math.round(inicial + aporte * meses) });
  }

  const totalInvestido = inicial + aporte * meses;
  return {
    meses,
    acumulado: Math.round(acumulado),
    investido: Math.round(totalInvestido),
    rendimentos: Math.round(acumulado - totalInvestido),
    dados,
    metaAtingida: meses < maxMeses,
  };
}

function simularPorPrazo(inicial: number, aporte: number, taxaAnual: number, prazoAnos: number): Resultado {
  if (prazoAnos <= 0) return { meses: 0, acumulado: inicial, investido: inicial, rendimentos: 0, dados: [], metaAtingida: true };

  const taxaMensal = taxaAnual > 0 ? Math.pow(1 + taxaAnual / 100, 1 / 12) - 1 : 0;
  let acumulado = inicial;
  const totalMeses = Math.round(prazoAnos * 12);
  const dados: DadoGrafico[] = [];

  dados.push({ mes: 0, valor: Math.round(acumulado), investido: Math.round(inicial) });
  for (let m = 1; m <= totalMeses; m++) {
    const rendimento = acumulado * taxaMensal;
    acumulado = acumulado + rendimento + aporte;
    dados.push({ mes: m, valor: Math.round(acumulado), investido: Math.round(inicial + aporte * m) });
  }

  const totalInvestido = inicial + aporte * totalMeses;
  return {
    meses: totalMeses,
    acumulado: Math.round(acumulado),
    investido: Math.round(totalInvestido),
    rendimentos: Math.round(acumulado - totalInvestido),
    dados,
    metaAtingida: true,
  };
}

function formatMoney(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function formatTempo(meses: number) {
  const anos = Math.floor(meses / 12);
  const m = meses % 12;
  if (anos === 0) return `${m} meses`;
  if (m === 0) return `${anos} anos`;
  return `${anos} anos e ${m} meses`;
}

export default function Simulador() {
  const [modo, setModo] = useState<Modo>("objetivo");
  const [inicial, setInicial] = useState(10000);
  const [aporte, setAporte] = useState(2000);
  const [taxa, setTaxa] = useState(12);
  const [objetivo, setObjetivo] = useState(1000000);
  const [prazo, setPrazo] = useState(20);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (inicial < 0) e.inicial = "Não pode ser negativo";
    if (aporte < 0) e.aporte = "Não pode ser negativo";
    if (taxa < 0) e.taxa = "Não pode ser negativa";
    if (modo === "objetivo" && objetivo <= 0) e.objetivo = "Deve ser maior que zero";
    if (modo === "prazo" && prazo <= 0) e.prazo = "Deve ser maior que zero";
    return e;
  };

  const resultado = useMemo(() => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return null;
    return modo === "objetivo"
      ? simularPorObjetivo(inicial, aporte, taxa, objetivo)
      : simularPorPrazo(inicial, aporte, taxa, prazo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inicial, aporte, taxa, objetivo, prazo, modo]);

  // Comparação com poupança (≈6% a.a.)
  const comparacaoPoupanca = useMemo(() => {
    if (!resultado || !resultado.metaAtingida) return null;
    const TAXA_POUPANCA = 6;
    if (modo === "objetivo") {
      const resPoupanca = simularPorObjetivo(inicial, aporte, TAXA_POUPANCA, objetivo);
      return {
        tempoPoupanca: resPoupanca.meses,
        tempoSimulado: resultado.meses,
        metaAtingidaPoupanca: resPoupanca.metaAtingida,
        diferencaMeses: resPoupanca.metaAtingida ? resPoupanca.meses - resultado.meses : null,
      };
    } else {
      const resPoupanca = simularPorPrazo(inicial, aporte, TAXA_POUPANCA, prazo);
      return {
        valorPoupanca: resPoupanca.acumulado,
        valorSimulado: resultado.acumulado,
        diferenca: resultado.acumulado - resPoupanca.acumulado,
      };
    }
  }, [resultado, modo, inicial, aporte, objetivo, prazo, taxa]);

  const chartData = useMemo(() => {
    if (!resultado) return [];
    const d = resultado.dados;
    if (d.length <= 60) return d;
    const step = Math.ceil(d.length / 60);
    return d.filter((_, i) => i % step === 0 || i === d.length - 1);
  }, [resultado]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-site">
          <ScrollReveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">Ferramenta</p>
            <h1 className="text-4xl font-extrabold text-blue-deep md:text-5xl">
              Simulador Financeiro
            </h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              {modo === "objetivo"
                ? "Descubra quanto tempo levará para atingir seu objetivo financeiro."
                : "Veja quanto seu patrimônio pode crescer em um determinado período."}
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[400px_1fr]">
            {/* INPUTS */}
            <ScrollReveal>
              <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-6">
                {/* MODE SELECTOR */}
                <div className="flex rounded-xl bg-[#F5F7F6] p-1">
                  {(["objetivo", "prazo"] as Modo[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => setModo(m)}
                      className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                        modo === m
                          ? "bg-blue-deep text-white shadow-sm"
                          : "text-blue-deep/60 hover:text-blue-deep"
                      }`}
                    >
                      {m === "objetivo" ? "Por objetivo" : "Por prazo"}
                    </button>
                  ))}
                </div>

                {/* CAMPO VARIÁVEL NO TOPO — Por objetivo: meta primeiro */}
                {modo === "objetivo" ? (
                  <div className="rounded-xl border-2 border-gold/30 bg-gold/5 p-4">
                    <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-blue-deep">
                      <TrendingUp className="h-4 w-4 text-gold" />
                      Valor que você quer alcançar (R$)
                    </label>
                    <Input
                      type="number"
                      min={1}
                      value={objetivo}
                      onChange={(e) => setObjetivo(Number(e.target.value))}
                      placeholder="1000000"
                      className="border-gold/20 bg-white text-lg font-semibold"
                    />
                    {errors.objetivo && <p className="mt-1 text-xs text-red-500">{errors.objetivo}</p>}
                  </div>
                ) : (
                  <div className="rounded-xl border-2 border-gold/30 bg-gold/5 p-4">
                    <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-blue-deep">
                      <Clock className="h-4 w-4 text-gold" />
                      Prazo de investimento (anos)
                    </label>
                    <Input
                      type="number"
                      min={1}
                      step={1}
                      value={prazo}
                      onChange={(e) => setPrazo(Number(e.target.value))}
                      placeholder="20"
                      className="border-gold/20 bg-white text-lg font-semibold"
                    />
                    {errors.prazo && <p className="mt-1 text-xs text-red-500">{errors.prazo}</p>}
                  </div>
                )}

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-blue-deep">Valor inicial (R$)</label>
                  <Input
                    type="number"
                    min={0}
                    value={inicial}
                    onChange={(e) => setInicial(Number(e.target.value))}
                    placeholder="10000"
                  />
                  {errors.inicial && <p className="mt-1 text-xs text-red-500">{errors.inicial}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-blue-deep">Aporte mensal (R$)</label>
                  <Input
                    type="number"
                    min={0}
                    value={aporte}
                    onChange={(e) => setAporte(Number(e.target.value))}
                    placeholder="2000"
                  />
                  {errors.aporte && <p className="mt-1 text-xs text-red-500">{errors.aporte}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-blue-deep">Taxa (% ao ano)</label>
                  <Input
                    type="number"
                    min={0}
                    step={0.5}
                    value={taxa}
                    onChange={(e) => setTaxa(Number(e.target.value))}
                    placeholder="12"
                  />
                  {errors.taxa && <p className="mt-1 text-xs text-red-500">{errors.taxa}</p>}
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Exemplo: 8% ao ano, 10% ao ano, 12% ao ano
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* RESULTS */}
            <ScrollReveal delay={120}>
              <div className="space-y-6">
                {resultado ? (
                  <>
                    <div className="rounded-2xl bg-blue-deep p-6 text-white md:p-8">
                      <p className="text-sm text-white/60">
                        {modo === "objetivo"
                          ? "Você pode alcançar sua meta em:"
                          : "Patrimônio estimado ao final do período"}
                      </p>

                      {modo === "objetivo" ? (
                        <>
                          <p className="mt-2 text-4xl font-extrabold text-gold tabular-nums md:text-5xl">
                            {!resultado.metaAtingida
                              ? "Meta não atingida"
                              : resultado.meses === 0
                                ? "Meta já atingida"
                                : formatTempo(resultado.meses)}
                          </p>
                          {!resultado.metaAtingida && (
                            <p className="mt-2 text-sm text-white/50">
                              Com os parâmetros informados, não foi possível atingir a meta dentro do limite da simulação.
                            </p>
                          )}
                        </>
                      ) : (
                        <p className="mt-2 text-4xl font-extrabold text-gold tabular-nums md:text-5xl">
                          {formatMoney(resultado.acumulado)}
                        </p>
                      )}

                      <div className="mt-6 grid grid-cols-3 gap-4">
                        {modo === "prazo" && (
                          <div>
                            <p className="text-xs text-white/50">Prazo</p>
                            <p className="text-lg font-bold tabular-nums">{formatTempo(resultado.meses)}</p>
                          </div>
                        )}
                        {modo === "objetivo" && (
                          <div>
                            <p className="text-xs text-white/50">Acumulado</p>
                            <p className="text-lg font-bold tabular-nums">{formatMoney(resultado.acumulado)}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-xs text-white/50">Investido</p>
                          <p className="text-lg font-bold tabular-nums">{formatMoney(resultado.investido)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/50">Rendimentos</p>
                          <p className="text-lg font-bold text-gold tabular-nums">{formatMoney(resultado.rendimentos)}</p>
                        </div>
                      </div>
                    </div>

                    {chartData.length > 1 && (
                      <div className="rounded-2xl border bg-white p-4 shadow-sm md:p-6">
                        <p className="mb-4 text-sm font-semibold text-blue-deep">Evolução do patrimônio</p>
                        <div className="h-64 md:h-72">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                              <defs>
                                <linearGradient id="gradVal" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#C9A227" stopOpacity={0.3} />
                                  <stop offset="100%" stopColor="#C9A227" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="gradInv" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#0A2540" stopOpacity={0.15} />
                                  <stop offset="100%" stopColor="#0A2540" stopOpacity={0} />
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                              <XAxis
                                dataKey="mes"
                                tickFormatter={(v) => `${Math.round(v / 12)}a`}
                                fontSize={11}
                                tick={{ fill: "#6b7280" }}
                              />
                              <YAxis
                                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                                fontSize={11}
                                tick={{ fill: "#6b7280" }}
                                width={50}
                              />
                              <Tooltip
                                formatter={(value: number, name: string) => [
                                  formatMoney(value),
                                  name === "valor" ? "Acumulado" : "Investido",
                                ]}
                                labelFormatter={(label) => `Mês ${label}`}
                                contentStyle={{ borderRadius: 8, border: "1px solid #e5e7eb" }}
                              />
                              <Area type="monotone" dataKey="investido" stroke="#0A2540" strokeWidth={2} fill="url(#gradInv)" />
                              <Area type="monotone" dataKey="valor" stroke="#C9A227" strokeWidth={2} fill="url(#gradVal)" />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    )}

                    {/* BLOCO DE INSIGHT */}
                    <div className="rounded-2xl border bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="h-5 w-5 text-gold" />
                        <p className="text-base font-semibold text-blue-deep">O que esses números significam?</p>
                      </div>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          Parte do crescimento vem dos juros ao longo do tempo
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          Quanto maior o prazo, maior o impacto dos juros compostos
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          Aumentar o aporte mensal acelera significativamente o resultado
                        </li>
                      </ul>
                    </div>

                    {/* COMPARAÇÃO COM POUPANÇA */}
                    {comparacaoPoupanca && (
                      <div className="rounded-2xl border bg-white p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                          <PiggyBank className="h-5 w-5 text-blue-medium" />
                          <p className="text-base font-semibold text-blue-deep">Comparação com poupança</p>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">Taxa considerada para poupança: 6% ao ano</p>

                        {modo === "objetivo" ? (
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl bg-[#F5F7F6] p-4">
                              <p className="text-xs font-medium text-muted-foreground mb-1">Sua simulação</p>
                              <p className="text-xl font-bold text-blue-deep tabular-nums">
                                {resultado.metaAtingida ? formatTempo(resultado.meses) : "—"}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">a {taxa}% ao ano</p>
                            </div>
                            <div className="rounded-xl bg-[#F5F7F6] p-4">
                              <p className="text-xs font-medium text-muted-foreground mb-1">Na poupança</p>
                              <p className="text-xl font-bold text-blue-deep tabular-nums">
                                {comparacaoPoupanca.metaAtingidaPoupanca
                                  ? formatTempo(comparacaoPoupanca.tempoPoupanca!)
                                  : "Meta não atingida"}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">a 6% ao ano</p>
                            </div>
                            {comparacaoPoupanca.diferencaMeses != null && comparacaoPoupanca.diferencaMeses > 0 && (
                              <div className="sm:col-span-2 rounded-xl bg-gold/10 border border-gold/20 p-4 text-center">
                                <p className="text-sm font-semibold text-blue-deep">
                                  Você alcançaria sua meta{" "}
                                  <span className="text-gold font-bold">{formatTempo(comparacaoPoupanca.diferencaMeses)}</span>{" "}
                                  mais rápido do que na poupança
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl bg-[#F5F7F6] p-4">
                              <p className="text-xs font-medium text-muted-foreground mb-1">Sua simulação</p>
                              <p className="text-xl font-bold text-blue-deep tabular-nums">
                                {formatMoney(comparacaoPoupanca.valorSimulado!)}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">a {taxa}% ao ano</p>
                            </div>
                            <div className="rounded-xl bg-[#F5F7F6] p-4">
                              <p className="text-xs font-medium text-muted-foreground mb-1">Na poupança</p>
                              <p className="text-xl font-bold text-blue-deep tabular-nums">
                                {formatMoney(comparacaoPoupanca.valorPoupanca!)}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">a 6% ao ano</p>
                            </div>
                            {comparacaoPoupanca.diferenca! > 0 && (
                              <div className="sm:col-span-2 rounded-xl bg-gold/10 border border-gold/20 p-4 text-center">
                                <p className="text-sm font-semibold text-blue-deep">
                                  Você teria aproximadamente{" "}
                                  <span className="text-gold font-bold">{formatMoney(comparacaoPoupanca.diferenca!)}</span>{" "}
                                  a menos na poupança
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="rounded-2xl border bg-white p-8 text-center text-muted-foreground">
                    Corrija os campos para ver a simulação.
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="mt-10 text-center text-xs text-muted-foreground">
              Simulação ilustrativa, não constitui recomendação financeira.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}
