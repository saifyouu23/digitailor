"use client"

import Image from "next/image"

export function MarqueeBrandShowcase() {
  const minaBrandImages = [
    {
      id: 1,
      src: "/images/1764176497826-019ac11b-4ed5-7aeb-879c-32bc47501d12.jpeg",
      alt: "Mina Candle Heart Design",
    },
    {
      id: 2,
      src: "/images/1764175356655-019ac10b-198e-711a-81f0-aaf6cfee8b56.png",
      alt: "Mina Ceramic Container",
    },
    {
      id: 3,
      src: "/images/whatsapp-tea-set.jpeg",
      alt: "Mina Tea Set Lifestyle",
    },
  ]

  const brandingImages = [
    {
      id: 1,
      src: "/images/1765584969522-019b1510-779a-700e-8008-d32b70c37d78.jpeg",
      alt: "Professional Cleaning Service",
    },
    {
      id: 2,
      src: "/images/family-dubai-home.png",
      alt: "Family Home Cleaning",
    },
    {
      id: 3,
      src: "/images/1765587928581-019b153d-3c81-72ce-b3e5-3cb99ee2cbf1.jpeg",
      alt: "Clean Up Brand Identity",
    },
  ]

  const socialMediaImages = [
    {
      id: 1,
      src: "/images/1764341134843-019acaec-51de-779e-b9fa-8cdc5b16f748.jpeg",
      alt: "Skinnovations Beauty Cream",
    },
    {
      id: 2,
      src: "/images/skinnovations-moroccan.jpeg",
      alt: "Skinnovations Moroccan Beauty Collection",
    },
    {
      id: 3,
      src: "/images/1764338084790-019acabd-6b43-7875-a1ce-7d00135feafc.png",
      alt: "Skinnovations Golden Spice Collection",
    },
  ]

  // Duplicate for seamless looping
  const displayMinaImages = [...minaBrandImages, ...minaBrandImages, ...minaBrandImages]
  const displayBrandingImages = [...brandingImages, ...brandingImages, ...brandingImages]
  const displaySocialImages = [...socialMediaImages, ...socialMediaImages, ...socialMediaImages]

  return (
    <section className="py-24 overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-4">Brand Showcase</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-balance mb-4">
            Our Creative
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse collection of branding, ads, design, and content we've created for innovative brands
          </p>
        </div>

        {/* Marquee Container */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-muted-foreground mb-4 px-2">Mina Brand Collection</h4>
          <div className="relative overflow-hidden bg-gradient-to-r from-background via-background/50 to-background rounded-2xl border border-border/40 p-4 lg:p-6">
            {/* Gradient masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Marquee Animation */}
            <div className="flex animate-marquee-infinite gap-4 lg:gap-6">
              {displayMinaImages.map((image, index) => (
                <div
                  key={`mina-${image.id}-${index}`}
                  className="relative flex-shrink-0 w-[350px] lg:w-[480px] h-[250px] lg:h-[380px] overflow-hidden rounded-lg border border-border/40 group"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 1024px) 350px, 480px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-sm font-semibold text-muted-foreground mb-4 px-2">Brand Identity & Design</h4>
          <div className="relative overflow-hidden bg-gradient-to-r from-background via-background/50 to-background rounded-2xl border border-border/40 p-4 lg:p-6">
            {/* Gradient masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Marquee Animation */}
            <div className="flex animate-marquee-infinite gap-4 lg:gap-6">
              {displayBrandingImages.map((image, index) => (
                <div
                  key={`branding-${image.id}-${index}`}
                  className="relative flex-shrink-0 w-[350px] lg:w-[480px] h-[250px] lg:h-[380px] overflow-hidden rounded-lg border border-border/40 group"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 1024px) 350px, 480px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-4 px-2">Social Media & Digital Ads</h4>
          <div className="relative overflow-hidden bg-gradient-to-r from-background via-background/50 to-background rounded-2xl border border-border/40 p-4 lg:p-6">
            {/* Gradient masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Marquee Animation */}
            <div className="flex animate-marquee-infinite gap-4 lg:gap-6">
              {displaySocialImages.map((image, index) => (
                <div
                  key={`social-${image.id}-${index}`}
                  className="relative flex-shrink-0 w-[350px] lg:w-[480px] h-[250px] lg:h-[380px] overflow-hidden rounded-lg border border-border/40 group"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 1024px) 350px, 480px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee Speed Control Info */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Scroll through our diverse portfolio of branding, advertisements, design work, and creative content
        </p>
      </div>
    </section>
  )
}
