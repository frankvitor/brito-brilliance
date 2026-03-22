import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Compass, Lightbulb, Handshake } from "lucide-react";

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
        <div className="container-site max-w-3xl">
          <ScrollReveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">Sobre</p>
            <h1 className="text-4xl font-extrabold text-blue-deep md:text-5xl">
              Conheça a Brito Consultoria
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-site grid gap-10 md:gap-14 max-w-3xl">
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
