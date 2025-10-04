import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src="https://i.postimg.cc/0jcGnNT3/Design-sem-nome-52.png" alt="SatAgroBr logo" width={24} height={24} />
          <p className="text-center text-sm leading-loose md:text-left text-muted-foreground">
            Built to educate about NASA data in agriculture.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SatAgroBr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
