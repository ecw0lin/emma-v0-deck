"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Calendar, Target, Zap, Globe, Users, ArrowRight } from "lucide-react"

const slides = [
  {
    id: 1,
    type: "title",
    title: "Nike & Vercel",
    subtitle: "Emma Wolin | Account Executive",
    bgGradient: "from-purple-800 to-purple-900",
  },
  {
    id: 2,
    type: "challenges",
    title: "What We Heard & Current Challenges",
    challenges: [
      {
        icon: "⚠️",
        title: "End of Life Adobe Solution",
        description:
          "Adobe asking to upgrade from monolithic to headless version. End of support for AEM in 6 months. Migration would be expensive and require external Adobe experts.",
      },
      {
        icon: "📈",
        title: "Traffic Scalability Issues",
        description:
          'SNKRS has "very spiky" traffic patterns based on limited edition shoe releases. Adobe struggles to handle the traffic.',
      },
      {
        icon: "⚙️",
        title: "Developer Experience Complexity",
        description:
          'Getting Next.js up and running on AWS was "resource intensive" and "fairly challenging experience". Underestimated effort to exploit all Next.js offers.',
      },
      {
        icon: "🐌",
        title: "Business Agility Issues",
        description:
          "High lag time - 9 days to get new product on Nike's homepage. Makes it challenging to keep up with virality and trends.",
      },
      {
        icon: "🔀",
        title: "Fragmented Brand Experience",
        description:
          "Different platforms creating fragmented brand experience. Distributed global teams causing slower decision making.",
      },
    ],
  },
  {
    id: 3,
    type: "pov",
    title: "Our Point of View",
    content:
      "Nike needs a platform that can scale with spiky traffic, reduce developer overhead, and unify fragmented digital experiences.",
    solution:
      "Vercel is purpose-built for complex organizations like Nike - offering automatic edge scalability, real-time deployments, and deep Next.js optimization. We help you modernize with confidence, without sacrificing control, uptime, or performance.",
    how: "Vercel does this by combining a global edge network with a Git-native workflow, enabling your developers to ship changes instantly and securely, while abstracting away infrastructure complexity.",
    social_proof:
      "Brands like Under Armour, The Washington Post, and HashiCorp use Vercel to cut time-to-deploy from days to minutes, streamline engineering resources, and deliver lightning-fast experiences at global scale.",
    confidence:
      "We're confident we can help Nike reduce homepage release cycles by 50% and accelerate the pace of business across your digital ecosystem.",
  },
  {
    id: 4,
    type: "benefits",
    title: "Why Vercel?",
    benefits: [
      {
        icon: <Users className="w-8 h-8" />,
        title: "Developer-Friendly Platform",
        description: "Easy for teams to collaborate, streamline workflows and deploy features quickly",
      },
      {
        icon: <Globe className="w-8 h-8" />,
        title: "Seamless Front-End Experience",
        description:
          "Vercel's advanced edge network delivers high performing websites and apps regardless of location for global reach",
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Flexible Future Proof Solution",
        description:
          "Vercel allows Nike to stay ahead of the curve by providing platform with headless CMS and serverless functions",
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Modern Scalable Technology",
        description:
          "Vercel offers next-gen, headless platform aligns with Nike's goal to streamline digital ecosystem",
      },
    ],
  },
  {
    id: 5,
    type: "nextsteps",
    title: "Next Steps",
    steps: [
      { date: "Tuesday, 8/19", task: "Technical deep dive" },
      { date: "Wednesday, 8/20", task: "Exec alignment" },
      { date: "Friday 8/22", task: "Collaborate with Cognizant: Align on project roadmap and integration strategies" },
      { date: "Tuesday 8/26", task: "Technical Workshop: Showcase Vercel's capabilities with a structured POC" },
      { date: "Thursday 8/28", task: "Define Success Criteria: Ensure alignment on KPIs for long-term success" },
      { date: "Friday, 8/29", task: "Kick off Proof of Concept" },
    ],
  },
]

export default function NikeVercelDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = slides[currentSlide]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">V</span>
            </div>
            <span className="text-sm text-gray-400">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl">
            {slide.type === "title" && (
              <div className={`text-center py-20 rounded-2xl bg-gradient-to-r ${slide.bgGradient}`}>
                <h1 className="text-6xl font-bold mb-8">{slide.title}</h1>
                <p className="text-2xl opacity-90">{slide.subtitle}</p>
              </div>
            )}

            {slide.type === "challenges" && (
              <div>
                <h2 className="text-4xl font-bold mb-6 text-center">{slide.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {slide.challenges.map((challenge, index) => (
                    <Card key={index} className="p-4 bg-gray-800 border-gray-700">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">{challenge.icon}</span>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-purple-400">{challenge.title}</h3>
                          <p className="text-gray-300 leading-snug text-sm">{challenge.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {slide.type === "pov" && (
              <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">{slide.title}</h2>
                <div className="space-y-3">
                  <Card className="p-6 bg-red-900/20 border-red-500/30">
                    <p className="text-base leading-relaxed text-white">{slide.content}</p>
                  </Card>
                  <Card className="p-6 bg-blue-900/20 border-blue-500/30">
                    <p className="text-base leading-relaxed text-white">{slide.solution}</p>
                  </Card>
                  <Card className="p-6 bg-green-900/20 border-green-500/30">
                    <p className="text-base leading-relaxed text-white">{slide.how}</p>
                  </Card>
                  <Card className="p-6 bg-purple-900/20 border-purple-500/30">
                    <p className="text-base leading-relaxed text-white">{slide.social_proof}</p>
                  </Card>
                  <Card className="p-6 bg-orange-900/20 border-orange-500/30">
                    <p className="text-base leading-relaxed text-white">{slide.confidence}</p>
                  </Card>
                </div>
              </div>
            )}

            {slide.type === "benefits" && (
              <div>
                <h2 className="text-4xl font-bold mb-12 text-center">{slide.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {slide.benefits.map((benefit, index) => (
                    <Card
                      key={index}
                      className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500/50 transition-colors"
                    >
                      <div className="flex items-start gap-6">
                        <div className="text-purple-400 flex-shrink-0">{benefit.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-white">{benefit.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {slide.type === "nextsteps" && (
              <div>
                <h2 className="text-4xl font-bold mb-6 text-center">{slide.title}</h2>
                <div className="max-w-4xl mx-auto space-y-2">
                  {slide.steps.map((step, index) => (
                    <Card key={index} className="p-3 bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-purple-800 rounded-full text-white font-bold text-xs">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="w-3 h-3 text-purple-400" />
                            <span className="text-purple-400 font-semibold text-xs">{step.date}</span>
                          </div>
                          <p className="text-white text-sm leading-tight">{step.task}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            size="lg"
            className="flex items-center gap-2 bg-transparent"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>

          <div className="text-center">
            <p className="text-gray-400">Use arrow keys or click buttons to navigate</p>
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            size="lg"
            className="flex items-center gap-2 bg-purple-800 hover:bg-purple-900"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
