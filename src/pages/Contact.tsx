import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+254 797 844 652", href: "tel:+254797844652" },
  { icon: Mail, label: "Email", value: "abbtecbuildingconstructionltd@gmail.com", href: "mailto:abbtecbuildingconstructionltd@gmail.com" },
  { icon: MapPin, label: "Location", value: "Ruaka, Nairobi", href: null },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for your inquiry. We'll get back to you shortly.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast({ title: "Error", description: "Unable to send message.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Server error occurred.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Us | Abbtec Building & Construction Ltd"
        description="Get in touch with Abbtec for a free project estimate. Call +254797844652 or send us a message."
        path="/contact"
      />

      {/* Hero */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Contact Us</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's Discuss Your Project
            </h1>
            <p className="text-muted-foreground text-lg">
              Get in touch for a free estimate or to discuss your project needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">Get In Touch</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Have a question or ready to start? Reach out and we'll respond within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                      <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="bg-secondary border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                      <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="bg-secondary border-border" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                      <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+254 700 000 000" className="bg-secondary border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Subject *</label>
                      <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Project type" required className="bg-secondary border-border" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                    <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Describe your project or question..." rows={5} required className="bg-secondary border-border resize-none" />
                  </div>
                  <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
                    {sending ? "Sending..." : "Send Message"}
                    <Send size={16} className="ml-1.5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
