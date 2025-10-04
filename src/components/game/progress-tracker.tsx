import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star } from "lucide-react";

interface ProgressTrackerProps {
    score: number;
    badges: string[];
}

export function ProgressTracker({ score, badges }: ProgressTrackerProps) {
    return (
        <Card className="bg-card/60 backdrop-blur-md">
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <Award className="w-6 h-6 text-accent" />
                    Your Progress
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Score</p>
                    <p className="text-3xl font-bold text-primary">{score}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Badges</p>
                    {badges.length > 0 ? (
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                            {badges.map(badge => (
                                <div key={badge} className="flex items-center gap-2 py-1 px-3 rounded-full bg-accent/20 text-accent-foreground">
                                    <Star className="w-5 h-5 text-accent fill-accent" />
                                    <span className="font-semibold text-sm">{badge}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground mt-2">No badges earned yet.</p>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
