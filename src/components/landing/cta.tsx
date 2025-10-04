import { Button } from "@/components/ui/button";

export function Cta() {
    return (
        <section className="py-20 sm:py-32">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4 text-white">
                    Ready to Transform Agriculture?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                    Install the SatAgroBr extension today and start your journey towards smarter, more sustainable farming.
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                    Get Started Now
                </Button>
            </div>
        </section>
    );
}
