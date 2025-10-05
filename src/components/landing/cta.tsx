import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Cta() {
    return (
        <section className="py-20 sm:py-32">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4 text-foreground">
                    Ready to Transform Agriculture?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Install the SatAgroBr extension today and start your journey towards smarter, more sustainable farming.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                  <Link href="https://drive.google.com/drive/folders/1I_IOrOIPlbVy-n5UEjuIL53w-TtE_hsh?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Get Started Now
                  </Link>
                </Button>
            </div>
        </section>
    );
}
