import React from 'react';
import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
  research: [
    { name: 'Research Areas', href: '/research-areas' },
    { name: 'Research Status', href: '/research-status' },
    { name: 'Soil Health Documentation', href: '/learn/regenerative-agriculture' },
    { name: 'Systems Stress Patterns', href: '/learn/health-and-suffering' },
  ],
  organization: [
    { name: 'About Us', href: '/about' },
    { name: 'Governance & Policies', href: '/governance' },
    { name: 'Questions', href: '/questions' },
    { name: 'Contact Us', href: '/contact' },
  ],
  resources: [
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Stewardship Portal', href: '/stewardship' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
  connect: [
    { name: 'Partnership', href: '/partner' },
    { name: 'General Inquiries', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/zentrust' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/zentrust' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/zentrust' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CRITICAL COMPLIANCE BLOCK: MEDICAL & EDUCATIONAL DISCLAIMER */}
        <div className="pt-12 pb-6 border-b border-border">
          <div className="rounded-lg bg-muted/50 p-6 border border-border/50">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
              Medical & Educational Disclaimer
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground italic">
              ZenTrust content is provided for informational and educational research purposes only and does 
              not constitute medical advice, diagnosis, or treatment. Our documentation of biological and 
              ecological patterns is intended to support systems education. Always seek the advice of 
              your physician or other qualified health provider with any questions regarding a medical 
              condition.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Leaf className="h-8 w-8 text-primary" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg" />
                </div>
                <span className="text-2xl font-bold gradient-text">
                  ZenTrust
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed">
                Advancing the documentation of regenerative systems, ecological 
                patterns, and open scientific education. We provide research 
                resources to support land stewardship and community-based systems science.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <a href="mailto:hello@zentrust.org" className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>hello@zentrust.org</span>
                </a>

                <a href="tel:+15083177517" className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+1 (508) 317-7517</span>
                </a>

                <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span className="leading-tight">
                    2 Reserve Way<br />
                    Duxbury, MA 02332, USA
                  </span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Research</h3>
              <ul className="space-y-2">
                {footerLinks.research.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Organization</h3>
              <ul className="space-y-2">
                {footerLinks.organization.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
              <ul className="space-y-2">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Legal Entity Details */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

            <div className="text-center md:text-left space-y-1">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} ZenTrust. All rights reserved.
              </p>
              <p className="text-[11px] leading-tight text-muted-foreground/80 max-w-md">
                ZenTrust, Inc. is a registered 501(c)(3) public charity. <br className="hidden sm:block" />
                Employer Identification Number (EIN): 33-4318487.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
