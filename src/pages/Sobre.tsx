import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Compass, Lightbulb, Handshake } from "lucide-react";
import consultorImg from "@/assets/consultor.jpg";

const blocks = [
  {
    icon: Compass,
    title: "Quem somos",
    text: "A Brito Consultoria nasceu da vontade de tornar o planejamento financeiro acessível e prático. Combinamos análise de dados com uma abordagem humana para ajudar pessoas e famílias a construir patrimônio de forma sustentável.",
  },
  {
    icon: Lightbulb,
    title: "Propósito",
    text: "Acreditamos que educação financeira de qualidade transforma vidas. Nosso objetivo é dar clareza sobre investimentos e metas, para que cada decisão seja consciente e informada — sem promessas vazias.",
  },
  {
    icon: Handshake,
    title: "Abordagem prática",
    text: "Nada de relatórios intermináveis ou jargões. Trabalhamos com ferramentas interativas, simulações reais e acompanhamento próximo para que você veja resultados concretos desde o início.",
  },
];

export default function Sobre() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-site max-w-5xl">
          <ScrollReveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">Sobre</p>
            <h1 className="text-4xl font-extrabold text-blue-deep md:text-5xl">
              Conheça a Brito Consultoria
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Seção do consultor com foto e carreira */}
      <section className="pb-16 md:pb-24">
        <div className="container-site max-w-5xl">
          <ScrollReveal>
            <div className="grid items-start gap-10 md:grid-cols-[1fr_auto] md:gap-16">
              {/* Texto de carreira */}
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold text-blue-deep md:text-3xl">Lucas Brito</h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
                  Fundador & Consultor Financeiro
                </p>
                <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                  <p>
                    Com mais de 12 anos de experiência no mercado financeiro, Lucas iniciou sua carreira em grandes instituições bancárias, onde desenvolveu expertise em gestão de patrimônio e análise de investimentos.
                  </p>
                  <p>
                    Formado em Economia pela USP e com MBA em Finanças pelo Insper, atuou como analista sênior em gestoras de investimento antes de fundar a Brito Consultoria em 2019.
                  </p>
                  <p>
                    Sua missão é democratizar o acesso ao planejamento financeiro de qualidade, oferecendo orientação personalizada e transparente — sem conflitos de interesse.
                  </p>
                  <p>
                    Certificações: CEA (ANBIMA), CFP® (Certified Financial Planner) e CGA (Gestão de Ativos).
                  </p>
                </div>
              </div>

              {/* Foto vertical */}
              <div className="order-1 mx-auto md:order-2 md:mx-0">
                <div className="w-64 overflow-hidden rounded-2xl shadow-lg md:w-72">
                  <img
                    src={consultorImg}
                    alt="Lucas Brito — Consultor Financeiro"
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-site grid gap-10 md:gap-14 max-w-5xl">
          {blocks.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100}>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <b.icon size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-blue-deep">{b.title}</h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}