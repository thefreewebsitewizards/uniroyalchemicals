"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Microscope, Beaker, TrendingUp, Users, Target, Zap } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Sustainable PVC Additives",
      description:
        "Developing eco-friendly alternatives to traditional PVC additives with reduced environmental impact",
      icon: Lightbulb,
      focus: ["Bio-based Plasticisers", "Green Stabilisers", "Recyclable Compounds"],
      color: "green"
    },
    {
      title: "Performance Enhancement",
      description: "Advanced formulations for improved mechanical properties and durability",
      icon: TrendingUp,
      focus: ["Impact Modifiers", "Thermal Stabilisers", "Weather Resistance"],
      color: "blue"
    },
    {
      title: "Specialty Applications",
      description: "Custom solutions for niche markets and specialized industrial applications",
      icon: Target,
      focus: ["Medical Grade", "Food Contact", "High-Temperature Applications"],
      color: "purple"
    },
    {
      title: "Process Innovation",
      description: "Optimizing manufacturing processes for better efficiency and quality",
      icon: Zap,
      focus: ["Process Optimization", "Quality Enhancement", "Cost Reduction"],
      color: "orange"
    },
  ]

  const capabilities = [
    {
      name: "Material Science Laboratory",
      description: "Advanced laboratory for polymer research and additive development",
      equipment: ["Rheometer", "DSC", "TGA", "FTIR Spectroscopy"],
      color: "blue"
    },
    {
      name: "Formulation Development",
      description: "Custom formulation capabilities for specific customer requirements",
      equipment: ["High-Speed Mixers", "Twin-Screw Extruders", "Injection Molding"],
      color: "green"
    },
    {
      name: "Performance Testing",
      description: "Comprehensive testing facilities for product validation",
      equipment: ["Tensile Testing", "Impact Testing", "Thermal Analysis", "Weathering Chamber"],
      color: "purple"
    },
    {
      name: "Pilot Plant Facility",
      description: "Scale-up capabilities from laboratory to commercial production",
      equipment: ["Pilot Reactors", "Distillation Units", "Filtration Systems", "Packaging Lines"],
      color: "orange"
    },
  ]

  const innovationPhases = [
    { step: "1", title: "Concept", description: "Identifying market needs and opportunities", color: "blue" },
    { step: "2", title: "Research", description: "Laboratory research and formulation development", color: "green" },
    { step: "3", title: "Testing", description: "Comprehensive performance and quality testing", color: "purple" },
    { step: "4", title: "Scale-up", description: "Pilot plant trials and process optimization", color: "orange" },
    { step: "5", title: "Launch", description: "Commercial production and market introduction", color: "blue" },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        icon: "text-blue-600",
        badge: "bg-blue-100 text-blue-800",
        button: "bg-blue-600 hover:bg-blue-700",
        shadow: "hover:shadow-blue-200",
        accent: "bg-blue-600",
        hover: "hover:border-blue-400"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-600",
        icon: "text-green-600",
        badge: "bg-green-100 text-green-800",
        button: "bg-green-600 hover:bg-green-700",
        shadow: "hover:shadow-green-200",
        accent: "bg-green-600",
        hover: "hover:border-green-400"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        icon: "text-purple-600",
        badge: "bg-purple-100 text-purple-800",
        button: "bg-purple-600 hover:bg-purple-700",
        shadow: "hover:shadow-purple-200",
        accent: "bg-purple-600",
        hover: "hover:border-purple-400"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-600",
        icon: "text-orange-600",
        badge: "bg-orange-100 text-orange-800",
        button: "bg-orange-600 hover:bg-orange-700",
        shadow: "hover:shadow-orange-200",
        accent: "bg-orange-600",
        hover: "hover:border-orange-400"
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.green
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-6">Innovation & Research</Badge>
            </FadeInSection>
            <FadeInSection delay={200}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Research & Development</h1>
            </FadeInSection>
            <FadeInSection delay={400}>
              <p className="text-xl text-green-100 leading-relaxed">
                Driving innovation in PVC additives through cutting-edge research, advanced materials science, and
                collaborative development programs.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Our Research Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest heavily in research and development to create innovative solutions that address evolving market
              needs and environmental challenges.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => {
              const colorClasses = getColorClasses(area.color)
              return (
                <FadeInSection key={index} delay={index * 200}>
                  <Card className={`${colorClasses.border} ${colorClasses.hover} hover:shadow-lg ${colorClasses.shadow}/50 transition-all duration-300 transform hover:scale-105 bg-white`}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center`}>
                          <area.icon className={`h-6 w-6 ${colorClasses.icon}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className={`text-xl mb-2 ${colorClasses.text}`}>{area.title}</CardTitle>
                          <CardDescription className="text-base leading-relaxed text-gray-600">
                            {area.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className={`font-semibold ${colorClasses.text}`}>Key Focus Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.focus.map((item) => (
                            <Badge key={item} variant="secondary" className={`text-xs ${colorClasses.badge}`}>
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* R&D Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">R&D Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art research facilities and experienced team enable us to develop innovative solutions
              from concept to commercial production.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const colorClasses = getColorClasses(capability.color)
              return (
                <FadeInSection key={index} delay={index * 200}>
                  <Card className={`${colorClasses.border} ${colorClasses.hover} hover:shadow-lg ${colorClasses.shadow}/50 transition-all duration-300 transform hover:scale-105 bg-white`}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center`}>
                          <Beaker className={`h-6 w-6 ${colorClasses.icon}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className={`text-lg mb-2 ${colorClasses.text}`}>{capability.name}</CardTitle>
                          <CardDescription className="text-base text-gray-600">{capability.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className={`font-semibold ${colorClasses.text}`}>Key Equipment:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {capability.equipment.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <div className={`w-2 h-2 ${colorClasses.accent} rounded-full`}></div>
                              <span className="text-sm text-gray-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Our Innovation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to commercialization, our systematic approach ensures successful product development.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-5 gap-8">
            {innovationPhases.map((phase, index) => {
              const colorClasses = getColorClasses(phase.color)
              return (
                <FadeInSection key={index} delay={index * 200}>
                  <Card className={`text-center ${colorClasses.border} ${colorClasses.hover} hover:shadow-lg ${colorClasses.shadow}/50 transition-all duration-300 transform hover:scale-105 relative bg-white`}>
                    <CardHeader>
                      <div className={`w-16 h-16 ${colorClasses.accent} rounded-full flex items-center justify-center mx-auto mb-4 relative`}>
                        <span className="text-white font-bold text-lg">{phase.step}</span>
                      </div>
                      <CardTitle className={`text-lg ${colorClasses.text}`}>{phase.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">{phase.description}</CardDescription>
                    </CardHeader>
                    {phase.step !== "5" && (
                      <div className={`absolute top-8 -right-4 w-8 h-0.5 ${colorClasses.accent} hidden md:block`}></div>
                    )}
                  </Card>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Collaboration & Partnerships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-700">Collaboration & Partnerships</h2>
                  <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We believe in collaborative innovation and actively partner with academic institutions, research
                    organizations, and industry leaders to accelerate technological advancement.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 mb-2">Academic Partnerships</h3>
                      <p className="text-gray-600">
                        Collaborating with leading universities and research institutes for fundamental research and
                        talent development.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Microscope className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 mb-2">Industry Collaboration</h3>
                      <p className="text-gray-600">
                        Working closely with customers and industry partners to develop application-specific solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 mb-2">Technology Transfer</h3>
                      <p className="text-gray-600">
                        Facilitating knowledge transfer and commercialization of research outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=R%26D+Laboratory"
                  alt="Research and Development Laboratory"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">R&D</div>
                    <div className="text-sm">Excellence</div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Partner with Our Innovation Team</h2>
            <p className="text-xl text-green-100">
              Collaborate with our R&D experts to develop custom solutions for your specific applications and
              challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const phoneNumber = "916304894331";
                  const message = "Hello! I would like to discuss my project with your R&D team. Please assist me.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Discuss Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Download R&D Brochure
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
