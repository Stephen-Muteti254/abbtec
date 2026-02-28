import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";

const Terms = () => (
  <Layout>
    <SEOHead
      title="Terms & Conditions | Abbtec Building & Construction Ltd"
      description="Review the terms and conditions for using Abbtec's website and services."
      path="/terms"
    />
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-foreground mb-6">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground text-sm mb-8">Last updated: February 2026</p>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Use of Website</h2>
            <p>By accessing this website, you agree to these terms. The content is provided for informational purposes only and does not constitute a binding contract for construction services.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Services</h2>
            <p>All construction and engineering services are subject to separate written agreements between Abbtec Building &amp; Construction Ltd and the client. Project terms, timelines and pricing are defined in individual contracts.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Intellectual Property</h2>
            <p>All content on this website, including text, images and design, is the property of Abbtec Building &amp; Construction Ltd and may not be reproduced without written permission.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Limitation of Liability</h2>
            <p>Abbtec is not liable for any damages arising from the use of this website. Construction project liabilities are governed by individual project contracts.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:abbtecbuildingconstructionltd@gmail.com" className="text-primary hover:underline">abbtecbuildingconstructionltd@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
