import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const steps = [
  {
    id: '1',
    title: 'Install the Browser Extension',
    description: 'Download and install the SatAgroBr extension from the Chrome Web Store. It\'s free and takes just a few seconds.',
    imageId: 'tutorial-step-1',
    newImageUrl: 'https://i.postimg.cc/vHrZxGqJ/JOGO-SAT-AGROBR.png'
  },
  {
    id: '2',
    title: 'Start the Game',
    description: 'Click the extension icon in your browser to launch the SatAgroBr game. No account needed to start playing and learning.',
    imageId: 'tutorial-step-2',
    newImageUrl: 'https://i.postimg.cc/TYshXtsT/JOGO-SAT-AGROBR-2.png'
  },
  {
    id: '3',
    title: 'Use Data to Make Decisions',
    description: 'Within the game, you\'ll be presented with farming challenges. Use the provided NASA data visualizations to make informed decisions for your virtual farm.',
    imageId: 'tutorial-step-3',
  },
  {
    id: '4',
    title: 'Track Your Progress and Learn',
    description: 'As you complete challenges, you\'ll earn points and badges. Each challenge teaches a new concept about sustainable agriculture and data analysis.',
    imageId: 'feature-progress',
  },
];

export function TutorialSteps() {
  const images = PlaceHolderImages;
  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-4">
        {steps.map((step) => {
          const image = images.find(p => p.id === step.imageId);
          const imageUrl = (step as any).newImageUrl || image?.imageUrl;
          return (
            <AccordionItem key={step.id} value={`item-${step.id}`} className="bg-card/50 border-border/50 rounded-lg shadow-lg">
              <AccordionTrigger className="text-xl font-headline hover:no-underline px-6">
                <span className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold">
                    {step.id}
                  </span>
                  {step.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <p className="text-muted-foreground text-base">
                    {step.description}
                  </p>
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={step.title}
                      width={300}
                      height={225}
                      className="rounded-lg shadow-md w-full max-w-xs mx-auto h-auto object-cover"
                      data-ai-hint={image?.imageHint}
                    />
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
