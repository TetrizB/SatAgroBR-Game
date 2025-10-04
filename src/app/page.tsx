import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Cta } from "@/components/landing/cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Cta />
    </div>
  );
}
