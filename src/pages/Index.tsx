import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Eye, Lightbulb, ArrowRight, Target, MessageCircle, Sparkles, Shield, TrendingUp, Award } from "lucide-react";

import heroImg from "@/assets/hero-consultant.jpg";
import lucasOficialImg from "@/assets/consultor.jpg";
import portfelLogoImg from "@/assets/portfel-logo.png";
import grupoPrimoLogoImg from "@/assets/grupo-primo-logo.png";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Fundo gradiente profundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#071224]" />

        {/* Textura sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Foto do Lucas — lado direito */}
        <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/60 to-transparent z-10" />
          <img
            src={heroImg}
            alt="Lucas Britto — Consultor Financeiro"
            className="h-full w-full object-cover object-center opacity-60"
          />
        </div>

        {/* Linha decorativa vertical */}
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#5BB8D4]/20 to-transparent hidden lg:block" />

        {/* Conteúdo */}
        <div className="container-site relative z-20 py-36 md:py-44">
          <div className="max-w-xl">
            <ScrollReveal>
              {/* Badge Portfel */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#5BB8D4]/25 bg-[#5BB8D4]/10 px-4 py-1.5 mb-6">
                <div className="h-1.5 w-1.5 rounded-full bg-[#5BB8D4] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#5BB8D4]">
                  Consultor Parceiro Portfel
                </span>
              </div>

              <h1 className="text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white md:text-[3.25rem] lg:text-[4rem]">
                Pare de tomar decisões financeiras{" "}
                <span className="text-[#5BB8D4]">no escuro</span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 md:text-lg">
                Planejamento financeiro personalizado com clareza, estratégia e foco em resultados reais — respaldado pela estrutura do Grupo Primo.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="bg-[#5BB8D4] hover:bg-[#4aa8c4] text-white font-bold px-8 py-3 h-auto text-base rounded-xl shadow-lg shadow-[#5BB8D4]/20 transition-all"
                >
                  <Link to="/contato">
                    Falar com especialista <MessageCircle size={18} className="ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 px-8 py-3 h-auto text-base rounded-xl"
                >
                  <Link to="/simulador">Usar simulador</Link>
                </Button>
              </div>

              {/* Logos de credibilidade */}
              <div className="mt-14 flex items-center gap-6 flex-wrap">
                <span className="text-xs text-white/30 uppercase tracking-wider">Em parceria com</span>
                <div className="flex items-center gap-6">
                  <img src={portfelLogoImg} alt="Portfel" className="h-6 opacity-60 hover:opacity-100 transition-opacity brightness-0 invert" />
                  <div className="h-4 w-px bg-white/20" />
                  <img src={grupoPrimoLogoImg} alt="Grupo Primo" className="h-5 opacity-60 hover:opacity-100 transition-opacity brightness-0 invert" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
          <span className="text-xs text-white uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px bg-white/40" />
        </div>
      </section>

      {/* ══════════ PARCERIA PORTFEL ══════════ */}
      <section className="py-16 bg-[#071224] border-y border-white/5">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-[#5BB8D4] font-semibold mb-1">Credencial</p>
                <h3 className="text-lg font-bold text-white">Uma empresa Grupo Primo</h3>
                <p className="text-sm text-white/45 mt-1 max-w-xs">
                  A Portfel faz parte do maior ecossistema de educação financeira do Brasil.
                </p>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <img src={portfelLogoImg} alt="Portfel" className="h-10 brightness-0 invert opacity-80" />
                  <span className="text-[10px] text-white/30 mt-1.5 tracking-wider uppercase">Consultoria Financeira</span>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="flex flex-col items-center">
                  <img src={grupoPrimoLogoImg} alt="Grupo Primo" className="h-8 brightness-0 invert opacity-80" />
                  <span className="text-[10px] text-white/30 mt-1.5 tracking-wider uppercase">Grupo Primo</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ POSICIONAMENTO ══════════ */}
      <section className="py-24 md:py-32 bg-[#0d1f3c]">
        <div className="container-site">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-[#5BB8D4] font-semibold mb-3">Por que a Brito Consultoria</p>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl leading-tight">
                Você não precisa de mais informações.{" "}
                <span className="text-[#5BB8D4]">Precisa de direção.</span>
              </h2>
              <p className="mt-5 text-base text-white/50 leading-relaxed">
                Estratégia financeira construída sob medida — com a solidez de quem entende o mercado e conhece a sua realidade.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Decisão com clareza",
                desc: "Pare de depender de achismo. Tenha um plano estruturado para cada decisão financeira importante.",
              },
              {
                icon: Target,
                title: "Estratégia personalizada",
                desc: "Nada de fórmulas prontas. Seu planejamento é construído com base no seu perfil e objetivos reais.",
              },
              {
                icon: Lightbulb,
                title: "Acompanhamento prático",
                desc: "Mais do que teoria: você sabe exatamente o que fazer, quando fazer e por quê.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="group rounded-2xl border border-white/8 bg-white/[0.03] p-8 backdrop-blur-sm hover:border-[#5BB8D4]/30 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#5BB8D4]/10 text-[#5BB8D4] group-hover:bg-[#5BB8D4]/20 transition-colors">
                    <item.icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/45">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ QUEM É LUCAS ══════════ */}
      <section className="py-24 md:py-32 bg-[#0a1628]">
        <div className="container-site">
          <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
            <ScrollReveal>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={lucasOficialImg}
                    alt="Lucas Britto — Consultor Financeiro"
                    className="w-full object-cover aspect-[4/5]"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />

                  {/* Badge CEA */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-4 py-3 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#5BB8D4]/20">
                        <Award size={18} className="text-[#5BB8D4]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Lucas Britto</p>
                        <p className="text-xs text-white/50">Consultor Financeiro — CEA</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detalhe decorativo */}
                <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl border border-[#5BB8D4]/15 -z-10" />
                <div className="absolute -top-4 -left-4 h-20 w-20 rounded-xl border border-white/5 -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-xs uppercase tracking-widest text-[#5BB8D4] font-semibold mb-3">Quem está por trás</p>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl leading-tight">
                Consultoria com experiência e visão prática
              </h2>
              <p className="mt-5 text-base text-white/55 leading-relaxed">
                Lucas Britto é Consultor Financeiro certificado (CEA), especializado em investimentos e alocação de ativos. Consultor parceiro da <strong className="text-white/80">Portfel</strong>, uma empresa do <strong className="text-white/80">Grupo Primo</strong> — o maior ecossistema de educação financeira do Brasil.
              </p>
              <p className="mt-4 text-base text-white/55 leading-relaxed">
                Seu trabalho é ajudar pessoas a tomarem decisões financeiras mais inteligentes, com clareza, estratégia e foco em resultados reais.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { value: "CEA", label: "Certificação ANBIMA" },
                  { value: "Portfel", label: "Parceiro oficial" },
                  { value: "GP", label: "Ecossistema Grupo Primo" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-white/8 bg-white/[0.03] p-4 text-center">
                    <p className="text-lg font-extrabold text-[#5BB8D4]">{s.value}</p>
                    <p className="mt-1 text-[11px] text-white/35 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <Button asChild className="bg-[#5BB8D4] hover:bg-[#4aa8c4] text-white font-bold px-6 py-2.5 h-auto rounded-xl">
                  <Link to="/sobre">Conhecer mais</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/15 text-white/70 hover:bg-white/5 px-6 py-2.5 h-auto rounded-xl">
                  <Link to="/contato">Falar agora</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ DESTAQUE DO SIMULADOR ══════════ */}
      <section className="py-24 md:py-32 bg-[#0d1f3c]">
        <div className="container-site grid items-center gap-14 md:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-widest text-[#5BB8D4] font-semibold mb-3">Ferramenta gratuita</p>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl leading-tight">
              Teste na prática seu plano financeiro
            </h2>
            <p className="mt-5 max-w-lg text-base text-white/55 leading-relaxed">
              Descubra o caminho mais eficiente para atingir seus objetivos antes de tomar qualquer decisão.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Veja quanto tempo leva para atingir sua meta",
                "Compare perfis de investimento lado a lado",
                "Visualize o crescimento do patrimônio ao longo dos anos",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3 text-white/50">
                  <ArrowRight size={16} className="mt-1 shrink-0 text-[#5BB8D4]" />
                  <span className="text-[15px] leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-10 bg-[#5BB8D4] hover:bg-[#4aa8c4] text-white font-bold px-8 py-3 h-auto text-base rounded-xl">
              <Link to="/simulador">Simular agora</Link>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-7">
              <div className="space-y-3">
                {[
                  { label: "Valor inicial", val: "R$ 10.000" },
                  { label: "Aporte mensal", val: "R$ 2.000" },
                  { label: "Taxa anual", val: "12% a.a." },
                  { label: "Perfil", val: "Moderado" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-lg bg-white/[0.04] px-4 py-3 border border-white/5">
                    <span className="text-sm text-white/40">{row.label}</span>
                    <span className="text-sm font-bold tabular-nums text-white">{row.val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-[#5BB8D4]/10 border border-[#5BB8D4]/20 p-5 text-center">
                <p className="text-[11px] uppercase tracking-wider text-white/40">
                  Tempo estimado para R$ 1 milhão
                </p>
                <p className="mt-1 text-3xl font-extrabold tabular-nums text-[#5BB8D4]">
                  14 anos e 7 meses
                </p>
              </div>
              <div className="mt-5 flex h-24 items-end gap-1.5 px-1">
                {[18, 22, 26, 31, 34, 40, 46, 52, 58, 66, 76, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-[#5BB8D4]/30"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="py-24 md:py-32 bg-[#071224] relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-96 w-96 rounded-full bg-[#5BB8D4]/5 blur-3xl" />
        </div>
        <div className="container-site text-center relative z-10">
          <ScrollReveal>
            <Sparkles size={28} className="mx-auto mb-5 text-[#5BB8D4]" />
            <h2 className="mx-auto max-w-lg text-3xl font-extrabold text-white md:text-4xl leading-tight">
              Comece a planejar seu futuro hoje
            </h2>
            <p className="mx-auto mt-5 max-w-md text-white/45">
              Fale com um consultor e monte sua estratégia financeira personalizada.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-[#5BB8D4] hover:bg-[#4aa8c4] text-white font-bold px-10 py-3 h-auto text-base rounded-xl shadow-lg shadow-[#5BB8D4]/20">
                <Link to="/contato">Falar com especialista</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/5 px-10 py-3 h-auto text-base rounded-xl">
                <Link to="/simulador">Usar simulador</Link>
              </Button>
            </div>

            {/* Logos footer da seção */}
            <div className="mt-16 flex items-center justify-center gap-6 opacity-30">
              <img src={portfelLogoImg} alt="Portfel" className="h-5 brightness-0 invert" />
              <div className="h-4 w-px bg-white/30" />
              <img src={grupoPrimoLogoImg} alt="Grupo Primo" className="h-4 brightness-0 invert" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
