import { TutorialSteps } from "@/components/tutorial/tutorial-steps";

export default function TutorialPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-headline font-bold mb-4">
          How It Works
        </h1>
        <p className="text-lg text-muted-foreground">
          Follow these simple steps to start using SatAgroBr and unlock the power of NASA data.
        </p>
      </div>
      <TutorialSteps />
    </div>
  );
}
