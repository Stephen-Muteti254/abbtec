import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";

const Privacy = () => (
  <Layout>
    <SEOHead
      title="Privacy Policy | Abbtec Building & Construction Ltd"
      description="Read Abbtec's privacy policy to understand how we collect, use and protect your personal information."
      path="/privacy"
    />
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-8">Last updated: February 2026</p>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Information We Collect</h2>
            <p>We collect personal information you provide when contacting us, including your name, email address, phone number and project details. We may also collect usage data through standard web analytics.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">How We Use Your Information</h2>
            <p>Your information is used to respond to inquiries, provide project estimates, communicate about our services and improve our website experience. We do not sell or share your personal data with third parties for marketing purposes.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information. However, no method of electronic transmission is 100% secure and we cannot guarantee absolute security.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Contact</h2>
            <p>For questions about this policy, contact us at <a href="mailto:abbtecbuildingconstructionltd@gmail.com" className="text-primary hover:underline">abbtecbuildingconstructionltd@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
