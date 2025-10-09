import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Gauge, Brain } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who are <span className="text-accent">we</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vars provides on-demand, quality code competitions.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Hop into a 1v1 coding match anytime, regardless of skill level.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="p-8 text-center bg-gradient-card border-border">
            <div className="w-16 h-16 bg-vars-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-vars-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Skill-Matched</h3>
            <p className="text-muted-foreground">
              Our advanced matching system ensures you're always paired with opponents of similar skill level for fair and competitive matches.
            </p>
          </Card>

          <Card className="p-8 text-center bg-gradient-card border-border">
            <div className="w-16 h-16 bg-vars-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gauge className="w-8 h-8 text-vars-green" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Real-Time</h3>
            <p className="text-muted-foreground">
              Experience the thrill of live coding competitions with instant feedback, real-time opponent tracking, and immediate results.
            </p>
          </Card>

          <Card className="p-8 text-center bg-gradient-card border-border">
            <div className="w-16 h-16 bg-vars-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-vars-purple" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Interview Prep</h3>
            <p className="text-muted-foreground">
              Perfect your coding interview skills with time pressure, algorithmic challenges, and competitive scenarios that mirror real interviews.
            </p>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button variant="varsAccent" size="lg">
            Start your first match
          </Button>
        </div>
      </div>
    </section>
  );
};