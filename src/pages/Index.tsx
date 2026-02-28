import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import {
  Building2,
  Route,
  Droplets,
  ClipboardCheck,
  Hammer,
  Fence,
  School,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Building2, title: "Residential & Commercial", desc: "Flats, apartments, office buildings and structural design." },
  { icon: Route, title: "Roadworks & Paving", desc: "Earthworks, asphalt paving, parking lots and culverts." },
  { icon: Droplets, title: "Water & Sewerage", desc: "Drainage systems, septic tanks and reticulation." },
  { icon: ClipboardCheck, title: "Project Management", desc: "Feasibility studies, cost estimates and site supervision." },
  { icon: Hammer, title: "Fabrication & Finishing", desc: "Custom design, welding and professional installations." },
  { icon: Fence, title: "Boundary Walls", desc: "Construction and reconstruction for homes and businesses." },
  { icon: School, title: "Schools & Institutions", desc: "Classroom construction, renovations and expansions." },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const Index = () => (
  <Layout>
    <SEOHead
      title="Abbtec Building & Construction Ltd | Civil Engineering in Nairobi"
      description="Abbtec delivers trusted civil engineering, construction, roadworks and project management services across Kenya. Get a free quote today."
      path="/"
    />

    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative container-custom px-4 py-20">
        <div className="max-w-xl animate-fade-in-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Building &amp; Construction
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary mb-5 leading-tight">
            Engineering Excellence, Built to Last
          </h1>
          <p className="text-secondary/80 text-lg mb-8 leading-relaxed">
            From residential buildings to roadworks and water systems — Abbtec delivers quality civil engineering solutions across Kenya.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">
                Get a Free Quote <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-secondary/30 text-secondary hover:bg-secondary/10">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary">
      <div className="container-custom px-4 py-10 grid grid-cols-3 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground">{s.value}</p>
            <p className="text-primary-foreground/70 text-xs sm:text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Services Preview */}
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="font-display text-3xl font-bold text-foreground">Our Services</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              View All Services <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Why Abbtec</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Quality Construction You Can Trust
            </h2>
            <ul className="space-y-4">
              {[
                "Licensed and insured engineering professionals",
                "Transparent pricing with detailed cost estimates",
                "On-time project delivery and site supervision",
                "Comprehensive services from design to finishing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg aspect-[4/3] flex items-center justify-center">
            <Building2 size={80} className="text-primary/30" />
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary section-padding">
      <div className="container-custom text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Get in touch for a free consultation and detailed project estimate.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
        >
          <Link to="/contact">
            Contact Us Today <ArrowRight size={16} className="ml-1" />
          </Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
