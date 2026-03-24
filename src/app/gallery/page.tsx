
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-primary font-headline font-bold uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-500">Visual Portfolio</h2>
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-foreground animate-in fade-in slide-in-from-bottom-6 duration-700">The Royal Experience</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Zanaatkarlığımızın ve Royal Cuts'ın eşsiz atmosferinin bir yansıması. Modern çizgiler ve geleneksel ustalığın buluşma noktası.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <div 
            key={img.id} 
            className="relative aspect-[4/5] overflow-hidden rounded-2xl group border border-border/40 bg-card shadow-lg hover:shadow-primary/10 transition-all duration-500"
          >
            <Image
              src={img.imageUrl}
              alt={img.description}
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={img.imageHint}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 backdrop-blur-sm border border-primary/30">
                  Masterclass
                </span>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {img.description}
                </h3>
                <div className="w-10 h-1 bg-primary rounded-full" />
              </div>
            </div>

            {/* Subtle border shine on hover */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-500 rounded-2xl pointer-events-none" />
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <div className="inline-flex items-center gap-4 text-muted-foreground/40 font-headline uppercase tracking-[0.3em] text-sm">
          <div className="h-px w-12 bg-border" />
          Established for Excellence
          <div className="h-px w-12 bg-border" />
        </div>
      </div>
    </div>
  );
}
