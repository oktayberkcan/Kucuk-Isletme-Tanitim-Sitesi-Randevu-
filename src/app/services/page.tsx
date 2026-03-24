
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Zap, Users, Sparkles, Hand, Wind, SprayCan } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Saç Kesimi (Haircut)",
    duration: "45 dk",
    price: "₺450",
    description: "Kafa yapınıza ve stil tercihlerinize göre uyarlanmış hassas kesim. Danışmanlık ve şekillendirme dahildir.",
    icon: <Scissors className="h-8 w-8 text-primary" />,
  },
  {
    name: "Sakal Tasarımı (Beard Trim)",
    duration: "30 dk",
    price: "₺300",
    description: "Kusursuz bir sakal profili sağlamak için keskin dış hatlar ve uzunluk kontrolü.",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    name: "Combo (Saç + Sakal)",
    duration: "60 dk",
    price: "₺650",
    description: "Komple dönüşüm için imza hizmetimiz. Tam saç kesimi ve sakal bakımı.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    name: "Cilt Bakımı (Skin Care)",
    duration: "45 dk",
    price: "₺500",
    description: "Erkek cildi için tasarlanmış buhar tedavisi ve premium maskelerle derin temizlik.",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
  },
  {
    name: "Sıcak Havlu Tıraşı",
    duration: "40 dk",
    price: "₺350",
    description: "Geleneksel tekniklerle uygulanan, cildi ferahlatan ve pürüzsüzleştiren tıraş deneyimi.",
    icon: <Wind className="h-8 w-8 text-primary" />,
  },
  {
    name: "Manikür & Pedikür",
    duration: "50 dk",
    price: "₺400",
    description: "Profesyonel el ve tırnak bakımı. Şekillendirme, parlatma ve kütikül yönetimi.",
    icon: <Hand className="h-8 w-8 text-primary" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center mb-24 space-y-6">
        <h2 className="text-primary font-headline font-bold uppercase tracking-widest animate-in fade-in duration-500">Uzmanlık Alanlarımız</h2>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">Premium Hizmetler</h1>
        <p className="text-muted-foreground text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Kişisel tarzınızı ve özgüveninizi yükseltmek için titizlikle hazırlanmış bakımlar. Sizin için en iyisini sunuyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {services.map((service, index) => (
          <Card key={service.name} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-primary/5">
            <CardHeader className="pb-4">
              <div className="mb-6 p-4 w-fit rounded-2xl bg-primary/5 group-hover:bg-primary/10 transform group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="text-2xl font-headline group-hover:text-primary transition-colors">{service.name}</CardTitle>
                <span className="text-primary font-bold text-xl whitespace-nowrap">{service.price}</span>
              </div>
              <CardDescription className="text-primary/70 font-medium pt-2">
                Süre: {service.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-base">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-3xl bg-primary/5 p-12 text-center space-y-8 border border-primary/10">
        <h3 className="text-3xl font-headline font-bold">Özel Bir Talebiniz mi Var?</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          VIP odamızda sessiz kesim veya özel etkinlikler için grup rezervasyonları gibi konularda bize ulaşabilirsiniz.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold h-14 px-10">
          <Link href="/book">Bize Danışın</Link>
        </Button>
      </div>
    </div>
  );
}
