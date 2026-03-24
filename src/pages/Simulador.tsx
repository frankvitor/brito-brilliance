import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

function simular(inicial: number, aporte: number, taxaAnual: number, meta = 1_000_000) {
  const taxaMensal = Math.pow(1 + taxaAnual / 100, 1 / 12) - 1;
  let acumulado = inicial;
  let meses = 0;
  const dados: { mes: number; valor: number; investido: number }[] = [];

  while (acumulado < meta && meses < 600) {
    dados.push({ mes: meses, valor: Math.round(acumulado), investido: Math.round(inicial + aporte * meses) });
    acumulado = acumulado * (1 + taxaMensal) + aporte;
    meses++;
  }
  dados.push({ mes: meses, valor: Math.round(acumulado), investido: Math.round(inicial + aporte * meses) });

  const totalInvestido = inicial + aporte * meses;
  return {
    meses,
    acumulado: Math.round(acumulado),
    investido: Math.round(totalInvestido),
    rendimentos: Math.round(acumulado - totalInvestido),
    dados,
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
  const [inicial, setInicial] = useState(10000);
  const [aporte, setAporte] = useState(2000);
  const [taxa, setTaxa] = useState(12);

  const resultado = useMemo(() => simular(inicial, aporte, taxa), [inicial, aporte, taxa]);

  const chartData = useMemo(() => {
    const d = resultado.dados;
    if (d.length <= 60) return d;
    const step = Math.ceil(d.length / 60);
    return d.filter((_, i) => i % step === 0 || i === d.length - 1);
  }, [resultado.dados]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-site">
          <ScrollReveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">Ferramenta</p>
            <h1 className="text-4xl font-extrabold text-blue-deep md:text-5xl">
              Simulador de Meta Financeira
            </h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Ajuste os valores abaixo e veja em tempo real quanto tempo falta para atingir R$ 1.000.000.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[380px_1fr]">
            {/* INPUTS */}
            <ScrollReveal>
              <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-6">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-blue-deep">Valor inicial (R$)</label>
                  <Input
                    type="number"
                    min={0}
                    value={inicial}
                    onChange={(e) => setInicial(Number(e.target.value))}
                    placeholder="10000"
                  />
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
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    Exemplo: 8% (conservador), 12% (moderado), 15%+ (mais agressivo)
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* RESULTS */}
            <ScrollReveal delay={120}>
              <div className="space-y-6">
                <div className="rounded-2xl bg-blue-deep p-6 text-white md:p-8">
                  <p className="text-sm text-white/60">Tempo estimado para R$ 1 milhão</p>
                  <p className="mt-1 text-4xl font-extrabold text-gold tabular-nums">
                    {resultado.meses >= 600 ? "Acima de 50 anos" : formatTempo(resultado.meses)}
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-white/50">Acumulado</p>
                      <p className="text-lg font-bold tabular-nums">{formatMoney(resultado.acumulado)}</p>
                    </div>
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
                        <Area
                          type="monotone"
                          dataKey="investido"
                          stroke="#0A2540"
                          strokeWidth={2}
                          fill="url(#gradInv)"
                        />
                        <Area
                          type="monotone"
                          dataKey="valor"
                          stroke="#C9A227"
                          strokeWidth={2}
                          fill="url(#gradVal)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
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