import { Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/20">
      <div className="container mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand and Address Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-light tracking-wide text-foreground">
                livemore
              </span>
            </Link>

            <div className="space-y-1 text-sm text-muted-foreground">
              <p>2261 Market Street, STE 86182</p>
              <p>San Francisco, CA 94114</p>
              <p>United States</p>
            </div>

            <div className="max-w-md">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prevent diseases by actively monitoring your health data and
                taking action for healthier you.
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-foreground">Product</h3>
            <ul className="space-y-3">
              {[
                { label: "Dashboard", href: "/" },
                { label: "Health Tracking", href: "/" },
                { label: "Analytics", href: "/" },
                { label: "Reports", href: "/" },
                { label: "Integrations", href: "/" },
                { label: "Mobile App", href: "/" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-medium text-foreground">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Mission", href: "/about" },
                { label: "Team", href: "/about" },
                { label: "Careers", href: "/" },
                { label: "Partners", href: "/" },
                { label: "News", href: "/" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-medium text-foreground">Support</h3>
            <ul className="space-y-3">
              {[
                { label: "Help Center", href: "/contact" },
                { label: "Documentation", href: "/" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Security", href: "/" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground">
              Copyright © Livemore Inc. All rights reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {[
                {
                  icon: <Twitter className="h-4 w-4" />,
                  href: "#",
                  label: "Twitter",
                },
                {
                  icon: <Instagram className="h-4 w-4" />,
                  href: "#",
                  label: "Instagram",
                },
                {
                  icon: <Linkedin className="h-4 w-4" />,
                  href: "#",
                  label: "LinkedIn",
                },
                {
                  icon: <Youtube className="h-4 w-4" />,
                  href: "#",
                  label: "YouTube",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
