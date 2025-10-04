import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Satellite, Droplets, Leaf, BarChart3 } from 'lucide-react';

const nasaDataInfo = [
  {
    icon: <Satellite className="w-8 h-8 text-accent" />,
    title: 'Imagens de Satélite',
    description: 'Utilizamos imagens de alta resolução de satélites como o Landsat e o Sentinel para monitorar a saúde das plantações, identificar áreas com estresse hídrico e detectar mudanças no uso da terra ao longo do tempo.',
  },
  {
    icon: <Droplets className="w-8 h-8 text-accent" />,
    title: 'Umidade do Solo (SMAP)',
    description: 'O satélite SMAP (Soil Moisture Active Passive) da NASA fornece dados cruciais sobre a quantidade de água no solo. Isso ajuda os agricultores a otimizar a irrigação, economizando água e garantindo que as plantas recebam a hidratação necessária.',
  },
  {
    icon: <Leaf className="w-8 h-8 text-accent" />,
    title: 'Índice de Vegetação (NDVI)',
    description: 'O NDVI é uma métrica calculada a partir de imagens de satélite que indica a saúde e a densidade da vegetação. Valores altos de NDVI sugerem uma vegetação mais saudável e densa, permitindo a identificação precoce de problemas na lavoura.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-accent" />,
    title: 'Dados de Precipitação (GPM)',
    description: 'A missão GPM (Global Precipitation Measurement) monitora a chuva e a neve em todo o mundo. Esses dados são vitais para prever safras, gerenciar recursos hídricos e se preparar para eventos climáticos extremos, como secas e inundações.',
  },
];

export default function NasaDataPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl sm:text-5xl font-headline font-bold mb-4 text-foreground">
                    Desvendando os Dados da NASA para a Agricultura
                </h1>
                <p className="text-lg text-muted-foreground">
                    A NASA não explora apenas o espaço; ela também nos fornece uma visão sem precedentes do nosso próprio planeta. Aprenda como os dados de satélite estão transformando a agricultura e como você pode usá-los no nosso jogo.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {nasaDataInfo.map((item) => (
                <Card key={item.title} className="bg-card/50 border-border/50 shadow-lg flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        {item.icon}
                    </div>
                    <CardTitle className="font-headline text-xl text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
            <div className="text-center mt-16">
                <p className="text-lg text-muted-foreground">
                    No jogo <span className="font-bold text-primary">The Harvest Challenge</span>, você aplicará esses conceitos para tomar as melhores decisões para sua fazenda!
                </p>
            </div>
        </div>
    </div>
  );
}
