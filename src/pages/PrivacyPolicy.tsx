import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      content: "This Privacy Policy explains how LeverEdge Trading LLC (\"LeverEdge,\" \"we,\" \"our,\" or \"us\") collects, uses, discloses, and protects the personal information of individuals (\"Traders,\" \"you,\" or \"your\") who access or use our website, mobile application, and related services (collectively, the \"Platform\")."
    },
    {
      title: "Information We Collect",
      content: "We collect the following information: Name, Email Address, Mobile Number, PAN Card Copy, and Bank Statement/Account Details."
    },
    {
      title: "Use of Information",
      content: "Your information is used for identity verification, processing transactions, providing support, and maintaining records. We do not sell or share your data for marketing purposes."
    },
    {
      title: "Data Retention",
      content: "Your data is retained only as long as required for operational and regulatory purposes and securely deleted thereafter."
    },
    {
      title: "Data Protection",
      content: "LeverEdge uses reasonable administrative and technical measures to protect personal data against unauthorized access or misuse."
    },
    {
      title: "Third-Party Services",
      content: "We are not responsible for the privacy practices of third-party sites linked through our Platform."
    },
    {
      title: "Cookies and Tracking",
      content: "We use only essential cookies for authentication and session management."
    },
    {
      title: "Your Rights",
      content: "You may request access, correction, or deletion of your personal data by contacting support@leveredge.trade."
    },
    {
      title: "Changes to the Privacy Policy",
      content: "We may update this Privacy Policy at any time without prior notice."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Your privacy and data security are our top priorities
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-foreground/80">
                    {section.content}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}

            {/* Contact Section */}
            <Card className="border-primary/30 bg-card/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-foreground/80">
                  For any queries or concerns regarding this Privacy Policy, please contact us at:
                  <br />
                  <br />
                  <strong className="text-primary">Email:</strong>{" "}
                  <a href="mailto:support@leveredge.trade" className="text-primary hover:underline">
                    support@leveredge.trade
                  </a>
                  <br />
                  <strong className="text-primary">Company:</strong> LeverEdge Trading LLC
                  <br />
                  <strong className="text-primary">Location:</strong> United Kingdom
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
