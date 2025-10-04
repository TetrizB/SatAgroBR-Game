import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Satellite, Droplets, Leaf, CloudDrizzle, Globe, KeyRound, Download, CheckCircle, Search, Calendar, MapPin, Lightbulb } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from 'next/image';

const accessSteps = [
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    text: 'Buscar por Região (ex: “Cerrado”, “Vale do São Francisco”)'
  },
  {
    icon: <Search className="w-5 h-5 text-primary" />,
    text: 'Filtrar por Tipo de dado (solo, temperatura, vegetação)'
  },
  {
    icon: <Calendar className="w-5 h-5 text-primary" />,
    text: 'Selecionar o Período (ex: “últimos 30 dias”)'
  }
];

const dataUses = [
    {
        icon: <Droplets className="w-5 h-5 text-primary" />,
        text: "Mudanças na umidade do solo"
    },
    {
        icon: <div className="text-primary">☀️</div>,
        text: "Aumento da temperatura e estresse térmico nas lavouras"
    },
    {
        icon: <Leaf className="w-5 h-5 text-primary" />,
        text: "Variações sazonais que afetam o crescimento das plantas"
    }
]

export default function NasaDataPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl sm:text-5xl font-headline font-bold mb-4 text-foreground">
                    Wiki SatAgroBr: Aprenda a Usar Dados de Satélite da NASA na Agricultura
                </h1>
                <p className="text-lg text-muted-foreground">
                    Bem-vindo(a)! Esta página foi feita pra você que quer entender de forma simples como dados de satélite da NASA podem virar ferramentas poderosas no campo — pra monitorar o solo, proteger plantações e decidir melhor quando regar ou colher.
                </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-12">
                <Card className="bg-card/50 border-border/50 shadow-lg">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Globe className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="font-headline text-2xl text-foreground">1. Começando: Acesso & Conceitos Essenciais</CardTitle>
                                <CardDescription className="text-lg">Os dados da NASA são <span className="font-bold text-primary">abertos, gratuitos e públicos.</span></CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          Ou seja, qualquer pessoa pode explorar imagens de satélite e informações sobre o clima, o solo e a vegetação — sem pagar nada e sem precisar de softwares caros. Esses dados são usados por <strong>pesquisadores, governos e empresas agrícolas</strong> do mundo todo para entender fenômenos como:
                        </p>
                        <ul className="space-y-2 list-inside text-muted-foreground">
                            {dataUses.map(item => (
                                <li key={item.text} className="flex items-center gap-3">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-muted-foreground pt-2">
                           Mas a grande barreira é: <strong>a maioria das pessoas não sabe onde encontrar ou como interpretar essas informações.</strong> Foi por isso que nasceu o <strong>SatAgroBr</strong> — para <span className="italic">traduzir os dados espaciais em linguagem do campo</span>, mostrando como eles podem gerar impacto direto no dia a dia do produtor.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/50 shadow-lg">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <KeyRound className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-2xl text-foreground">Como acessar os dados</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-muted-foreground">
                            Para começar a explorar o universo da NASA, você só precisa se cadastrar no portal <a href="https://earthdata.nasa.gov/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Earthdata</a>. O cadastro é gratuito e serve para:
                        </p>
                         <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                            <li className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                                <Download className="w-6 h-6 mb-2 text-primary"/>
                                <span className="text-sm text-muted-foreground">Fazer download de imagens de satélite</span>
                            </li>
                            <li className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                                <CheckCircle className="w-6 h-6 mb-2 text-primary"/>
                                <span className="text-sm text-muted-foreground">Criar alertas personalizados de dados</span>
                            </li>
                            <li className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                                <Globe className="w-6 h-6 mb-2 text-primary"/>
                                <span className="text-sm text-muted-foreground">Conectar com ferramentas (QGIS, etc.)</span>
                            </li>
                        </ul>
                        <p className="text-muted-foreground">Depois de logar, você já pode buscar informações por:</p>
                         <ul className="space-y-2 list-inside text-muted-foreground">
                            {accessSteps.map(step => (
                                <li key={step.text} className="flex items-center gap-3">
                                    {step.icon}
                                    <span>{step.text}</span>
                                </li>
                            ))}
                        </ul>

                        <Alert className="bg-accent/10 border-accent/30 text-accent-foreground">
                            <Lightbulb className="h-5 w-5 text-accent" />
                            <AlertTitle className="font-headline text-accent">Dica SatAgroBr #1</AlertTitle>
                            <AlertDescription className="text-muted-foreground grid md:grid-cols-2 gap-6 items-center pt-2">
                                <div className="space-y-2">
                                    <p>Baixe o dado <strong className="text-primary">Soil Moisture</strong> (umidade do solo) do satélite <strong>SMAP</strong> e compare com as previsões de chuva da sua cidade.</p>
                                    <p>Você vai ver que o espaço acerta mais do que o noticiário.</p>
                                </div>
                                <Image 
                                    src="https://i.postimg.cc/XYTnx8NC/smap-instrument-th.jpg" 
                                    alt="Satélite SMAP da NASA" 
                                    width={400} 
                                    height={225} 
                                    className="rounded-lg shadow-md w-full h-auto object-cover"
                                />
                            </AlertDescription>
                        </Alert>

                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}