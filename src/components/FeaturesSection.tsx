import { Card } from "@/components/ui/card";
import { Zap, Users, Trophy, Code, Timer, Gamepad2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time code execution and instant feedback. No waiting, just pure coding adrenaline.",
    color: "vars-orange"
  },
  {
    icon: Users,
    title: "1v1 Matches",
    description: "Face off against opponents of similar skill level in intense coding duels.",
    color: "vars-blue"
  },
  {
    icon: Trophy,
    title: "Skill-Based Ranking",
    description: "Advanced ELO system ensures fair matches and competitive progression.",
    color: "vars-purple"
  },
  {
    icon: Code,
    title: "Multiple Languages",
    description: "Code in JavaScript, Python, Java, C++, and more. Use what you know best.",
    color: "vars-green"
  },
  {
    icon: Timer,
    title: "Time Pressure",
    description: "Limited time adds excitement and mimics real interview conditions.",
    color: "vars-red"
  },
  {
    icon: Gamepad2,
    title: "Game-like Experience",
    description: "Achievements, streaks, and rewards make competitive programming addictive.",
    color: "accent"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-accent">vars</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Something for every level of competitive coding experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border hover:border-accent/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-sm bg-${feature.color}/10 border border-${feature.color}/20 group-hover:bg-${feature.color}/20 transition-colors`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};