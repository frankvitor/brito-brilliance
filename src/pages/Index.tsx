import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Eye, GitCompareArrows, Lightbulb, ArrowRight, TrendingUp, BarChart3, Layers } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="container-site grid items-center gap-14 md:grid-cols-[1fr_minmax(0,420px)] lg:gap-20">
          {/* Left — copy */}
          <ScrollReveal>
            <span className="inline-block rounded-full border border-gold/30 bg-gold/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              Planejamento financeiro com visão estratégica
            </span>
            <h1 className="mt-6 text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-blue-deep md:text-[2.75rem] lg:text-[3.25rem]">
              Transforme metas financeiras em decisões mais claras
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              A Brito Consultoria une clareza, simulação e estratégia para ajudar você a
              visualizar objetivos e comparar cenários com mais inteligência.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/simulador">Acessar simulador</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contato">Entrar em contato</Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Right — product-like mock */}
          <ScrollReveal delay={180}>
            <div className="space-y-4">
              {/* Main card */}
              <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-[0_4px_24px_rgba(10,37,64,0.07)] md:p-7">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Simulação de meta
                  </p>
                  <span className="rounded-full bg-gold/12 px-3 py-1 text-[11px] font-bold text-gold">
                    Moderado
                  </span>
                </div>

                <div className="mt-5 rounded-xl bg-blue-deep px-5 py-4">
                  <p className="text-[11px] uppercase tracking-wider text-white/50">Meta</p>
                  <p className="mt-0.5 text-2xl font-extrabold tabular-nums text-white">
                    R$&nbsp;1.000.000
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <p className="text-[11px] text-muted-foreground">Aporte mensal</p>
                    <p className="text-sm font-bold tabular-nums text-blue-deep">R$&nbsp;2.000</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">Taxa anual</p>
                    <p className="text-sm font-bold tabular-nums text-gold">12,0%&nbsp;a.a.</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">Tempo estimado</p>
                    <p className="text-sm font-bold tabular-nums text-blue-deep">14&nbsp;anos e 7&nbsp;meses</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">Valor inicial</p>
                    <p className="text-sm font-bold tabular-nums text-blue-deep">R$&nbsp;10.000</p>
                  </div>
                </div>
              </div>

              {/* Secondary indicators */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Total investido", value: "R$ 358k", color: "text-blue-deep" },
                  { label: "Patrimônio projetado", value: "R$ 1,05M", color: "text-gold" },
                  { label: "Rendimentos", value: "R$ 689k", color: "text-blue-light" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border/50 bg-white px-3 py-3 text-center shadow-sm"
                  >
                    <p className="text-[10px] leading-tight text-muted-foreground">{item.label}</p>
                    <p className={`mt-1 text-sm font-extrabold tabular-nums ${item.color}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ DARK SECTION ══════════ */}
      <section className="bg-blue-deep py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl" style={{ textWrap: "balance" }}>
                Mais do que simular números: enxergar caminhos
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                A proposta da Brito Consultoria é tornar metas financeiras mais tangíveis por meio
                de uma experiência simples, visual e estratégica.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: Eye,
                title: "Clareza para decidir",
                desc: "Visualize projeções e cenários antes de tomar qualquer decisão financeira.",
              },
              {
                icon: GitCompareArrows,
                title: "Comparação entre cenários",
                desc: "Compare perfis de risco lado a lado e entenda as diferenças de resultado.",
              },
              {
                icon: Lightbulb,
                title: "Visualização de objetivos",
                desc: "Transforme números abstratos em metas concretas, com prazo e estratégia.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 90}>
                <div className="rounded-xl border border-white/8 bg-white/[0.04] px-7 py-8 backdrop-blur-sm transition-colors hover:bg-white/[0.07]">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <item.icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SIMULATOR HIGHLIGHT ══════════ */}
      <section className="section-padding">
        <div className="container-site grid items-center gap-14 md:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
              Ferramenta
            </p>
            <h2 className="text-3xl font-extrabold text-blue-deep md:text-4xl" style={{ textWrap: "balance" }}>
              Simule sua meta financeira com mais contexto
            </h2>

            <ul className="mt-8 space-y-4">
              {[
                "Veja quanto tempo pode levar para atingir sua meta",
                "Compare perfis de investimento lado a lado",
                "Visualize o crescimento do patrimônio ao longo dos anos",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3 text-muted-foreground">
                  <ArrowRight size={16} className="mt-1 shrink-0 text-gold" />
                  <span className="text-[15px] leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            <Button variant="gold" size="lg" className="mt-10" asChild>
              <Link to="/simulador">Testar simulador</Link>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <div className="rounded-2xl border bg-white p-6 shadow-[0_4px_24px_rgba(10,37,64,0.06)] md:p-7">
              <div className="space-y-3.5">
                {[
                  { label: "Valor inicial", val: "R$ 10.000" },
                  { label: "Aporte mensal", val: "R$ 2.000" },
                  { label: "Taxa anual", val: "12% a.a." },
                  { label: "Perfil", val: "Moderado" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-lg bg-surface px-4 py-3"
                  >
                    <span className="text-sm text-muted-foreground">{row.label}</span>
                    <span className="text-sm font-bold tabular-nums text-blue-deep">{row.val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-blue-deep p-5 text-center">
                <p className="text-[11px] uppercase tracking-wider text-white/50">
                  Tempo estimado para R$ 1 milhão
                </p>
                <p className="mt-1 text-3xl font-extrabold tabular-nums text-gold">
                  14 anos e 7 meses
                </p>
              </div>
              {/* Mini chart */}
              <div className="mt-5 flex h-24 items-end gap-1.5 px-1">
                {[18, 22, 26, 31, 34, 40, 46, 52, 58, 66, 76, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-blue-deep/70"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ DIFERENCIAIS ══════════ */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-extrabold text-blue-deep md:text-4xl">
              O que nos diferencia
            </h2>
          </ScrollReveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-3">
            {[
              {
                icon: Layers,
                title: "Interface simples",
                desc: "Projetada para quem quer resultados sem complexidade desnecessária.",
              },
              {
                icon: GitCompareArrows,
                title: "Comparação inteligente",
                desc: "Cenários lado a lado com dados reais para decisões mais seguras.",
              },
              {
                icon: TrendingUp,
                title: "Visão estratégica",
                desc: "Não apenas números — um caminho claro para suas metas financeiras.",
              },
            ].map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 100}>
                <div className="group rounded-2xl border border-border/50 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                    <d.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-blue-deep">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="py-24 md:py-32">
        <div className="container-site text-center">
          <ScrollReveal>
            <h2 className="mx-auto max-w-lg text-3xl font-extrabold text-blue-deep md:text-4xl" style={{ textWrap: "balance" }}>
              Comece hoje a visualizar melhor suas metas
            </h2>
            <p className="mx-auto mt-5 max-w-md text-muted-foreground">
              Use nosso simulador gratuito e dê o primeiro passo rumo a decisões financeiras mais inteligentes.
            </p>
            <Button variant="gold" size="lg" className="mt-9" asChild>
              <Link to="/simulador">Simular agora</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
