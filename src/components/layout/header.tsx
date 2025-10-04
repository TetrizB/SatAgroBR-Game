import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <Image src="https://i.postimg.cc/0jcGnNT3/Design-sem-nome-52.png" alt="SatAgroBr logo" width={40} height={40} />
          <Image src="https://i.postimg.cc/wBgPTwXj/2.png" alt="SatAgroBr" width={100} height={20} />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/game" className="transition-colors text-foreground hover:text-primary">
            Game
          </Link>
          <Link href="/tutorial" className="transition-colors text-foreground hover:text-primary">
            Tutorial
          </Link>
          <Link href="/nasa-data" className="transition-colors text-foreground hover:text-primary">
            Dados da NASA
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button>
            Install Extension
          </Button>
        </div>
      </div>
    </header>
  );
}
