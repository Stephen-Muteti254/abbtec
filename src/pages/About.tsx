import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Target, Eye, Shield } from "lucide-react";

const values = [
  { icon: Target, title: "Precision", desc: "Every project is executed with meticulous attention to engineering standards and specifications." },
  { icon: Eye, title: "Transparency", desc: "Clear communication, honest pricing and regular progress updates throughout your project." },
  { icon: Shield, title: "Reliability", desc: "We deliver on time, on budget and to the highest quality standards every single time." },
];

const About = () => (
  <Layout>
    <SEOHead
      title="About Us | Abbtec Building & Construction Ltd"
      description="Learn about Abbtec's mission, values and experience delivering civil engineering excellence across Kenya."
      path="/about"
    />

    {/* Hero */}
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="max-w-2xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">About Us</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Building Kenya's Future
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Abbtec Building &amp; Construction Ltd is a trusted civil engineering firm based in Nairobi, delivering quality construction, roadworks, water systems and project management services.
          </p>
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Story</h2>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              Founded with a vision to deliver engineering excellence, Abbtec has grown into a comprehensive construction firm serving residential, commercial and institutional clients across Kenya.
            </p>
            <p>
              Our team combines deep technical expertise with practical construction experience, ensuring every project — from boundary walls to multi-storey buildings — meets the highest standards of quality and safety.
            </p>
            <p>
              We pride ourselves on transparent communication, competitive pricing and a commitment to delivering projects on time and within budget.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg aspect-square flex items-center justify-center">
          <Target size={80} className="text-primary/30" />
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Values</p>
          <h2 className="font-display text-3xl font-bold text-foreground">What Drives Us</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-custom text-center">
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">
          Let's Build Something Great Together
        </h2>
        <Button asChild size="lg">
          <Link to="/contact">
            Get In Touch <ArrowRight size={16} className="ml-1" />
          </Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default About;
