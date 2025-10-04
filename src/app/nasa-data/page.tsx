import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Satellite, Droplets, Leaf, CloudDrizzle, Globe, KeyRound, Download, CheckCircle, Search, Calendar, MapPin, Lightbulb, Link as LinkIcon, BarChart, Package, Eye, TestTube2, TrendingUp } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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

const smapShows = [
    {
        icon: <Droplets className="w-5 h-5 text-primary" />,
        text: "Se o solo está seco demais e precisa de irrigação"
    },
    {
        icon: <CloudDrizzle className="w-5 h-5 text-primary" />,
        text: "Se está muito úmido, o que pode causar apodrecimento das raízes"
    },
    {
        icon: <Globe className="w-5 h-5 text-primary" />,
        text: "Ajudam a prever seca ou enchentes com dias de antecedência"
    }
]

const ecostressShows = [
    {
        icon: <div className="text-primary">🌡️</div>,
        text: "A planta está superaquecendo"
    },
    {
        icon: <Droplets className="w-5 h-5 text-primary opacity-70" />,
        text: "O solo não está absorvendo água o suficiente"
    },
    {
        icon: <BarChart className="w-5 h-5 text-primary -rotate-45" />,
        text: "O rendimento da lavoura vai cair se nada for feito"
    }
];

const missions = [
    {
        dado: "Umidade do solo (visível do espaço)",
        missao: "SMAP",
        mostra: "Mostra se o solo está muito seco ou já está no ponto ideal pra regar ou plantar."
    },
    {
        dado: "Estresse por calor nas plantas",
        missao: "ECOSTRESS",
        mostra: "Detecta quando as plantas estão superaquecendo — antes mesmo de murcharem. Assim, você evita queda de rendimento."
    },
    {
        dado: "Cobertura vegetal e crescimento",
        missao: "Landsat",
        mostra: "Mostra se a lavoura está se desenvolvendo bem ou se sofreu com seca, pragas ou pisoteio."
    },
    {
        dado: "Dados agrícolas e climáticos globais",
        missao: "Harvest Portal (NASA)",
        mostra: "Reúne dados sobre cultura, clima, produtividade e variação entre safras. Tudo em um só lugar."
    }
];


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

                 <div className="text-center max-w-3xl mx-auto py-8">
                    <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4 text-foreground">
                        Missões que você deve conhecer
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Os satélites da NASA não estão apenas olhando para o espaço — eles também olham para a Terra, o campo e até a sua plantação. Essas missões foram criadas para entender o planeta em tempo real, e hoje são ferramentas poderosas para quem trabalha com agricultura.
                    </p>
                     <p className="text-lg text-muted-foreground mt-4">
                        Abaixo estão algumas das principais missões que você pode usar (sim, de graça 👇):
                    </p>
                </div>

                <Card className="bg-card/50 border-border/50 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                         <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="font-bold">🌍 Dado</TableHead>
                                        <TableHead className="font-bold">🛰️ Satélite/Missão</TableHead>
                                        <TableHead className="font-bold">🌾 O que ele te mostra no campo</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {missions.map((mission) => (
                                        <TableRow key={mission.missao}>
                                            <TableCell className="font-medium">{mission.dado}</TableCell>
                                            <TableCell>{mission.missao}</TableCell>
                                            <TableCell>{mission.mostra}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
                <div>
                    <Image 
                        src="https://i.postimg.cc/7h6RF5wp/SATELITES-SCIENCE-FLEET.jpg" 
                        alt="Frota de satélites da NASA"
                        width={1200}
                        height={675}
                        className="rounded-lg shadow-xl w-full h-auto object-cover"
                    />
                    <p className="text-center text-sm text-muted-foreground mt-2">Essa imagem representa a frota de satélites de observação da Terra da NASA.</p>
                </div>

                <Card className="bg-card/50 border-border/50 shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-foreground">Explicando de forma simples:</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">Esses satélites funcionam como <strong className="text-primary">olhos no céu</strong>, que enxergam o que o olho humano não vê — a umidade escondida no solo, o calor que a planta sente, e até as áreas da lavoura que estão ficando para trás.</p>
                        <p className="text-muted-foreground">Com esses dados, você <strong className="text-primary">pode tomar decisões mais inteligentes</strong>:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                            <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                                <Droplets className="w-7 h-7 mb-2 text-accent"/>
                                <span className="font-semibold">Quando irrigar</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                                <TestTube2 className="w-7 h-7 mb-2 text-accent"/>
                                <span className="font-semibold">Onde adubar</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                                <TrendingUp className="w-7 h-7 mb-2 text-accent"/>
                                <span className="font-semibold">Prever o rendimento</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>


                 <div className="text-center max-w-3xl mx-auto py-8">
                    <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4 text-foreground">
                        Bem-vindo ao mundo dos dados práticos
                    </h2>
                    <p className="text-lg text-muted-foreground">
                       Agora que você sabe onde buscar, vamos ao que interessa: <strong>como usar isso na prática.</strong> A NASA possui diversas missões que observam a Terra. Duas delas são verdadeiros tesouros para a agricultura:
                    </p>
                </div>

                <Card className="bg-card/50 border-border/50 shadow-lg">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Globe className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-2xl text-foreground">SMAP (Soil Moisture Active Passive)</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-muted-foreground">
                           O SMAP é um satélite que mede <strong>a umidade dos primeiros 5 cm do solo</strong> em todo o planeta — e faz isso a cada 2 ou 3 dias. Esses dados mostram:
                        </p>
                        <ul className="space-y-2 list-inside text-muted-foreground">
                             {smapShows.map(item => (
                                <li key={item.text} className="flex items-center gap-3">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="p-4 bg-background/50 rounded-lg">
                           <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><BarChart className="w-5 h-5 text-accent"/>Aplicação real:</h4>
                           <p className="text-muted-foreground">Produtores podem reduzir o desperdício de água em até <strong>30%</strong> ajustando a irrigação conforme o nível de umidade detectado pelo SMAP. <em className="text-xs">(Fonte: NASA SMAP Applications Report, 2023)</em></p>
                        </div>
                        <div>
                           <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Package className="w-5 h-5 text-accent"/>Onde acessar:</h4>
                           <ul className="space-y-2">
                                <li><a href="https://smap.jpl.nasa.gov/data/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2"><LinkIcon className="w-4 h-4"/>SMAP Data Portal</a></li>
                                <li><a href="https://search.earthdata.nasa.gov/search?q=SMAP" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2"><LinkIcon className="w-4 h-4"/>NASA Earthdata Search - SMAP</a></li>
                           </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/50 shadow-lg">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Leaf className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="font-headline text-2xl text-foreground">ECOSTRESS</CardTitle>
                                <CardDescription>Ecosystem Spaceborne Thermal Radiometer Experiment on Space Station</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-muted-foreground">
                           O ECOSTRESS fica instalado na <strong>Estação Espacial Internacional (ISS)</strong> e mede a <strong>temperatura das plantas</strong>, detectando quando elas estão sob <i>estresse hídrico</i> — mesmo antes de apresentarem sinais visíveis. Isso significa que ele pode avisar quando:
                        </p>
                        <ul className="space-y-2 list-inside text-muted-foreground">
                            {ecostressShows.map(item => (
                                <li key={item.text} className="flex items-center gap-3">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                         <Alert className="bg-accent/10 border-accent/30 text-accent-foreground">
                            <Lightbulb className="h-5 w-5 text-accent" />
                            <AlertTitle className="font-headline text-accent">Dica Prática</AlertTitle>
                            <AlertDescription className="text-muted-foreground grid md:grid-cols-2 gap-6 items-center pt-2">
                                <div className="space-y-2">
                                    <p>Imagine que o ECOSTRESS detectou uma área da lavoura com 3°C acima do normal.</p>
                                    <p>Essa área provavelmente <strong>está recebendo menos água ou sombra</strong> — e isso pode te economizar milhares de reais em insumos ao corrigir o problema cedo.</p>
                                </div>
                                <Image 
                                    src="https://i.postimg.cc/RF06xdfB/dsa.png" 
                                    alt="Mapa de calor de uma lavoura" 
                                    width={400} 
                                    height={225} 
                                    className="rounded-lg shadow-md w-full h-auto object-cover"
                                />
                            </AlertDescription>
                        </Alert>
                        <div className="p-4 bg-background/50 rounded-lg">
                           <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><BarChart className="w-5 h-5 text-accent"/>Aplicação real:</h4>
                           <p className="text-muted-foreground">Pesquisadores no México e na Califórnia já usam o ECOSTRESS para <strong>prever estresse nas plantações de milho e algodão com até 7 dias de antecedência</strong>, ajustando a irrigação para evitar perdas.</p>
                        </div>
                        <div>
                           <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Package className="w-5 h-5 text-accent"/>Onde acessar:</h4>
                           <ul className="space-y-2">
                                <li><a href="https://glam.nasaharvest.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2"><LinkIcon className="w-4 h-4"/>GLOBAL AGRICULTURE MONITORING SYSTEM</a></li>
                                <li><a href="https://worldview.earthdata.nasa.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2"><LinkIcon className="w-4 h-4"/>NASA Worldview</a></li>
                           </ul>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    </div>
  );
}

    