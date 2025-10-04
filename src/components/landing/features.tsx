import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Gamepad2, BarChart3, Award } from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-accent" />,
    title: "Interactive Tutorial",
    description: "A step-by-step guide to get you started with our browser extension and its powerful features.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-accent" />,
    title: "Educational Game",
    description: "Learn sustainable agriculture by playing a fun game that uses real-world NASA data scenarios.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-accent" />,
    title: "Data Visualization",
    description: "Visualize NASA data like never before. See the impact of climate on agriculture in real-time.",
  },
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: "Progress Tracking",
    description: "Track your learning journey, earn badges, and become a master of agricultural technology.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">Why SatAgroBr?</h2>
          <p className="text-muted-foreground text-lg mb-12">
            We transform complex satellite data into an engaging and educational experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card/50 border-border/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
