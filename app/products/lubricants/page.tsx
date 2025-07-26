"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, CheckCircle, Cog, Zap, Settings, Wrench } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function LubricantsPage() {
  const products = [
    {
      name: "External Lubricant EL-100",
      description: "General purpose external lubricant for PVC processing",
      features: [
        "Excellent metal release",
        "Improved surface finish",
        "Reduced processing torque",
        "Good thermal stability",
      ],
      applications: ["Extrusion", "Injection Molding", "Calendering", "Blow Molding"],
      specifications: {
        Type: "Calcium Stearate Based",
        "Melting Point": "140-150°C",
        "Bulk Density": "0.3-0.5 g/cm³",
        "Particle Size": "< 10 μm",
      },
      color: "blue"
    },
    {
      name: "Internal Lubricant IL-200",
      description: "High-performance internal lubricant for improved flow properties",
      features: ["Enhanced melt flow", "Reduced fusion time", "Improved processability", "Excellent compatibility"],
      applications: ["Rigid PVC Compounds", "Profile Extrusion", "Pipe Manufacturing", "Sheet Production"],
      specifications: {
        Type: "Fatty Acid Ester",
        "Melting Point": "60-70°C",
        "Saponification Value": "180-200 mg KOH/g",
        "Acid Value": "< 3 mg KOH/g",
      },
      color: "orange"
    },
    {
      name: "Processing Aid PA-300",
      description: "Specialized processing aid for enhanced PVC processing",
      features: ["Improved fusion characteristics", "Better surface quality", "Reduced plate-out", "Enhanced clarity"],
      applications: ["Clear PVC Applications", "Medical Tubing", "Food Grade Products", "High-Quality Profiles"],
      specifications: {
        Type: "Acrylic Polymer",
        "Glass Transition Temp": "105-115°C",
        "Bulk Density": "0.4-0.6 g/cm³",
        "Particle Size": "< 5 μm",
      },
      color: "purple"
    },
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
        shadow: "hover:shadow-blue-200"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-600",
        icon: "text-orange-600",
        badge: "bg-orange-100 text-orange-800",
        button: "bg-orange-600 hover:bg-orange-700",
        shadow: "hover:shadow-orange-200"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        icon: "text-purple-600",
        badge: "bg-purple-100 text-purple-800",
        button: "bg-purple-600 hover:bg-purple-700",
        shadow: "hover:shadow-purple-200"
      },
      teal: {
        bg: "bg-teal-50",
        border: "border-teal-200",
        text: "text-teal-600",
        icon: "text-teal-600",
        badge: "bg-teal-100 text-teal-800",
        button: "bg-teal-600 hover:bg-teal-700",
        shadow: "hover:shadow-teal-200"
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Animation */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10" />
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 backdrop-blur-sm">
                <Cog className="h-4 w-4 mr-2" />
                Processing Enhancement Solutions
              </Badge>
            </FadeInSection>

            <FadeInSection delay={200}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Lubricants & Processing Aids</h1>
            </FadeInSection>

            <FadeInSection delay={400}>
              <p className="text-xl text-green-100 leading-relaxed">
                Advanced lubricants and processing aids manufactured in Secunderabad, designed to optimize PVC
                processing performance, improve surface finish, and enhance production efficiency.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>
      {/* Product Overview */}
      <FadeInSection>
        <section className="py-20 bg-gradient-to-r from-green-50 via-blue-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-700">Product Overview</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our lubricants and processing aids are manufactured at our Secunderabad facility using advanced
                    formulation technology. These specialty additives optimize PVC processing by reducing friction,
                    improving flow properties, and enhancing surface quality.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">Key Benefits</h3>
                  <div className="space-y-3">
                    {[
                      "Improved processing efficiency and reduced cycle times",
                      "Enhanced surface finish and appearance",
                      "Reduced equipment wear and maintenance costs",
                      "Better melt flow and fusion characteristics",
                      "Minimized plate-out and die build-up",
                      "Optimized processing temperature ranges",
                    ].map((benefit, index) => {
                      const colors = ['text-blue-600', 'text-orange-600', 'text-purple-600', 'text-teal-600']
                      return (
                        <div key={benefit} className="flex items-start gap-3">
                          <CheckCircle className={`h-5 w-5 ${colors[index % colors.length]} mt-0.5`} />
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-600">
                  <div className="flex items-center gap-3 mb-2">
                    <Settings className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">Processing Optimization</h3>
                  </div>
                  <p className="text-green-700">
                    Our lubricants are specifically formulated to optimize PVC processing conditions and improve overall
                    production efficiency.
                  </p>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Lubricant+Production"
                  alt="Lubricant Production"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Optimal</div>
                    <div className="text-sm">Processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Product Lineup */}
      <FadeInSection>
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Our Lubricant Range</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive range of external lubricants, internal lubricants, and processing aids for various PVC
                processing applications.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {products.map((product, index) => {
                const colorClasses = getColorClasses(product.color)
                return (
                  <Card key={product.name} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${colorClasses.shadow} ${colorClasses.bg} ${colorClasses.border} border-2`}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Cog className={`h-5 w-5 ${colorClasses.icon}`} />
                        {index === 0 && <Badge className={colorClasses.badge}>External Lubricant</Badge>}
                        {index === 1 && <Badge className={colorClasses.badge}>Internal Lubricant</Badge>}
                        {index === 2 && <Badge className={colorClasses.badge}>Processing Aid</Badge>}
                      </div>
                      <CardTitle className={`text-xl ${colorClasses.text}`}>{product.name}</CardTitle>
                      <CardDescription className="text-base text-gray-600">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <div className="space-y-2">
                          {product.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <div className={`w-2 h-2 ${colorClasses.text.replace('text-', 'bg-')} rounded-full`}></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app) => (
                            <Badge key={app} variant="secondary" className={`text-xs ${colorClasses.badge}`}>
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className={`flex-1 ${colorClasses.button} transform hover:scale-105 transition-all duration-200`}>
                          Request Quote
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className={`flex-1 bg-transparent ${colorClasses.border} ${colorClasses.text} hover:${colorClasses.bg}`}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Datasheet
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Technical Information */}
      <FadeInSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Technical Information</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed technical specifications and application guidelines for our lubricant and processing aid
                products.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="specifications" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-gradient-to-r from-blue-100 to-purple-100">
                  <TabsTrigger
                    value="specifications"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="applications"
                    className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                  >
                    Applications
                  </TabsTrigger>
                  <TabsTrigger
                    value="processing"
                    className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  >
                    Processing
                  </TabsTrigger>
                  <TabsTrigger
                    value="selection"
                    className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    Selection Guide
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="specifications" className="space-y-6">
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Typical Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-blue-200">
                              <th className="text-left p-4 text-blue-800">Parameter</th>
                              <th className="text-left p-4 text-blue-800">EL-100</th>
                              <th className="text-left p-4 text-blue-800">IL-200</th>
                              <th className="text-left p-4 text-blue-800">PA-300</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-blue-100">
                              <td className="p-4 text-gray-700">Type</td>
                              <td className="p-4 text-gray-600">Calcium Stearate Based</td>
                              <td className="p-4 text-gray-600">Fatty Acid Ester</td>
                              <td className="p-4 text-gray-600">Acrylic Polymer</td>
                            </tr>
                            <tr className="border-b border-blue-100">
                              <td className="p-4 text-gray-700">Melting Point</td>
                              <td className="p-4 text-gray-600">140-150°C</td>
                              <td className="p-4 text-gray-600">60-70°C</td>
                              <td className="p-4 text-gray-600">105-115°C</td>
                            </tr>
                            <tr className="border-b border-blue-100">
                              <td className="p-4 text-gray-700">Bulk Density</td>
                              <td className="p-4 text-gray-600">0.3-0.5 g/cm³</td>
                              <td className="p-4 text-gray-600">-</td>
                              <td className="p-4 text-gray-600">0.4-0.6 g/cm³</td>
                            </tr>
                            <tr className="border-b border-blue-100">
                              <td className="p-4 text-gray-700">Particle Size</td>
                              <td className="p-4 text-gray-600">&lt; 10 μm</td>
                              <td className="p-4 text-gray-600">-</td>
                              <td className="p-4 text-gray-600">&lt; 5 μm</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="applications" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-orange-200 bg-orange-50 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-800">
                          <Zap className="h-5 w-5 text-orange-600" />
                          External Lubrication
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                            <span className="text-gray-600">Metal release and mold release</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                            <span className="text-gray-600">Surface finish improvement</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                            <span className="text-gray-600">Reduced processing torque</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                            <span className="text-gray-600">Prevention of plate-out</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200 bg-purple-50 hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-purple-800">
                          <Wrench className="h-5 w-5 text-purple-600" />
                          Internal Lubrication
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                            <span className="text-gray-600">Improved melt flow properties</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                            <span className="text-gray-600">Reduced fusion time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                            <span className="text-gray-600">Enhanced processability</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                            <span className="text-gray-600">Better homogenization</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* ... rest of the tabs content with similar color theming ... */}
              </Tabs>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Optimize Your Processing Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our technical experts for customized lubricant solutions and processing optimization recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
                Request Technical Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent transform hover:scale-105 transition-all duration-200">
                Download Product Guide
              </Button>
            </div>
          </div>
        </section>
      </FadeInSection>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}