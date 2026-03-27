
import { Scissors } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Scissors className="h-6 w-6 text-primary" />
              </div>
              <span className="font-headline text-xl font-bold text-foreground">
                ROYAL<span className="text-primary">CUTS</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-[250px]">
              Modern erkeğin bakım ihtiyaçları için en prestijli adres. Ustalık ve lüksün buluşma noktası.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <h4 className="font-headline font-bold mb-2 text-foreground tracking-widest text-sm uppercase">ÇALIŞMA SAATLERİ</h4>
            <div className="space-y-1 text-center">
              <p className="text-sm text-muted-foreground">Pzt - Cum: 09:00 - 20:00</p>
              <p className="text-sm text-muted-foreground">Cmt: 10:00 - 18:00</p>
              <p className="text-sm text-primary font-medium">Paz: Kapalı</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <h4 className="font-headline font-bold mb-2 text-foreground tracking-widest text-sm uppercase">İLETİŞİM & KONUM</h4>
            <div className="space-y-1 text-center md:text-right">
              <p className="text-sm text-muted-foreground">Merkez Mah. İstiklal Cad. No:123</p>
              <p className="text-sm text-muted-foreground">Şişli, İstanbul</p>
              <p className="text-sm text-primary font-bold">+90 (212) 000 00 00</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Royal Cuts. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
