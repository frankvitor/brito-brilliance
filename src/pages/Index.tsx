import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Eye, GitCompareArrows, Lightbulb, ArrowRight, Target, MessageCircle, User, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-consultant.jpg";


export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden mt-20 md:mt-24 rounded-t-2xl">
        {/* Background image */}
        <img
          src={heroImage}
          alt="Consultor financeiro profissional"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] md:object-[65%_20%] scale-[1.02] brightness-90 contrast-[1.05]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,72%,15%)]/90 via-[hsl(210,72%,15%)]/75 to-[hsl(210,72%,15%)]/40" />

        {/* Content */}
        <div className="container-site relative z-10 py-28 md:py-36">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                Consultoria financeira estratégica
              </span>
              <h1 className="mt-7 text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-white md:text-[2.75rem] lg:text-[3.75rem]">
                Pare de tomar decisões financeiras no escuro
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                Eu te ajudo a entender quanto investir, por quanto tempo e qual estratégia seguir — com clareza, segurança e acompanhamento real.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button variant="gold" size="lg" className="text-base px-10 py-3 h-auto" asChild>
                  <Link to="/contato">
                    Agendar consulta gratuita
                    <MessageCircle size={18} className="ml-1" />
                  </Link>
                </Button>
                <Button variant="outline-light" size="lg" className="text-base px-8 py-3 h-auto" asChild>
                  <Link to="/simulador">
                    Usar simulador
                    <ArrowRight size={18} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ POSICIONAMENTO ══════════ */}
      <section className="bg-blue-deep py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Mais do que simular números: enxergar caminhos
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                A Brito Consultoria ajuda você a transformar números em decisões. Combinamos simulação prática com estratégia de investimento para trazer clareza, segurança e direção financeira.
              </p>
            </div>
          </ScrollReveal>

          {/* ── DIFERENCIAIS (3 CARDS) ── */}
          <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: Eye,
                title: "Clareza para decidir",
                desc: "Evite decisões baseadas em achismo. Visualize cenários antes de investir.",
              },
              {
                icon: GitCompareArrows,
                title: "Comparação entre cenários",
                desc: "Entenda como diferentes estratégias impactam seu resultado ao longo do tempo.",
              },
              {
                icon: Lightbulb,
                title: "Objetivos com estratégia",
                desc: "Transforme metas financeiras em planos reais com prazo e consistência.",
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

      {/* ══════════ DESTAQUE DO SIMULADOR ══════════ */}
      <section className="section-padding">
        <div className="container-site grid items-center gap-14 md:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
              Ferramenta
            </p>
            <h2 className="text-3xl font-extrabold text-blue-deep md:text-4xl">
              Teste na prática seu plano financeiro
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Descubra o caminho mais eficiente para atingir seus objetivos antes de tomar qualquer decisão.
            </p>

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
              <Link to="/simulador">Simular agora</Link>
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

      {/* ══════════ AUTORIDADE (CONSULTOR) ══════════ */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="grid items-center gap-12 md:grid-cols-[280px_1fr] lg:gap-20">
            <ScrollReveal>
              <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-2xl border border-border/50 bg-white shadow-sm md:mx-0">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-deep/10">
                    <User size={36} className="text-blue-deep" />
                  </div>
                  <p className="mt-4 text-sm font-bold text-blue-deep">Lucas Britto</p>
                  <p className="mt-1 text-xs text-muted-foreground">Consultor Financeiro — CEA</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
                Quem está por trás da estratégia
              </p>
              <h2 className="text-3xl font-extrabold text-blue-deep md:text-4xl">
                Consultoria com experiência e visão prática
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                Lucas Britto é Consultor Financeiro (CEA), especializado em investimentos e alocação de ativos. Seu trabalho é ajudar pessoas a investir melhor, com clareza e estratégia prática.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="bg-blue-deep py-20 md:py-28">
        <div className="container-site text-center">
          <ScrollReveal>
            <Sparkles size={28} className="mx-auto mb-4 text-gold" />
            <h2 className="mx-auto max-w-lg text-3xl font-extrabold text-white md:text-4xl">
              Comece a planejar seu futuro hoje
            </h2>
            <p className="mx-auto mt-5 max-w-md text-white/60">
              Use o simulador ou fale diretamente com um consultor para montar sua estratégia.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/simulador">Simular agora</Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                  Falar com consultor
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
