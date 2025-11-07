import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, Calendar, CheckCircle } from "lucide-react";

const Tours = () => {
  return (
    <section id="tours" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tour Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our group adventures or personalized experiences tailored to your preferences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Group Tours */}
          <Card className="shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all duration-300 border-0 bg-[image:var(--card-gradient)]">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">Group Tours</CardTitle>
              <CardDescription className="text-base">
                Join like-minded travelers on fixed-date adventures
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Fixed departure dates with small groups (8-15 people)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Meet fellow travelers and make lifelong friends</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Experienced tour manager throughout the journey</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Cost-effective with all-inclusive pricing</p>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-accent">Next departures starting from ₹15,999</p>
                </div>
              </div>
              <Button className="w-full mt-6" size="lg">
                View Group Tours
              </Button>
            </CardContent>
          </Card>

          {/* Personal Tours */}
          <Card className="shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all duration-300 border-0 bg-[image:var(--card-gradient)]">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-3xl">Personal Tours</CardTitle>
              <CardDescription className="text-base">
                Customized itineraries designed around your preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Flexible dates according to your schedule</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Tailor-made experiences matching your interests</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Private tours with dedicated tour guide</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Complete freedom to customize your journey</p>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-accent">Starting from ₹25,999 per person</p>
                </div>
              </div>
              <Button variant="secondary" className="w-full mt-6" size="lg">
                Customize Your Tour
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tours;
