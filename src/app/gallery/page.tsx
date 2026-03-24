
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-primary font-headline font-bold uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-500">Çalışmalarımız</h2>
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-foreground animate-in fade-in slide-in-from-bottom-6 duration-700">Royal Sanatı</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Uzman ellerden çıkan modern kesimler ve geleneksel bakım ritüelleri. Royal Cuts'ta her işlem bir sanat eseridir.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((img, index) => (
          <div 
            key={img.id} 
            className="relative aspect-[3/4] overflow-hidden rounded-3xl group border border-border/40 bg-card shadow-xl hover:shadow-primary/20 transition-all duration-500"
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
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 shadow-lg">
                  Royal Signature
                </span>
                <h3 className="text-2xl font-headline font-bold text-white mb-2 leading-tight">
                  {img.description}
                </h3>
                <div className="w-12 h-1 bg-primary rounded-full" />
              </div>
            </div>

            {/* Subtle border shine on hover */}
            <div className="absolute inset-0 border border-white/10 group-hover:border-primary/40 transition-colors duration-500 rounded-3xl pointer-events-none" />
          </div>
        ))}
      </div>

      <div className="mt-24 text-center border-t border-border pt-16">
        <div className="inline-flex items-center gap-4 text-muted-foreground/60 font-headline uppercase tracking-[0.3em] text-sm">
          <div className="h-px w-16 bg-primary/30" />
          Her Detayda Mükemmeliyet
          <div className="h-px w-16 bg-primary/30" />
        </div>
      </div>
    </div>
  );
}
