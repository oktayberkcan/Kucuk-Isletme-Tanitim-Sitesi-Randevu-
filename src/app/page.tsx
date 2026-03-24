
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Scissors, Star, ShieldCheck, Clock, ArrowRight } from "lucide-react";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-img');

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <Image
            src={heroImage?.imageUrl || "https://picsum.photos/seed/barber1/1920/1080"}
            alt="Royal Cuts Premium Barber"
            fill
            className="object-cover"
            priority
            data-ai-hint="barber salon"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4 animate-in fade-in slide-in-from-left-8 duration-700">
              <h2 className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-sm md:text-base">
                Modern Gentlemen's Sanctuary
              </h2>
              <h1 className="text-6xl md:text-9xl font-headline font-bold text-foreground leading-[1.05]">
                Mastery in <br />
                <span className="text-primary italic">Every Cut.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed animate-in fade-in slide-in-from-left-10 duration-1000">
              Geleneksel berber sanatını modern estetikle buluşturuyoruz. Kendinizi Royal Cuts'ın uzman ellerine bırakın.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <Button asChild size="lg" className="h-16 px-10 text-lg font-bold bg-primary text-primary-foreground shadow-[0_0_30px_rgba(38,217,205,0.4)] hover:shadow-primary/50 transition-all">
                <Link href="/book">Hemen Randevu Al</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-primary text-primary hover:bg-primary/10">
                <Link href="/services">Hizmetlerimiz</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="py-20 border-y border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <p className="text-4xl font-headline font-bold text-primary">15+</p>
              <p className="text-muted-foreground uppercase tracking-widest text-xs">Yıllık Tecrübe</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-headline font-bold text-primary">5k+</p>
              <p className="text-muted-foreground uppercase tracking-widest text-xs">Mutlu Müşteri</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-headline font-bold text-primary">8</p>
              <p className="text-muted-foreground uppercase tracking-widest text-xs">Usta Berber</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-headline font-bold text-primary">4.9</p>
              <p className="text-muted-foreground uppercase tracking-widest text-xs">Google Puanı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={aboutImage?.imageUrl || "https://picsum.photos/seed/barber-work/800/1000"}
                alt="Expert Barber at Royal Cuts"
                fill
                className="object-cover"
                data-ai-hint="barber working"
              />
              <div className="absolute inset-0 border-2 border-primary/20 m-6 rounded-xl pointer-events-none" />
            </div>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-primary font-headline font-bold uppercase tracking-widest">Neden Royal Cuts?</h2>
                <h3 className="text-5xl font-headline font-bold">Lüks ve Ustalığın Buluştuğu Tek Nokta</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Royal Cuts, sadece bir berber dükkanı değil, modern erkeğin stilini keşfettiği bir yaşam merkezidir. Her detay, size en üst düzeyde konfor sunmak için tasarlandı.
                </p>
              </div>

              <div className="grid gap-8">
                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Star className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">Kişiselleştirilmiş Stil</h4>
                    <p className="text-muted-foreground">Yüz şeklinize ve yaşam tarzınıza en uygun kesimi beraber belirliyoruz.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">Premium Ürünler</h4>
                    <p className="text-muted-foreground">Dünyanın en iyi markalarıyla saç ve cilt bakımı sağlıyoruz.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">Dakik Hizmet</h4>
                    <p className="text-muted-foreground">Zamanınızın değerli olduğunu biliyoruz, randevu saatlerinize sadık kalıyoruz.</p>
                  </div>
                </div>
              </div>

              <Button asChild variant="link" className="text-primary p-0 h-auto font-bold group">
                <Link href="/services" className="flex items-center gap-2">
                  Tüm Hizmetlerimizi Keşfedin <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-32 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-primary font-headline font-bold uppercase tracking-widest">Öne Çıkanlar</h2>
            <h3 className="text-5xl font-headline font-bold">Popüler Hizmetlerimiz</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Klasik Kesim", price: "₺450", desc: "Zamana meydan okuyan, her ortama uyum sağlayan kusursuz kesim." },
              { title: "Sakal Tasarımı", price: "₺300", desc: "Yüz hatlarınızı belirginleştiren profesyonel sakal bakımı ve şekillendirme." },
              { title: "Royal Bakım", price: "₺850", desc: "Saç kesimi, sakal tasarımı ve sıcak havlu terapisiyle tam yenilenme." }
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <Scissors className="h-8 w-8 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="text-primary font-bold text-xl">{service.price}</span>
                </div>
                <h4 className="text-2xl font-headline font-bold mb-4">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <Link href="/book" className="text-sm font-bold uppercase tracking-widest text-primary/70 hover:text-primary transition-colors">Randevu Al</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-headline font-bold max-w-4xl mx-auto leading-tight">
            Tarzınızı Bir Üst Seviyeye Taşıyın
          </h2>
          <div className="flex justify-center gap-6">
            <Button asChild size="lg" className="h-16 px-12 text-lg font-bold bg-primary text-primary-foreground">
              <Link href="/book">Randevu Oluştur</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
