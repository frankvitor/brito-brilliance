import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato.");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding pt-32 md:pt-40">
        <div className="container-site max-w-3xl">
          {/* Header */}
          <ScrollReveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
              Contato
            </p>
            <h1 className="text-4xl font-extrabold text-blue-deep md:text-5xl">
              Fale com a Brito Consultoria
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
              Escolha o canal mais prático para entrar em contato.
            </p>
          </ScrollReveal>

          {/* Channel cards */}
          <ScrollReveal delay={80}>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {/* WhatsApp */}
              <div className="rounded-2xl border border-border/50 bg-white p-7 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                  <MessageCircle size={22} />
                </div>
                <h2 className="text-lg font-bold text-blue-deep">WhatsApp</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Canal mais rápido para falar com a consultoria. Resposta em horário comercial.
                </p>
                <Button
                  variant="gold"
                  size="lg"
                  className="mt-6 w-full"
                  asChild
                >
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-border/50 bg-white p-7 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-deep/8 text-blue-deep">
                  <Mail size={22} />
                </div>
                <h2 className="text-lg font-bold text-blue-deep">E-mail</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Envie sua mensagem pelo formulário abaixo. Retorno em até 24h úteis.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="mt-6 w-full"
                  onClick={() =>
                    document
                      .getElementById("form-contato")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Ir ao formulário
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={160}>
            <div
              id="form-contato"
              className="mt-16 rounded-2xl border border-border/50 bg-white p-7 shadow-sm md:p-9"
            >
              <h2 className="text-xl font-bold text-blue-deep">
                Envie uma mensagem
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Preencha os campos abaixo e retornaremos o mais breve possível.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-blue-deep">
                    Nome
                  </label>
                  <Input
                    placeholder="Seu nome completo"
                    value={form.nome}
                    onChange={(e) =>
                      setForm({ ...form, nome: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-blue-deep">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-blue-deep">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Como podemos ajudar?"
                    rows={5}
                    value={form.mensagem}
                    onChange={(e) =>
                      setForm({ ...form, mensagem: e.target.value })
                    }
                    required
                  />
                </div>
                <Button
                  variant="gold"
                  size="lg"
                  type="submit"
                  className="w-full sm:w-auto"
                >
                  <Send size={18} /> Enviar mensagem
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
