import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-accent text-accent-foreground">
    <div className="container-custom section-padding">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-3">Abbtec</h3>
          <p className="text-base opacity-80 leading-relaxed">
            Building &amp; Construction Ltd. Trusted civil engineering solutions across Kenya.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-base font-semibold mb-3 uppercase tracking-wider opacity-70">
            Quick Links
          </h4>
          <ul className="space-y-2 text-base">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="opacity-80 hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-display text-base font-semibold mb-3 uppercase tracking-wider opacity-70">
            Legal
          </h4>
          <ul className="space-y-2 text-base">
            <li>
              <Link to="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="opacity-80 hover:opacity-100 transition-opacity">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-base font-semibold mb-3 uppercase tracking-wider opacity-70">
            Contact
          </h4>
          <ul className="space-y-3 text-base">
            <li className="flex items-center gap-2">
              <Phone size={14} className="opacity-70" />
              <a href="tel:+254797844652" className="opacity-80 hover:opacity-100">
                +254 797 844 652
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="opacity-70 mt-0.5" />
              <a
                href="mailto:abbtecbuildingconstructionltd@gmail.com"
                className="opacity-80 hover:opacity-100 break-all"
              >
                abbtecbuildingconstructionltd@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="opacity-70" />
              <span className="opacity-80">Ruaka, Nairobi</span>
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://www.facebook.com/share/14Z1WLkiE8d/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <Facebook size={18} />
            </a>
            <a href="https://x.com/AbigaelNzilani" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <Twitter size={18} />
            </a>
            <a href="https://www.linkedin.com/company/abbtec" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-accent-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm opacity-60">
        <p>&copy; {new Date().getFullYear()} Abbtec Building &amp; Construction Ltd. All rights reserved.</p>
        <p>
          Built by{" "}
          <a
            href="https://itnest.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-100"
          >
            ITNEST
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
