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
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Residential & Commercial Buildings",
    items: [
      "Construction of residential flats and apartments",
      "Office buildings and complexes",
      "Structural design and planning",
      "Building repairs and general maintenance",
    ],
  },
  {
    icon: Route,
    title: "Roadworks & Paving",
    items: [
      "Earthworks, grading and asphalt/concrete paving",
      "Sidewalks and parking lots",
      "Access roads",
      "Construction of culverts",
    ],
  },
  {
    icon: Droplets,
    title: "Water & Sewerage",
    items: [
      "Design & installation of drainage systems",
      "Septic tanks",
      "Water reticulation systems",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Project Management & Consulting",
    items: [
      "Site feasibility studies",
      "Cost estimates and permit procurement",
      "On-site supervision",
      "Reconstruction services",
    ],
  },
  {
    icon: Hammer,
    title: "Fabrication, Installation & Finishing",
    items: [
      "Interior and exterior finishes",
      "Custom design, fabrication and installation",
      "High quality finishes",
      "Welding and professional installations",
    ],
  },
  {
    icon: Fence,
    title: "Boundary Wall Construction",
    items: [
      "Boundary walls for homes, schools and businesses",
      "Demolition and reconstruction of boundary walls",
    ],
  },
  {
    icon: School,
    title: "Schools & Institutions",
    items: [
      "Junior secondary and primary school classrooms",
      "Renovations and expansions",
    ],
  },
];

const Services = () => (
  <Layout>
    <SEOHead
      title="Our Services | Abbtec Building & Construction Ltd"
      description="Explore Abbtec's civil engineering services: buildings, roadworks, water systems, project management, fabrication and more."
      path="/services"
    />

    {/* Hero */}
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="max-w-2xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Services</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Construction Solutions
          </h1>
          <p className="text-muted-foreground text-lg">
            End-to-end civil engineering services tailored to your project needs.
          </p>
        </div>
      </div>
    </section>

    {/* Services List */}
    <section className="section-padding">
      <div className="container-custom space-y-8">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid lg:grid-cols-5 gap-6 p-6 rounded-lg border border-border ${
              i % 2 === 0 ? "bg-card" : "bg-section-alt"
            }`}
          >
            <div className="lg:col-span-2 flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <s.icon size={20} className="text-primary" />
              </div>
              <h2 className="font-display text-lg font-semibold text-foreground">{s.title}</h2>
            </div>
            <ul className="lg:col-span-3 space-y-2">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary section-padding">
      <div className="container-custom text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Contact us to discuss your project requirements and get a detailed quote.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link to="/contact">
            Request a Quote <ArrowRight size={16} className="ml-1" />
          </Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Services;
