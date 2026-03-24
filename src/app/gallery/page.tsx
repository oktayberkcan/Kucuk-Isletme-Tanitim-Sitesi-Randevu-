
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Scissors, Zap, Sparkles, Wind, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const portfolioItems = [
  {
    id: "gallery-1",
    title: "Modern Skin Fade",
    category: "Saç Kesimi",
    icon: <Scissors className="h-4 w-4" />,
    description: "Sıfırdan mükemmel geçişe uzanan keskin hatlar."
  },
  {
    id: "gallery-2",
    title: "Royal Sakal Bakımı",
    category: "Sakal Tasarımı",
    icon: <Zap className="h-4 w-4" />,
    description: "Yüz hatlarını belirginleştiren özel şekillendirme."
  },
  {
    id: "gallery-3",
    title: "Geleneksel Tıraş",
    category: "Bakım & Terapi",
    icon: <Wind className="h-4 w-4" />,
    description: "Sıcak havlu ve ustura ile pürüzsüz deneyim."
  },
  {
    id: "gallery-4",
    title: "Klasik Pompadour",
    category: "Saç Kesimi",
    icon: <Scissors className="h-4 w-4" />,
    description: "Zamana meydan okuyan hacimli ve parlak stil."
  },
  {
    id: "gallery-5",
    title: "Detoks Cilt Bakımı",
    category: "Bakım & Terapi",
    icon: <Sparkles className="h-4 w-4" />,
    description: "Erkek cildi için özel buhar ve maske terapisi."
  },
  {
    id: "gallery-6",
    title: "Katlı Kesim",
    category: "Saç Kesimi",
    icon: <Scissors className="h-4 w-4" />,
    description: "Doğal görünüm için hassas makas işçiliği."
  },
  {
    id: "gallery-7",
    title: "Renk Değişimi",
    category: "Saç Boyama",
    icon: <Sparkles className="h-4 w-4" />,
    description: "Doğal gri kapatma ve modern renk uygulamaları."
  },
  {
    id: "gallery-8",
    title: "Premium Terapi",
    category: "Saç Bakımı",
    icon: <Wind className="h-4 w-4" />,
    description: "Saç derisini canlandıran özel yıkama ve masaj."
  },
  {
    id: "gallery-9",
    title: "Grafik Tasarım",
    category: "Stil Sanatı",
    icon: <Scissors className="h-4 w-4" />,
    description: "Saç dövmeleri ve keskin yan hat uygulamaları."
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(38,217,205,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <CheckCircle className="h-3 w-3" /> Stil Rehberi & Portfolyo
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-foreground leading-[0.9]">
              Görünümünü <br />
              <span className="text-primary italic">Keşfet.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Royal Cuts koltuğundan çıkan her çalışma bir sanat eseridir. Size en uygun stili bulmak için galerimize göz atın.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {portfolioItems.map((item) => {
            const imgData = PlaceHolderImages.find(img => img.id === item.id);
            return (
              <div key={item.id} className="group flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border/50 bg-card shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:border-primary/30">
                  <Image
                    src={imgData?.imageUrl || `https://picsum.photos/seed/${item.id}/800/1000`}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={imgData?.imageHint || "barber haircut"}
                  />
                  {/* Decorative Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                    <span className="text-primary">{item.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">{item.category}</span>
                  </div>
                </div>

                <div className="px-4 space-y-3">
                  <h3 className="text-3xl font-headline font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <div className="w-12 h-1 bg-primary/20 rounded-full group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 container mx-auto px-4">
        <div className="relative rounded-[3rem] bg-card/50 border border-border/50 p-12 md:p-20 overflow-hidden text-center space-y-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,217,205,0.1),transparent)]" />
          <h2 className="text-4xl md:text-6xl font-headline font-bold max-w-2xl mx-auto leading-tight relative z-10">
            Kendi Stilini Yaratmaya <br /><span className="text-primary">Hazır mısın?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Button asChild size="lg" className="h-16 px-12 text-lg font-bold bg-primary text-primary-foreground shadow-xl">
              <Link href="/book">Randevu Oluştur</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-16 px-12 text-lg font-bold border-primary text-primary hover:bg-primary/5">
              <Link href="/services">Hizmetlere Göz At</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
