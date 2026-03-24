
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pricingList = [
  { service: "Saç Kesimi (Modern & Klasik)", duration: "30-45 dk", price: "₺450" },
  { service: "Skin Fade (Sıfırlama Kesim)", duration: "45-60 dk", price: "₺550" },
  { service: "Sakal Tasarımı ve Bakımı", duration: "20 dk", price: "₺300" },
  { service: "Sakal Şekillendirme & Buharlı Havlu", duration: "35 dk", price: "₺400" },
  { service: "Saç + Sakal Combo", duration: "60 dk", price: "₺650" },
  { service: "Royal Executive Paket (Full Bakım)", duration: "90 dk", price: "₺1200" },
  { service: "Cilt Bakımı (Derin Temizlik)", duration: "45 dk", price: "₺500" },
  { service: "El ve Tırnak Bakımı (Manikür)", duration: "30 dk", price: "₺400" },
  { service: "Geleneksel Sıcak Havlu Tıraşı", duration: "40 dk", price: "₺350" },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-primary font-headline font-bold uppercase tracking-widest animate-in fade-in duration-500">Şeffaf Fiyatlandırma</h2>
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">Hizmet Tarifemiz</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Dünya standartlarında bakım hizmeti için net ve şeffaf fiyatlandırma politikası.
        </p>
      </div>

      <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-1000">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow className="border-border/50">
              <TableHead className="py-8 px-8 text-foreground font-bold text-lg">Hizmet</TableHead>
              <TableHead className="py-8 text-foreground font-bold text-center text-lg">Süre</TableHead>
              <TableHead className="py-8 px-8 text-foreground font-bold text-right text-lg">Fiyat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pricingList.map((item) => (
              <TableRow key={item.service} className="border-border/40 hover:bg-primary/5 transition-colors group">
                <TableCell className="py-6 px-8 font-medium text-lg group-hover:text-primary transition-colors">
                  {item.service}
                </TableCell>
                <TableCell className="py-6 text-center text-muted-foreground font-medium">
                  {item.duration}
                </TableCell>
                <TableCell className="py-6 px-8 text-right font-bold text-primary text-xl tabular-nums">
                  {item.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-16 text-center p-12 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl border border-primary/20 shadow-xl">
        <h3 className="text-2xl font-headline font-bold mb-4">Değişime hazır mısınız?</h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Size en uygun saati seçin, koltuğunuzu hemen ayıralım.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold h-16 px-16 text-lg shadow-lg hover:shadow-primary/30 transition-all">
          <Link href="/book">Şimdi Randevu Al</Link>
        </Button>
      </div>
      
      <p className="mt-8 text-center text-sm text-muted-foreground/40 italic">
        * Fiyatlara tüm premium bakım ürünleri ve içecek ikramımız dahildir.
      </p>
    </div>
  );
}
