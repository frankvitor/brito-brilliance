import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { TrendingUp, Target, BarChart3, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Clareza financeira",
    desc: "Entenda para onde seu dinheiro vai e como fazê-lo trabalhar melhor.",
  },
  {
    icon: Target,
    title: "Planejamento estratégico",
    desc: "Metas definidas com prazos realistas e acompanhamento contínuo.",
  },
  {
    icon: BarChart3,
    title: "Decisões baseadas em dados",
    desc: "Simulações e projeções que eliminam achismos do seu planejamento.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-site grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
              Consultoria financeira
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] text-blue-deep md:text-5xl lg:text-[3.5rem]">
              Planeje seu primeiro milhão{" "}
              <span className="text-blue-light">com clareza</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Simule cenários, entenda seus investimentos e tome decisões financeiras mais inteligentes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/simulador">Simular agora</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contato">Falar com consultoria</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="rounded-2xl border bg-surface p-6 shadow-lg md:p-8">
              <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                <span className="font-medium text-blue-deep">Evolução patrimonial</span>
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                  +12,4% a.a.
                </span>
              </div>
              {/* Mini chart mock */}
              <div className="flex h-40 items-end gap-2">
                {[28, 35, 32, 45, 42, 55, 60, 72, 68, 80, 90, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-blue-deep/80 transition-all hover:bg-gold"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Investido</p>
                  <p className="text-lg font-bold text-blue-deep tabular-nums">R$ 240.000</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Acumulado</p>
                  <p className="text-lg font-bold text-gold tabular-nums">R$ 1.047.832</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-padding">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-extrabold text-blue-deep md:text-4xl">
              Por que a Brito Consultoria?
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 100}>
                <div className="group rounded-xl border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-blue-deep">
                    <b.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-blue-deep">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIMULATOR HIGHLIGHT */}
      <section className="section-padding bg-surface">
        <div className="container-site grid items-center gap-12 md:grid-cols-2">
          <ScrollReveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">Ferramenta</p>
            <h2 className="text-3xl font-extrabold text-blue-deep md:text-4xl">
              Simulador de Meta Financeira
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              Descubra quanto tempo falta para atingir suas metas. Ajuste valores, taxas e perfil de risco em tempo real.
            </p>
            <Button variant="gold" size="lg" className="mt-8" asChild>
              <Link to="/simulador">
                Abrir simulador <ArrowRight size={18} />
              </Link>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="rounded-2xl border bg-white p-6 shadow-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-surface px-4 py-3">
                  <span className="text-sm text-muted-foreground">Valor inicial</span>
                  <span className="font-bold text-blue-deep tabular-nums">R$ 10.000</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-surface px-4 py-3">
                  <span className="text-sm text-muted-foreground">Aporte mensal</span>
                  <span className="font-bold text-blue-deep tabular-nums">R$ 2.000</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-surface px-4 py-3">
                  <span className="text-sm text-muted-foreground">Taxa anual</span>
                  <span className="font-bold text-gold tabular-nums">12% a.a.</span>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-blue-deep p-5 text-center">
                <p className="text-xs text-white/60">Tempo estimado para R$ 1 milhão</p>
                <p className="mt-1 text-3xl font-extrabold text-gold tabular-nums">14 anos e 7 meses</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MINI ABOUT */}
      <section className="section-padding">
        <div className="container-site max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-blue-deep md:text-4xl">
              Sobre a Brito Consultoria
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Somos uma consultoria focada em educação financeira e planejamento patrimonial. 
              Acreditamos que decisões inteligentes começam com informação de qualidade — sem 
              jargões, sem promessas irreais, apenas dados e estratégia.
            </p>
            <Button variant="outline" size="lg" className="mt-8" asChild>
              <Link to="/sobre">Conheça mais</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-deep py-20 md:py-28">
        <div className="container-site text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Comece a planejar seu futuro hoje
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/70">
              Use nosso simulador gratuito e descubra o caminho mais eficiente para atingir suas metas financeiras.
            </p>
            <Button variant="gold" size="lg" className="mt-8" asChild>
              <Link to="/simulador">Simular agora</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
