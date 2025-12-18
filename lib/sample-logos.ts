export interface Logo {
  id: string
  name: string
  svg?: string
  image?: string
  height: string
  url?: string
}

export const sampleLogos: Logo[] = [
  {
    id: "anosoin",
    name: "Anosoin",
    image: "/images/anosoin-removebg-preview-1-removebg-preview.png",
    height: "h-16", // Increased from h-12 to h-16
    url: "https://anosoin.com/",
  },
  {
    id: "dienstverlening",
    name: "Dienstverlening",
    image: "/images/1761051790806-019a06dd-a643-7487-be13-f76fec446500-photoroom.png",
    height: "h-20", // Increased from h-16 to h-20
    url: "https://www.ahmd.nl/",
  },
  {
    id: "e-station",
    name: "E-Station",
    image: "/images/logo-e-station-removebg-preview.png",
    height: "h-16", // Increased from h-12 to h-16
    url: "https://e-stations.ma/",
  },
  {
    id: "rbauto",
    name: "RBAuto Store",
    image: "/images/logo-rbauto-store-dark-background-removebg-preview.png",
    height: "h-14", // Increased from h-10 to h-14
    url: "https://rbauto.store/",
  },
  {
    id: "mina",
    name: "Mina",
    image: "/images/mina-logo-01-2-removebg-preview.png",
    height: "h-16", // Increased from h-12 to h-16
  },
  {
    id: "maison-du-hype",
    name: "Maison du Hype",
    image: "/images/logo-maison-du-hype-removebg-preview.png",
    height: "h-18", // Increased from h-14 to h-18
    url: "https://maisonduhype.com/",
  },
  {
    id: "skinnovation",
    name: "Skinnovation",
    image: "/images/logo-skinnovations-colorful-background.png", // Updated to new colorful background logo
    height: "h-14", // Increased from h-10 to h-14
    url: "https://skinnovations.net/",
  },
]
