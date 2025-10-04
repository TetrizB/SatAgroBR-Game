"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DataVisualization } from './data-visualization';
import { ProgressTracker } from './progress-tracker';

const scenarios = [
    {
        id: 1,
        text: "A dry spell is predicted for the next two weeks. Satellite soil moisture data is low. What do you do?",
        options: [
            { text: "Increase irrigation", points: -5, feedback: "While necessary, this increases water usage. There might be a better way." },
            { text: "Apply a layer of mulch to retain moisture", points: 10, feedback: "Excellent choice! Mulching helps conserve water effectively." },
            { text: "Do nothing and hope for rain", points: -10, feedback: "Risky! Your crops are likely to suffer without intervention." },
        ],
    },
    {
        id: 2,
        text: "Satellite imagery shows a patch of your field is less green than others, indicating a potential nutrient deficiency. What's your next step?",
        options: [
            { text: "Apply fertilizer to the entire field", points: -5, feedback: "This is wasteful and can cause runoff. Precision is key!" },
            { text: "Take a soil sample from that specific patch for analysis", points: 10, feedback: "Correct! This data-driven approach allows for targeted treatment." },
            { text: "Ignore it, it's probably just a bad patch of soil", points: -10, feedback: "Neglecting this could lead to significant yield loss." },
        ],
    },
    {
        id: 3,
        text: "Pest activity is detected in the north-west corner of your soybean field via remote sensing. How do you respond?",
        options: [
            { text: "Spray the entire field with pesticide", points: -10, feedback: "Over-spraying is costly and harms beneficial insects. Be more precise!" },
            { text: "Deploy a drone to spot-spray the affected area", points: 10, feedback: "Perfect! A modern, precise solution that saves money and protects the environment." },
            { text: "Introduce predatory insects to the whole field", points: 5, feedback: "A good biological control method, though less targeted than spot-spraying for this specific problem." },
        ],
    }
];

export function GameInterface() {
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [badges, setBadges] = useState<string[]>([]);
    const [gameOver, setGameOver] = useState(false);
    
    const currentScenario = scenarios[currentScenarioIndex];

    const handleOptionClick = (option: { text: string; points: number; feedback: string }) => {
        if (gameOver || feedback) return;

        const newScore = score + option.points;
        setScore(newScore);
        setFeedback(option.feedback);

        if (newScore >= 15 && !badges.includes("Data Star")) {
            setBadges(prev => [...prev, "Data Star"]);
        }
        if (newScore >= 25 && !badges.includes("Agro-Innovator")) {
            setBadges(prev => [...prev, "Agro-Innovator"]);
        }

        setTimeout(() => {
            setFeedback("");
            if (currentScenarioIndex < scenarios.length - 1) {
                setCurrentScenarioIndex(currentScenarioIndex + 1);
            } else {
                setGameOver(true);
            }
        }, 3000);
    };

    const restartGame = () => {
        setCurrentScenarioIndex(0);
        setScore(0);
        setFeedback("");
        setBadges([]);
        setGameOver(false);
    };

    return (
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <Card className="bg-card/60 backdrop-blur-md h-full min-h-[450px]">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Scenario {currentScenario.id}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col h-full">
                        {gameOver ? (
                             <div className="text-center my-auto">
                                <h3 className="text-2xl font-bold font-headline mb-4">Challenge Complete!</h3>
                                <p className="text-lg text-muted-foreground mb-6">Your final score is {score}.</p>
                                <Button onClick={restartGame} size="lg">Play Again</Button>
                             </div>
                        ) : (
                            <>
                                <p className="text-lg mb-6">{currentScenario.text}</p>
                                <div className="grid md:grid-cols-1 gap-4">
                                    {currentScenario.options.map(option => (
                                        <Button key={option.text} onClick={() => handleOptionClick(option)} variant="secondary" className="justify-start text-left h-auto py-3 text-base">
                                            {option.text}
                                        </Button>
                                    ))}
                                </div>
                                {feedback && (
                                    <div className="mt-6 p-4 rounded-md bg-secondary/30">
                                        <p className="font-semibold">{feedback}</p>
                                    </div>
                                )}
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-8">
                <ProgressTracker score={score} badges={badges} />
                <DataVisualization />
            </div>
        </div>
    )
}
