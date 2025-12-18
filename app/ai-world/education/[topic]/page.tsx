"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage, AI_WORLD_DATA } from "@/contexts/LanguageContext"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AITopicPage() {
  const { lang } = useLanguage()
  const params = useParams()
  const topic = params.topic as string
  const aiData = AI_WORLD_DATA[lang]

  const section = aiData.sections.find((s) => s.id === topic)

  if (!section) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{lang === "en" ? "Topic not found" : "Sujet non trouvé"}</h1>
          <Link href="/ai-world/education" className="text-primary hover:underline">
            {lang === "en" ? "Back to AI Education" : "Retour à la Formation IA"}
          </Link>
        </div>
      </div>
    )
  }

  const topicContent = {
    "what-is-ai": {
      en: {
        intro:
          "AI automation is the use of intelligent systems to handle tasks that would normally require human intervention. It's about working smarter, not harder.",
        sections: [
          {
            title: "The Basics",
            content:
              "AI automation combines machine learning, data analysis, and decision-making logic to execute tasks automatically. From simple rule-based automation to complex AI agents, these systems learn from patterns and improve over time.",
          },
          {
            title: "Why It Matters for Your Business",
            content:
              "Save time on repetitive tasks, reduce human error, respond to customers instantly 24/7, and free your team to focus on strategic work. The result? Faster operations, happier customers, and better profit margins.",
          },
          {
            title: "Real-World Examples",
            content:
              "WhatsApp bots answering customer questions instantly. CRM systems automatically nurturing leads while you sleep. Email campaigns triggered by customer behavior. Analytics dashboards updating in real-time. This is the power of AI automation.",
          },
        ],
      },
      fr: {
        intro:
          "L'automatisation IA est l'utilisation de systèmes intelligents pour gérer les tâches qui nécessiteraient normalement une intervention humaine. C'est travailler plus intelligemment, pas plus dur.",
        sections: [
          {
            title: "Les Bases",
            content:
              "L'automatisation IA combine l'apprentissage automatique, l'analyse des données et la logique de prise de décision pour exécuter des tâches automatiquement. Des systèmes d'automatisation simples aux agents IA complexes, ces systèmes apprennent des modèles et s'améliorent au fil du temps.",
          },
          {
            title: "Pourquoi C'est Important pour Votre Entreprise",
            content:
              "Gagnez du temps sur les tâches répétitives, réduisez les erreurs humaines, répondez aux clients instantanément 24/7, et libérez votre équipe pour se concentrer sur le travail stratégique. Le résultat ? Des opérations plus rapides, des clients plus heureux et de meilleures marges bénéficiaires.",
          },
          {
            title: "Exemples du Monde Réel",
            content:
              "Les bots WhatsApp répondent aux questions des clients instantanément. Les systèmes CRM nourrissent automatiquement les leads pendant que vous dormez. Les campagnes d'email déclenchées par le comportement des clients. Les tableaux de bord analytiques se mettant à jour en temps réel. Telle est la puissance de l'automatisation IA.",
          },
        ],
      },
    },
    "how-ai-agents": {
      en: {
        intro:
          "AI agents are intelligent systems that can perceive their environment, make decisions, and take actions to achieve specific goals. They're like having a team member who never sleeps.",
        sections: [
          {
            title: "How They Work",
            content:
              "AI agents receive information, analyze it using machine learning models, make decisions based on rules and patterns, and execute actions. They can learn from every interaction and adapt their behavior over time.",
          },
          {
            title: "Types of AI Agents",
            content:
              "Chatbots handle customer conversations. Lead qualification agents evaluate prospects automatically. Support agents resolve issues 24/7. Sales agents identify opportunities and guide customers through the funnel. Each is specialized for its role.",
          },
          {
            title: "The Human Touch",
            content:
              "Great AI agents don't replace humans — they amplify them. They handle routine work, flag complex issues for humans, and escalate when needed. Your team becomes more productive, not redundant.",
          },
        ],
      },
      fr: {
        intro:
          "Les agents IA sont des systèmes intelligents qui peuvent percevoir leur environnement, prendre des décisions et entreprendre des actions pour atteindre des objectifs spécifiques. C'est comme avoir un membre d'équipe qui ne dort jamais.",
        sections: [
          {
            title: "Comment Ils Fonctionnent",
            content:
              "Les agents IA reçoivent des informations, les analysent en utilisant des modèles d'apprentissage automatique, prennent des décisions basées sur des règles et des modèles, et exécutent des actions. Ils peuvent apprendre de chaque interaction et adapter leur comportement au fil du temps.",
          },
          {
            title: "Types d'Agents IA",
            content:
              "Les chatbots gèrent les conversations avec les clients. Les agents de qualification de leads évaluent automatiquement les prospects. Les agents d'assistance résolvent les problèmes 24/7. Les agents de vente identifient les opportunités et guident les clients à travers l'entonnoir. Chacun est spécialisé pour son rôle.",
          },
          {
            title: "La Touche Humaine",
            content:
              "Les grands agents IA ne remplacent pas les humains — ils les amplifient. Ils gèrent le travail de routine, signalent les problèmes complexes aux humains, et escaladent si nécessaire. Votre équipe devient plus productive, pas redondante.",
          },
        ],
      },
    },
  }

  const content = (topicContent as any)[topic]?.[lang] || {
    intro: section.description,
    sections: [
      {
        title: lang === "en" ? "Learn More" : "En Savoir Plus",
        content: section.description,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Link
            href="/ai-world/education"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "en" ? "Back to AI Education" : "Retour à la Formation IA"}
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">{section.icon}</div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent">
                {section.title}
              </h1>
            </div>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">{content.intro}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300"
            >
              {lang === "en" ? "Explore More" : "Explorer Plus"}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {content.sections.map((sec: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border/40 bg-card/50 hover:bg-card/80 transition-all duration-300"
              >
                <h2 className="text-3xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent">
                  {sec.title}
                </h2>
                <p className="text-lg leading-relaxed text-foreground whitespace-pre-line">{sec.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-primary/20 p-12 md:p-16 text-center">
            <div className="absolute inset-0 -z-10 opacity-30">
              <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
              <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {lang === "en" ? "Ready to Implement?" : "Prêt à Implémenter ?"}
            </h2>
            <p className="text-lg mb-8 text-foreground">
              {lang === "en"
                ? "Let's build your AI solution and transform how your business operates."
                : "Construisons votre solution IA et transformons la façon dont votre entreprise fonctionne."}
            </p>
            <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
              {lang === "en" ? "Schedule a Demo" : "Planifier une Démo"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
