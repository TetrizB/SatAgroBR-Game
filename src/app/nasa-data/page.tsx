
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Satellite, Droplets, Leaf, CloudDrizzle, Globe, KeyRound, Download, CheckCircle, Search, Calendar, MapPin, Lightbulb, Link as LinkIcon, BarChart, Package, Eye, TestTube2, TrendingUp } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const accessSteps = [
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    text: 'Search by Region (e.g., “Cerrado”, “São Francisco Valley”)'
  },
  {
    icon: <Search className="w-5 h-5 text-primary" />,
    text: 'Filter by Data Type (soil, temperature, vegetation)'
  },
  {
    icon: <Calendar className="w-5 h-5 text-primary" />,
    text: 'Select the Period (e.g., “last 30 days”)'
  }
];

const dataUses = [
    {
        icon: <Droplets className="w-5 h-5 text-primary" />,
        text: "Changes in soil moisture"
    },
    {
        icon: <div className="text-primary">☀️</div>,
        text: "Increase in temperature and heat stress on crops"
    },
    {
        icon: <Leaf className="w-5 h_5 text-primary" />,
        text: "Seasonal variations affecting plant growth"
    }
]

const smapShows = [
    {
        icon: <Droplets className="w-5 h-5 text-primary" />,
        text: "If the soil is too dry and needs irrigation"
    },
    {
        icon: <CloudDrizzle className="w-5 h-5 text-primary" />,
        text: "If it's too wet, which can cause root rot"
    },
    {
        icon: <Globe className="w-5 h-5 text-primary" />,
        text: "Helps predict droughts or floods days in advance"
    }
]

const ecostressShows = [
    {
        icon: <div className="text-primary">🌡️</div>,
        text: "The plant is overheating"
    },
    {
        icon: <Droplets className="w-5 h-5 text-primary opacity-70" />,
        text: "The soil is not absorbing enough water"
    },
    {
        icon: <BarChart className="w-5 h-5 text-primary -rotate-45" />,
        text: "Crop yield will drop if nothing is done"
    }
];

const missions = [
    {
        dado: "Soil Moisture (visible from space)",
        missao: "SMAP",
        mostra: "Shows if the soil is too dry or at the ideal point for watering or planting."
    },
    {
        dado: "Plant Heat Stress",
        missao: "ECOSTRESS",
        mostra: "Detects when plants are overheating—even before they wilt. This way, you avoid yield loss."
    },
    {
        dado: "Vegetation Cover and Growth",
        missao: "Landsat",
        mostra: "Shows if the crop is developing well or has suffered from drought, pests, or trampling."
    },
    {
        dado: "Global Agricultural and Climate Data",
        missao: "Harvest Portal (NASA)",
        mostra: "Gathers data on crops, climate, productivity, and variation between harvests. All in one place."
    }
];


export default function NasaDataPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl sm:text-5xl font-headline font-bold mb-4 text-foreground">
                    SatAgroBr Wiki: Learn to Use NASA Satellite Data in Agriculture
                </h1>
                <p className="text-lg text-muted-foreground">
                    Welcome! This page is designed for those who want to understand in a simple way how NASA satellite data can become powerful tools in the field—to monitor soil, protect crops, and make better decisions about when to water or harvest.
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
                                <CardTitle className="font-headline text-2xl text-foreground">1. Getting Started: Access & Key Concepts</CardTitle>
                                <CardDescription className="text-lg">NASA's data is <span className="font-bold text-primary">open, free, and public.</span></CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          This means anyone can explore satellite images and information about climate, soil, and vegetation—without paying anything and without needing expensive software. This data is used by <strong>researchers, governments, and agricultural companies</strong> worldwide to understand phenomena such as:
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
                           But the main barrier is: <strong>most people don't know where to find or how to interpret this information.</strong> That's why <strong>SatAgroBr</strong> was born—to <span className="italic">translate spatial data into the language of the field</span>, showing how it can have a direct impact on the producer's daily life.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/50 shadow-lg">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <KeyRound className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-2xl text-foreground">How to access the data</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-muted-foreground">
                            To start exploring the NASA universe, you just need to register on the <a href="https://earthdata.nasa.gov/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Earthdata</a> portal. Registration is free and allows you to:
                        </p>
                         <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                            <li className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                                <Download className="w-6 h-6 mb-2 text-primary"/>
                                <span className="text-sm text-muted-foreground">Download satellite images</span>
                            </li>
                            <li className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                                <CheckCircle className="w-6 h-6 mb-2 text-primary"/>
                                <span className="text-sm text-muted-foreground">Create custom data alerts</span>
                            </li>
                            <li className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                                <Globe className="w-6 h-6 mb-2 text-primary"/>
                                <span className="text-sm text-muted-foreground">Connect with tools (QGIS, etc.)</span>
                            </li>
                        </ul>
                        <p className="text-muted-foreground">After logging in, you can search for information by:</p>
                         <ul className="space-y-2 list-inside text-muted-foreground">
                            {accessSteps.map(step => (
                                <li key={step.text} className="flex items-center gap-3">
                                    {step.icon}
                                    <span>{step.text}</span>
                                </li>
                            ))}
                        </ul>

                        <Alert className="bg-secondary/20 border-secondary/50">
                            <Lightbulb className="h-5 w-5 text-primary" />
                            <AlertTitle className="font-headline text-primary">SatAgroBr Tip #1</AlertTitle>
                            <AlertDescription className="text-muted-foreground pt-2">
                                <div className="space-y-2">
                                    <p>Download the <strong className="text-primary">Soil Moisture</strong> data from the <strong>SMAP</strong> satellite and compare it with your city's rain forecasts.</p>
                                    <p>You'll see that space is more accurate than the news.</p>
                                </div>
                            </AlertDescription>
                        </Alert>

                    </CardContent>
                </Card>

                 <div className="text-center max-w-3xl mx-auto py-8">
                    <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4 text-foreground">
                        Missions You Should Know
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        NASA's satellites aren't just looking at space—they're also looking at the Earth, the countryside, and even your crops. These missions were created to understand the planet in real-time, and today they are powerful tools for those who work in agriculture.
                    </p>
                     <p className="text-lg text-muted-foreground mt-4">
                        Below are some of the main missions you can use (yes, for free 👇):
                    </p>
                </div>

                <Card className="bg-card/50 border-border/50 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                         <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="font-bold">🌍 Data</TableHead>
                                        <TableHead className="font-bold">🛰️ Satellite/Mission</TableHead>
                                        <TableHead className="font-bold">🌾 What it shows you in the field</TableHead>
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
                        alt="NASA's fleet of satellites"
                        width={1200}
                        height={675}
                        className="rounded-lg shadow-xl w-full h-auto object-cover"
                    />
                    <p className="text-center text-sm text-muted-foreground mt-2">This image represents NASA's Earth observation satellite fleet.</p>
                </div>

                <Card className="bg-card/50 border-border/50 shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-foreground">Explaining it simply:</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6 items-center">
                          <div className="space-y-4">
                              <p className="text-muted-foreground">These satellites act as <strong className="text-primary">eyes in the sky</strong>, seeing what the human eye cannot—the hidden moisture in the soil, the heat a plant feels, and even the areas of a crop that are falling behind.</p>
                              <p className="text-muted-foreground">With this data, you can <strong className="text-primary">make smarter decisions</strong>:</p>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                                  <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                                      <Droplets className="w-7 h-7 mb-2 text-accent"/>
                                      <span className="font-semibold">When to irrigate</span>
                                  </div>
                                  <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                                      <TestTube2 className="w-7 h-7 mb-2 text-accent"/>
                                      <span className="font-semibold">Where to fertilize</span>
                                  </div>
                                  <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                                      <TrendingUp className="w-7 h-7 mb-2 text-accent"/>
                                      <span className="font-semibold">Predict yield</span>
                                  </div>
                              </div>
                          </div>
                          <Image 
                              src="https://i.postimg.cc/nrBPDQ98/Chat-GPT-Image-4-de-out-de-2025-17-16-14.png"
                              alt="Satellite view of a farm"
                              width={500}
                              height={500}
                              className="rounded-lg shadow-md w-full h-auto object-cover"
                          />
                      </div>
                    </CardContent>
                </Card>


                 <div className="text-center max-w-3xl mx-auto py-8">
                    <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4 text-foreground">
                        Welcome to the world of practical data
                    </h2>
                    <p className="text-lg text-muted-foreground">
                       Now that you know where to look, let's get to the point: <strong>how to use this in practice.</strong> NASA has several missions observing the Earth. Two of them are true treasures for agriculture:
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
                           SMAP is a satellite that measures <strong>the moisture of the top 5 cm of soil</strong> across the entire planet—and it does so every 2 to 3 days. This data shows:
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
                           <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><BarChart className="w-5 h-5 text-accent"/>Real-world application:</h4>
                           <p className="text-muted-foreground">Producers can reduce water waste by up to <strong>30%</strong> by adjusting irrigation according to the moisture level detected by SMAP. <em className="text-xs">(Source: NASA SMAP Applications Report, 2023)</em></p>
                        </div>
                        <div>
                           <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Package className="w-5 h-5 text-accent"/>Where to access:</h4>
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
                           ECOSTRESS is installed on the <strong>International Space Station (ISS)</strong> and measures <strong>plant temperature</strong>, detecting when they are under <i>water stress</i>—even before they show visible signs. This means it can warn you when:
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
                            <AlertTitle className="font-headline text-accent">Practical Tip</AlertTitle>
                            <AlertDescription className="text-muted-foreground grid md:grid-cols-2 gap-6 items-center pt-2">
                                <div className="space-y-2">
                                    <p>Imagine ECOSTRESS has detected an area of the crop that is 3°C above normal.</p>
                                    <p>This area is likely <strong>receiving less water or shade</strong>—and this could save you thousands of dollars in inputs by correcting the problem early.</p>
                                </div>
                                <Image 
                                    src="https://i.postimg.cc/RF06xdfB/dsa.png" 
                                    alt="Heat map of a crop" 
                                    width={400} 
                                    height={225} 
                                    className="rounded-lg shadow-md w-full h-auto object-cover"
                                />
                            </AlertDescription>
                        </Alert>
                        <div className="p-4 bg-background/50 rounded-lg">
                           <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><BarChart className="w-5 h-5 text-accent"/>Real-world application:</h4>
                           <p className="text-muted-foreground">Researchers in Mexico and California are already using ECOSTRESS to <strong>predict stress in corn and cotton crops up to 7 days in advance</strong>, adjusting irrigation to prevent losses.</p>
                        </div>
                        <div>
                           <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Package className="w-5 h-5 text-accent"/>Where to access:</h4>
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

    
    