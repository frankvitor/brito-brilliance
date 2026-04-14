import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

// Fotos do Lucas
import lucasHeroImg from "@/assets/hero-consultant.jpg";
import lucasPrimocastImg from "@/assets/consultor.jpg";
import portfelLogoImg from "@/assets/portfel-logo.png";
import grupoPrimoLogoImg from "@/assets/grupo-primo-logo.png";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F0E8", color: "#0D2040" }}>
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D2040 0%, #142d54 50%, #1a3a6a 100%)" }}
      >

        <div className="container-site relative z-10 grid items-center gap-16 pt-32 pb-20 md:grid-cols-2 md:pt-36 md:pb-28">

          {/* Texto */}
          <ScrollReveal>
            <div>
              <div
                className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest"
                style={{ borderColor: "#C9A84C", color: "#C9A84C", backgroundColor: "rgba(201,168,76,0.08)" }}
              >
                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#C9A84C" }} />
                Consultor Parceiro Portfel
              </div>

              <h1
                className="text-[2.6rem] leading-[1.05] tracking-tight md:text-[3.4rem] lg:text-[4rem]"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif", fontWeight: 700, color: "#0D2040" }}
              >
                Quando você me contrata, você não contrata só um consultor.
              </h1>

              <p
                className="mt-6 max-w-md text-base leading-relaxed md:text-lg"
                style={{ color: "#4A5568" }}
              >
                Você tem acesso a uma estrutura completa de soluções, pensadas para o seu momento e sempre alinhadas ao seu interesse.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base transition-all hover:opacity-90"
                  style={{ backgroundColor: "#0D2040", color: "#F5F0E8" }}
                >
                  Falar com Lucas <MessageCircle size={18} />
                </Link>
                <Link
                  to="/sobre"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base border transition-all"
                  style={{ borderColor: "#0D2040", color: "#0D2040" }}
                >
                  Saiba mais <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </ScrollReveal>

          {/* Foto */}
          <ScrollReveal delay={120}>
            <div className="relative mx-auto max-w-md">
              <div
                className="absolute -top-5 -right-5 w-full h-full rounded-2xl border-2"
                style={{ borderColor: "#C9A84C", opacity: 0.25 }}
              />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={lucasHeroImg}
                  alt="Lucas Britto — Consultor Financeiro"
                  className="w-full object-cover aspect-[3/4]"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-5"
                  style={{ background: "linear-gradient(to top, rgba(13,32,64,0.95) 0%, transparent 100%)" }}
                >
                  <p className="font-bold text-white text-base">Lucas Britto</p>
                  <p className="text-sm" style={{ color: "#C9A84C" }}>Consultor Financeiro · CEA</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ FAIXA PORTFEL ══════════ */}
      <section style={{ backgroundColor: "#0D2040" }} className="py-12">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <p className="text-center md:text-left text-sm font-medium" style={{ color: "rgba(245,240,232,0.6)" }}>
                Consultor parceiro da <strong style={{ color: "#F5F0E8" }}>Portfel</strong> — uma empresa <strong style={{ color: "#F5F0E8" }}>Grupo Primo</strong>
              </p>
              <div className="flex items-center gap-6 shrink-0">
                <img src={portfelLogoImg} alt="Portfel" className="h-8" style={{ filter: "brightness(0) invert(1)", opacity: 0.8 }} />
                <div className="h-5 w-px" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
                <img src={grupoPrimoLogoImg} alt="Grupo Primo" className="h-6" style={{ filter: "brightness(0) invert(1)", opacity: 0.8 }} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ DIFERENCIAIS ══════════ */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="container-site max-w-5xl">
          <ScrollReveal>
            <div className="mb-16 max-w-xl">
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#C9A84C" }}>
                Por que a Brito Consultoria
              </p>
              <h2
                className="text-3xl md:text-4xl leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: "#0D2040" }}
              >
                Você não precisa de mais informações. Precisa de direção.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-px md:grid-cols-3" style={{ backgroundColor: "#E5DDD0" }}>
            {[
              { num: "01", title: "Decisão com clareza", desc: "Pare de depender de achismo. Tenha um plano estruturado para cada decisão financeira importante." },
              { num: "02", title: "Estratégia personalizada", desc: "Nada de fórmulas prontas. Seu planejamento é construído com base no seu perfil e objetivos reais." },
              { num: "03", title: "Acompanhamento prático", desc: "Mais do que teoria: você sabe exatamente o que fazer, quando fazer e por quê." },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80}>
                <div className="p-10 flex flex-col gap-5" style={{ backgroundColor: "#F5F0E8" }}>
                  <span
                    className="text-5xl font-bold"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#E5DDD0", lineHeight: 1 }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "#0D2040" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ LUCAS + PRIMOCAST ══════════ */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#0D2040" }}>
        <div className="container-site max-w-5xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <ScrollReveal>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={lucasPrimocastImg}
                    alt="Lucas Britto no PrimoCast — Grupo Primo"
                    className="w-full object-cover aspect-[4/3]"
                  />
                </div>
                <div
                  className="absolute -bottom-5 -right-5 px-5 py-3 rounded-xl font-bold text-sm"
                  style={{ backgroundColor: "#C9A84C", color: "#0D2040" }}
                >
                  PrimoCast · Grupo Primo
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#C9A84C" }}>
                Quem está por trás
              </p>
              <h2
                className="text-3xl md:text-4xl leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: "#F5F0E8" }}
              >
                Consultoria com experiência e visão prática
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.55)" }}>
                Lucas Britto é Consultor Financeiro <strong style={{ color: "#F5F0E8" }}>CEA</strong>, especializado em investimentos e alocação de ativos. Consultor parceiro da{" "}
                <strong style={{ color: "#C9A84C" }}>Portfel</strong>, empresa do{" "}
                <strong style={{ color: "#C9A84C" }}>Grupo Primo</strong> — o maior ecossistema de educação financeira do Brasil.
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(245,240,232,0.55)" }}>
                Te ajuda a investir melhor e de forma prática — sem conflito de interesses, com foco total nos seus objetivos.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 font-semibold text-sm border-b pb-0.5 transition-opacity hover:opacity-70"
                style={{ color: "#C9A84C", borderColor: "#C9A84C" }}
              >
                Conhecer a trajetória <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ SIMULADOR ══════════ */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="container-site max-w-5xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#C9A84C" }}>
                Ferramenta gratuita
              </p>
              <h2
                className="text-3xl md:text-4xl leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: "#0D2040" }}
              >
                Teste na prática seu plano financeiro
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6B7280" }}>
                Descubra o caminho mais eficiente para atingir seus objetivos antes de tomar qualquer decisão.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Veja quanto tempo leva para atingir sua meta",
                  "Compare perfis de investimento lado a lado",
                  "Visualize o crescimento do patrimônio ao longo dos anos",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 text-sm" style={{ color: "#6B7280" }}>
                    <ArrowRight size={15} className="mt-0.5 shrink-0" style={{ color: "#C9A84C" }} />
                    {text}
                  </li>
                ))}
              </ul>
              <Link
                to="/simulador"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base transition-all hover:opacity-90"
                style={{ backgroundColor: "#0D2040", color: "#F5F0E8" }}
              >
                Simular agora <ArrowRight size={18} />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="rounded-2xl p-7 border" style={{ backgroundColor: "#FFFFFF", borderColor: "#E5DDD0" }}>
                <div className="space-y-3">
                  {[
                    { label: "Valor inicial", val: "R$ 10.000" },
                    { label: "Aporte mensal", val: "R$ 2.000" },
                    { label: "Taxa anual", val: "12% a.a." },
                    { label: "Perfil", val: "Moderado" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between rounded-lg px-4 py-3" style={{ backgroundColor: "#F5F0E8" }}>
                      <span className="text-sm" style={{ color: "#9CA3AF" }}>{row.label}</span>
                      <span className="text-sm font-bold" style={{ color: "#0D2040" }}>{row.val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl p-5 text-center" style={{ backgroundColor: "#0D2040" }}>
                  <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: "rgba(245,240,232,0.35)" }}>
                    Tempo estimado para R$ 1 milhão
                  </p>
                  <p className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#C9A84C" }}>
                    14 anos e 7 meses
                  </p>
                </div>
                <div className="mt-5 flex h-20 items-end gap-1.5 px-1">
                  {[18, 22, 26, 31, 34, 40, 46, 52, 58, 66, 76, 88, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 12 ? "#C9A84C" : "#0D2040",
                        opacity: i === 12 ? 1 : 0.12 + i * 0.065,
                      }}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#0D2040" }}>
        <div className="container-site text-center max-w-2xl">
          <ScrollReveal>
            <Sparkles size={26} className="mx-auto mb-6" style={{ color: "#C9A84C" }} />
            <h2
              className="text-3xl md:text-4xl leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: "#F5F0E8" }}
            >
              Comece a planejar seu futuro hoje
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(245,240,232,0.45)" }}>
              Fale com Lucas e monte sua estratégia financeira personalizada.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-10 py-3.5 rounded-xl font-bold text-base transition-all hover:opacity-90"
                style={{ backgroundColor: "#C9A84C", color: "#0D2040" }}
              >
                Falar com especialista
              </Link>
              <Link
                to="/simulador"
                className="inline-flex items-center gap-2 px-10 py-3.5 rounded-xl font-semibold text-base border transition-all hover:bg-white/5"
                style={{ borderColor: "rgba(245,240,232,0.2)", color: "#F5F0E8" }}
              >
                Usar simulador
              </Link>
            </div>
            <div className="mt-16 flex items-center justify-center gap-6" style={{ opacity: 0.2 }}>
              <img src={portfelLogoImg} alt="Portfel" className="h-5" style={{ filter: "brightness(0) invert(1)" }} />
              <div className="h-4 w-px bg-white/30" />
              <img src={grupoPrimoLogoImg} alt="Grupo Primo" className="h-4" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
