import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsConditions = () => {
  const sections = [
    {
      title: "Overview",
      content: "These Terms govern your use of LeverEdge's website, app, and services. By registering, you agree to these Terms."
    },
    {
      title: "Eligibility",
      content: "Users must be at least 18 years old and legally competent."
    },
    {
      title: "Trading Services",
      content: "LeverEdge offers OTC leveraged index option trading up to 4x. All trades are at Trader's risk."
    },
    {
      title: "Leverage and Auto Square-Off",
      content: "Positions are auto squared-off when notional loss reaches 95% of the invested amount."
    },
    {
      title: "Deposits and Withdrawals",
      content: "Deposits reflect only after credited to our account. Withdrawals are processed post proprietary fund settlement."
    },
    {
      title: "Fees and Charges",
      content: "LeverEdge may charge brokerage or administrative fees as applicable."
    },
    {
      title: "No Investment Advice",
      content: "All content is informational and not financial advice."
    },
    {
      title: "Risk Disclosure",
      content: "Leveraged trading involves significant risk and potential loss of entire capital."
    },
    {
      title: "Platform Access and Availability",
      content: "Platform availability may vary due to maintenance or technical reasons."
    },
    {
      title: "Limitation of Liability",
      content: "LeverEdge is not liable for losses, delays, or damages arising from use of the Platform."
    },
    {
      title: "Account Suspension or Termination",
      content: "Accounts may be suspended for fraud, misinformation, or Terms violations."
    },
    {
      title: "Intellectual Property",
      content: "All content and algorithms belong exclusively to LeverEdge Trading LLC."
    },
    {
      title: "Amendments",
      content: "LeverEdge may modify these Terms anytime. Continued use implies acceptance."
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
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before using our services
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
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-foreground/80">
                  For support and queries, please contact us at:
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

export default TermsConditions;
