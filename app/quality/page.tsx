"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, FileText, Users, Zap } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function QualityPage() {
  const qualityProcesses = [
    {
      title: "Raw Material Testing",
      description: "Rigorous testing of all incoming raw materials to ensure compliance with specifications",
      icon: FileText,
      color: "blue"
    },
    {
      title: "In-Process Quality Control",
      description: "Continuous monitoring and testing during manufacturing processes",
      icon: Target,
      color: "green"
    },
    {
      title: "Final Product Testing",
      description: "Comprehensive testing of finished products before dispatch",
      icon: CheckCircle,
      color: "purple"
    },
    {
      title: "Customer Feedback Integration",
      description: "Continuous improvement based on customer feedback and market requirements",
      icon: Users,
      color: "orange"
    },
  ]

  const testingFacilities = [
    {
      icon: Zap,
      title: "Physical Testing",
      description: "Comprehensive physical property testing including tensile strength, impact resistance, and thermal stability.",
      color: "blue"
    },
    {
      icon: FileText,
      title: "Chemical Analysis",
      description: "Advanced chemical analysis using spectroscopy, chromatography, and other analytical techniques.",
      color: "purple"
    },
    {
      icon: Target,
      title: "Performance Testing",
      description: "Real-world performance testing to validate product effectiveness in actual applications.",
      color: "orange"
    },
  ]

  const qualityDocs = [
    { name: "Certificate of Analysis (COA)", color: "blue" },
    { name: "Material Safety Data Sheet (MSDS)", color: "green" },
    { name: "Quality Management Manuals", color: "purple" },
    { name: "Test Reports", color: "orange" },
    { name: "Compliance Certificates", color: "blue" },
    { name: "Process Documentation", color: "green" },
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
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-6">Quality Excellence</Badge>
            </FadeInSection>
            <FadeInSection delay={200}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Quality & Compliance</h1>
            </FadeInSection>
            <FadeInSection delay={400}>
              <p className="text-xl text-green-100 leading-relaxed">
                Our commitment to quality excellence drives every aspect of our manufacturing process, ensuring
                consistent performance and reliability in all our PVC additives.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Our Quality Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From raw material sourcing to final product delivery, our comprehensive quality management system ensures
              excellence at every step.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcesses.map((process, index) => {
              const colorClasses = getColorClasses(process.color)
              return (
                <FadeInSection key={index} delay={index * 200}>
                  <Card className={`${colorClasses.border} ${colorClasses.hover} hover:shadow-lg ${colorClasses.shadow}/50 transition-all duration-300 transform hover:scale-105 bg-white`}>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4 relative`}>
                        <process.icon className={`h-8 w-8 ${colorClasses.icon}`} />
                        <div className={`absolute -top-2 -right-2 w-6 h-6 ${colorClasses.accent} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <CardTitle className={`text-lg ${colorClasses.text}`}>{process.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-gray-600">
                        {process.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-700">Quality Metrics & Performance</h2>
                  <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our commitment to quality is reflected in our key performance indicators and continuous improvement
                    initiatives.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
                    <div className="text-sm text-gray-600">Quality Compliance Rate</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Quality Monitoring</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">Zero</div>
                    <div className="text-sm text-gray-600">Quality Compromises</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Traceability</div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Quality+Testing+Laboratory"
                  alt="Quality testing laboratory"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Quality</div>
                    <div className="text-sm">Excellence</div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testing Facilities */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">State-of-the-Art Testing Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced testing laboratories ensure comprehensive quality validation of all products.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testingFacilities.map((facility, index) => {
              const colorClasses = getColorClasses(facility.color)
              return (
                <FadeInSection key={index} delay={index * 200}>
                  <Card className={`${colorClasses.border} ${colorClasses.hover} hover:shadow-lg ${colorClasses.shadow}/50 transition-all duration-300 transform hover:scale-105 bg-white`}>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <facility.icon className={`h-8 w-8 ${colorClasses.icon}`} />
                      </div>
                      <CardTitle className={colorClasses.text}>{facility.title}</CardTitle>
                      <CardDescription className="text-gray-600">{facility.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Quality Documentation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete documentation and certificates available for all our products and processes.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityDocs.map((doc, index) => {
              const colorClasses = getColorClasses(doc.color)
              return (
                <FadeInSection key={index} delay={index * 150}>
                  <Card className={`${colorClasses.border} ${colorClasses.hover} hover:shadow-lg ${colorClasses.shadow}/50 transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white`}>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <FileText className={`h-8 w-8 ${colorClasses.icon}`} />
                      </div>
                      <CardTitle className={`text-lg ${colorClasses.text}`}>{doc.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`${colorClasses.button} text-white border-transparent bg-transparent hover:${colorClasses.button.split(' ')[1]} ${colorClasses.border} ${colorClasses.text} hover:text-white`}
                      >
                        Request Document
                      </Button>
                    </CardContent>
                  </Card>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Experience Quality Excellence</h2>
            <p className="text-xl text-green-100">
              Partner with us for PVC additives that meet the highest quality standards and regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const phoneNumber = "916304894331";
                  const message = "Hello! I would like to contact your team regarding quality documentation and compliance. Please assist me.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Contact Team
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
