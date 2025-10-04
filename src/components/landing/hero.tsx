import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 z-10 relative">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-headline font-bold mb-6 tracking-wide text-white">
                    SatAgroBr: The Future of Farming
                </h1>
                <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                    Harness the power of NASA's satellite data to revolutionize your agricultural practices. Play, learn, and grow with SatAgroBr.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                        <Link href="/game">Play The Game</Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary" className="bg-background/80 hover:bg-background text-foreground w-full sm:w-auto">
                        <Link href="/tutorial">Learn How</Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
