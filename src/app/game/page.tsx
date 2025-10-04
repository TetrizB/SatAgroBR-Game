import { GameInterface } from "@/components/game/game-interface";

export default function GamePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-headline font-bold">
                    The Harvest Challenge
                </h1>
                <p className="text-lg text-muted-foreground">
                    Make the right choices for your farm using NASA data.
                </p>
            </div>
            <GameInterface />
        </div>
    );
}
