import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";
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
        <div className="container-site max-w-2xl">
          <ScrollReveal>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">Contato</p>
            <h1 className="text-4xl font-extrabold text-blue-deep md:text-5xl">Fale conosco</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tem dúvidas ou quer saber mais sobre nossos serviços? Preencha o formulário ou nos chame diretamente pelo WhatsApp.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-blue-deep">Nome</label>
                <Input
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-blue-deep">E-mail</label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-blue-deep">Mensagem</label>
                <Textarea
                  placeholder="Como podemos ajudar?"
                  rows={5}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  required
                />
              </div>
              <Button variant="gold" size="lg" type="submit" className="w-full md:w-auto">
                <Send size={18} /> Enviar mensagem
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-10 rounded-xl border bg-surface p-6 text-center">
              <MessageCircle className="mx-auto mb-3 text-gold" size={32} />
              <p className="font-semibold text-blue-deep">Prefere WhatsApp?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Resposta rápida no horário comercial.
              </p>
              <Button variant="gold" size="lg" className="mt-4" asChild>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
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
