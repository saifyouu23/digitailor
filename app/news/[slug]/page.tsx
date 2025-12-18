"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

const newsArticles: Record<string, any> = {
  "digitailor-launches-ai-automation-platform": {
    title: "Digitailor Launches Next-Generation AI Automation Platform",
    date: "2025-12-15",
    author: "Saif Boukhira",
    category: "Product Launch",
    image: "https://placeholder.svg?height=600&width=1200&query=AI%20automation%20platform%20launch",
    content: `
      <p>We're thrilled to announce the official launch of Digitailor's revolutionary AI Automation Platform—a game-changing solution designed to transform how enterprises approach digital operations.</p>

      <h2>The Challenge</h2>
      <p>Enterprises today face an unprecedented challenge: the need to scale operations while maintaining efficiency and reducing costs. Legacy automation solutions fall short, and manual processes can't keep pace with modern business demands.</p>

      <h2>Our Solution</h2>
      <p>The Digitailor AI Automation Platform leverages cutting-edge artificial intelligence to intelligently automate complex workflows. Built with enterprise-grade reliability and security, our platform integrates seamlessly with existing systems while providing unprecedented levels of automation capabilities.</p>

      <h3>Key Features:</h3>
      <ul>
        <li>Intelligent workflow automation with AI-powered decision making</li>
        <li>Real-time monitoring and optimization</li>
        <li>Enterprise-grade security and compliance</li>
        <li>Seamless integration with existing systems</li>
        <li>Advanced analytics and reporting</li>
      </ul>

      <h2>Early Results</h2>
      <p>Our beta customers have already experienced remarkable results:</p>
      <ul>
        <li>98% reduction in manual errors</li>
        <li>10x faster process execution</li>
        <li>60% cost reduction in operational overhead</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>This launch marks just the beginning. We're committed to continuously evolving the platform based on customer feedback and emerging business needs. The future of enterprise automation is here, and it's powered by Digitailor.</p>

      <p>Ready to transform your operations? <strong>Get started with a free consultation today.</strong></p>
    `,
  },
  "how-ai-transforms-enterprise-workflows": {
    title: "How AI Transforms Enterprise Workflows: A Deep Dive",
    date: "2025-12-10",
    author: "Saif Boukhira",
    category: "Insights",
    image: "https://placeholder.svg?height=600&width=1200&query=enterprise%20AI%20workflow%20transformation",
    content: `
      <p>Artificial intelligence is no longer a futuristic concept—it's actively reshaping how enterprises operate today. Let's explore the transformative impact AI is having on business workflows and operations.</p>

      <h2>Understanding the AI Transformation</h2>
      <p>AI doesn't just automate tasks; it fundamentally changes how work gets done. By intelligently analyzing patterns, predicting outcomes, and making data-driven decisions, AI enables enterprises to achieve unprecedented efficiency levels.</p>

      <h2>Real-World Workflow Transformations</h2>

      <h3>1. Customer Service Excellence</h3>
      <p>AI-powered systems now handle complex customer inquiries with human-like understanding, leading to faster resolution times and higher satisfaction rates.</p>

      <h3>2. Predictive Maintenance</h3>
      <p>Rather than reactive maintenance, AI predicts equipment failures before they happen, preventing costly downtime and optimizing maintenance schedules.</p>

      <h3>3. Intelligent Resource Allocation</h3>
      <p>AI analyzes historical data and current conditions to optimally allocate resources, eliminating waste and maximizing productivity.</p>

      <h3>4. Advanced Data Processing</h3>
      <p>What once took teams weeks to analyze, AI processes in hours, extracting insights that drive strategic decision-making.</p>

      <h2>The Business Impact</h2>
      <p>Organizations implementing AI-driven workflows consistently report:</p>
      <ul>
        <li>30-50% improvement in process efficiency</li>
        <li>40% reduction in operational costs</li>
        <li>Higher employee satisfaction through elimination of repetitive tasks</li>
        <li>Better decision-making through data-driven insights</li>
      </ul>

      <h2>Getting Started</h2>
      <p>The journey to AI-transformed workflows doesn't require a complete system overhaul. Start with high-impact, high-volume processes and expand from there. The key is choosing the right partner who understands both technology and business operations.</p>
    `,
  },
  "enterprise-automation-trends-2025": {
    title: "Enterprise Automation Trends Shaping 2025",
    date: "2025-12-05",
    author: "Saif Boukhira",
    category: "Trends",
    image: "https://placeholder.svg?height=600&width=1200&query=2025%20automation%20trends",
    content: `
      <p>As we look ahead to 2025, several transformative trends are defining the enterprise automation landscape. Here's what organizations should be watching.</p>

      <h2>Trend 1: Hyper-Intelligent Automation</h2>
      <p>AI-powered automation is evolving beyond rule-based systems into truly intelligent platforms that learn, adapt, and optimize continuously. This represents a fundamental shift in automation capabilities.</p>

      <h2>Trend 2: Democratization of Automation</h2>
      <p>Low-code and no-code platforms are putting automation capabilities into the hands of business users, not just technical specialists. This democratization is accelerating digital transformation across organizations.</p>

      <h2>Trend 3: Human-AI Collaboration</h2>
      <p>Rather than replacing humans, forward-thinking organizations are creating collaborative workflows where AI handles routine cognitive tasks while humans focus on strategy and creativity.</p>

      <h2>Trend 4: Unified Automation Platforms</h2>
      <p>Integration challenges are driving the adoption of unified platforms that connect various automation tools and systems, creating cohesive automation ecosystems.</p>

      <h2>Trend 5: Privacy-First Automation</h2>
      <p>With regulations tightening globally, automation platforms are being designed with privacy and compliance at their core, not as afterthoughts.</p>

      <h2>Preparing for 2025</h2>
      <p>Organizations that embrace these trends will find themselves better positioned for growth, efficiency, and innovation. The time to start evaluating your automation strategy is now.</p>
    `,
  },
  "success-story-startup-scales-with-automation": {
    title: "Success Story: How a Startup Scaled 10x with Smart Automation",
    date: "2025-11-28",
    author: "Saif Boukhira",
    category: "Case Study",
    image: "https://placeholder.svg?height=600&width=1200&query=startup%20success%20scaling%20automation",
    content: `
      <p>Meet TechFlow, a SaaS startup that faced a challenge many growth-stage companies encounter: rapid growth without proportional resource expansion. Here's how they solved it with intelligent automation.</p>

      <h2>The Challenge</h2>
      <p>With month-over-month growth of 40%, TechFlow was struggling to keep pace. Their manual processes were becoming bottlenecks:</p>
      <ul>
        <li>Customer onboarding took 3-4 weeks</li>
        <li>Data entry errors were causing support tickets</li>
        <li>Invoice processing involved multiple manual touchpoints</li>
        <li>Team morale was declining due to repetitive work</li>
      </ul>

      <h2>The Solution</h2>
      <p>TechFlow implemented our AI Automation Platform targeting three critical workflows:</p>

      <h3>1. Customer Onboarding Automation</h3>
      <p>Reduced from 3-4 weeks to 2 days through automated verification, setup, and welcome processes.</p>

      <h3>2. Invoice Processing</h3>
      <p>Eliminated manual data entry with intelligent document processing, achieving 99.2% accuracy.</p>

      <h3>3. Support Ticket Routing</h3>
      <p>AI-powered triage reduced response time by 70% by intelligently routing tickets based on complexity and expertise required.</p>

      <h2>The Results</h2>
      <ul>
        <li>10x faster customer onboarding</li>
        <li>60% reduction in operational costs</li>
        <li>98% automation of routine tasks</li>
        <li>Team redirected to strategic initiatives</li>
        <li>Customer satisfaction increased 45%</li>
      </ul>

      <h2>Key Takeaway</h2>
      <p>Automation isn't just about cost reduction—it's about enabling sustainable growth. By automating routine workflows, TechFlow freed their team to focus on innovation and customer success, creating a virtuous cycle of growth and improvement.</p>

      <p>If your organization is facing similar challenges, the time to act is now. Schedule a consultation to explore how smart automation can unlock your growth potential.</p>
    `,
  },
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = newsArticles[params.slug]

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/news">
            <Button variant="outline">Back to News</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/hero" className="flex items-center gap-2">
              <Image
                src="/images/logo-20digitailor.png"
                alt="Digitailor"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                DIGITAILOR
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/hero"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/news"
                className="text-sm font-medium text-foreground hover:text-foreground transition-colors border-b-2 border-purple-600"
              >
                News
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Article Hero Image */}
      <section className="relative pt-32 pb-12 h-96 overflow-hidden">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <Link href="/news" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 items-center mb-8 pb-8 border-b border-border/40">
              <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                {article.author}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">{article.title}</h1>

            {/* Content */}
            <div
              className="prose dark:prose-invert max-w-none prose-headings:text-foreground prose-headings:font-bold prose-a:text-purple-600 hover:prose-a:text-purple-700 prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles - simplified */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">More Articles</h2>
          <div className="flex justify-center">
            <Link href="/news">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
              >
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
