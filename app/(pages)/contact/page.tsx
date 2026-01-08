import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import QuickLinks from "../../components/contact/QuickLinks";

export const metadata = {
  title: "Contact Us | Jolli by iZone - Powered by iZone",
  description:
    "Get in touch with iZone Limited for bundle inquiries, partnership opportunities, or customer support. We're here to help you on your digital journey.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Quick Links to Bundles */}
      <QuickLinks />
    </main>
  );
}
