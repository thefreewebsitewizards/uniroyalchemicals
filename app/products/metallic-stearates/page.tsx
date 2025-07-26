"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, CheckCircle, Zap, Shield, Award, Beaker } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function MetallicStearatesPage() {
  const products = [
    {
      name: "Lead Stearate",
      description:
        "High-performance lead stearate offering excellent thermal stability and lubrication properties for PVC applications. Provides superior processing characteristics and cost-effective stabilization solutions for industrial-grade PVC compounds and formulations.",
      features: [
        "Excellent heat stability up to 200°C",
        "Superior lubrication properties",
        "Cost-effective stabilization solution",
        "Wide processing temperature range",
      ],
      applications: ["PVC Pipes & Fittings", "Cable Compounds", "Rigid Profiles", "Industrial Processing"],
      specifications: {
        "Lead Content": "≥ 32%",
        "Melting Point": "115-125°C",
        "Bulk Density": "0.8-1.2 g/cm³",
        "Particle Size": "< 20 μm",
      },
      color: "blue"
    },
    {
      name: "Calcium Stearate",
      description:
        "Versatile calcium stearate providing excellent processing aid characteristics and non-toxic formulation benefits. Ideal for food-grade applications, pharmaceutical formulations, and eco-friendly PVC processing requirements with superior flow enhancement properties.",
      features: [
        "Non-toxic, food-grade formulation",
        "Excellent processing aid properties",
        "Good thermal stability",
        "Environmental compliance",
      ],
      applications: [
        "Food Packaging",
        "Pharmaceutical Applications",
        "Cosmetic Formulations",
        "Eco-friendly Processing",
      ],
      specifications: {
        "Calcium Content": "6.8-7.2%",
        "Melting Point": "147-149°C",
        "Bulk Density": "0.3-0.6 g/cm³",
        "Acid Value": "< 3 mg KOH/g",
      },
      color: "orange"
    },
    {
      name: "Zinc Stearate",
      description:
        "Premium zinc stearate delivering superior release properties and flow enhancement for rubber and plastic applications. Offers excellent anti-caking characteristics, UV stability, and multi-purpose functionality for diverse industrial processing needs.",
      features: [
        "Superior release properties",
        "Excellent flow enhancement",
        "Anti-caking agent functionality",
        "UV stability and durability",
      ],
      applications: ["Rubber Processing", "Powder Coatings", "Plastic Films", "Textile Applications"],
      specifications: {
        "Zinc Content": "10.0-11.0%",
        "Melting Point": "120-130°C",
        "Bulk Density": "0.4-0.7 g/cm³",
        "Loss on Drying": "< 2.0%",
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
                <Beaker className="h-4 w-4 mr-2" />
                High-Performance Metallic Compounds
              </Badge>
            </FadeInSection>

            <FadeInSection delay={200}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Metallic Stearates</h1>
            </FadeInSection>

            <FadeInSection delay={400}>
              <p className="text-xl text-green-100 leading-relaxed">
                Premium quality metallic stearates including Lead Stearate, Calcium Stearate, and Zinc Stearate,
                manufactured with advanced technology for superior performance in various industrial applications.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-green-700">Product Overview</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our metallic stearates are manufactured using advanced processing technology at our state-of-the-art
                  facility. These high-performance additives serve as stabilizers, lubricants, and processing aids
                  across diverse industrial applications, ensuring consistent quality and superior performance.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-700">Key Benefits</h3>
                <div className="space-y-3">
                  {[
                    "Superior thermal stability and processing performance",
                    "Excellent lubrication and release properties",
                    "Consistent quality and particle size distribution",
                    "Wide range of industrial applications",
                    "Cost-effective solutions for various industries",
                    "Compliance with international quality standards",
                  ].map((benefit, index) => {
                    const colors = ['text-blue-600', 'text-orange-600', 'text-purple-600', 'text-teal-600']
                    return (
                      <FadeInSection key={index} delay={index * 100}>
                        <div className="flex items-start gap-3">
                          <CheckCircle className={`h-5 w-5 ${colors[index % colors.length]} mt-0.5`} />
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      </FadeInSection>
                    )
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-600">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-700">Quality Excellence</h3>
                </div>
                <p className="text-green-700">
                  Manufactured using advanced technology ensuring consistent quality and performance across all product
                  grades.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Metallic+Stearates+Production"
                alt="Metallic Stearates Production"
                width={600}
                height={500}
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">Premium</div>
                  <div className="text-sm">Quality</div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Product Lineup with Animation */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Our Metallic Stearate Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of metallic stearates designed for various industrial applications, from PVC
              processing to rubber manufacturing.
            </p>
          </FadeInSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const colorClasses = getColorClasses(product.color)
              return (
                <FadeInSection key={index} delay={index * 200}>
                  <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full ${colorClasses.shadow} ${colorClasses.bg} ${colorClasses.border} border-2`}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Beaker className={`h-5 w-5 ${colorClasses.icon}`} />
                        {index === 0 && <Badge className={colorClasses.badge}>Industrial Grade</Badge>}
                        {index === 1 && <Badge className={colorClasses.badge}>Food Grade Available</Badge>}
                        {index === 2 && <Badge className={colorClasses.badge}>Multi-Purpose</Badge>}
                      </div>
                      <CardTitle className={`text-xl ${colorClasses.text}`}>{product.name}</CardTitle>
                      <CardDescription className="text-gray-600">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <div className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className={`w-2 h-2 ${colorClasses.text.replace('text-', 'bg-')} rounded-full`}></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, appIndex) => (
                            <Badge key={appIndex} variant="secondary" className={`text-xs ${colorClasses.badge}`}>
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
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Technical Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed technical specifications and application guidelines for our metallic stearate products.
            </p>
          </FadeInSection>

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
                            <th className="text-left p-4 text-blue-800">Lead Stearate</th>
                            <th className="text-left p-4 text-blue-800">Calcium Stearate</th>
                            <th className="text-left p-4 text-blue-800">Zinc Stearate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-blue-100">
                            <td className="p-4 text-gray-700">Metal Content</td>
                            <td className="p-4 text-gray-600">≥ 32%</td>
                            <td className="p-4 text-gray-600">6.8-7.2%</td>
                            <td className="p-4 text-gray-600">10.0-11.0%</td>
                          </tr>
                          <tr className="border-b border-blue-100">
                            <td className="p-4 text-gray-700">Melting Point</td>
                            <td className="p-4 text-gray-600">115-125°C</td>
                            <td className="p-4 text-gray-600">147-149°C</td>
                            <td className="p-4 text-gray-600">120-130°C</td>
                          </tr>
                          <tr className="border-b border-blue-100">
                            <td className="p-4 text-gray-700">Bulk Density</td>
                            <td className="p-4 text-gray-600">0.8-1.2 g/cm³</td>
                            <td className="p-4 text-gray-600">0.3-0.6 g/cm³</td>
                            <td className="p-4 text-gray-600">0.4-0.7 g/cm³</td>
                          </tr>
                          <tr className="border-b border-blue-100">
                            <td className="p-4 text-gray-700">Particle Size</td>
                            <td className="p-4 text-gray-600">&lt; 20 μm</td>
                            <td className="p-4 text-gray-600">-</td>
                            <td className="p-4 text-gray-600">-</td>
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
                        <Shield className="h-5 w-5 text-orange-600" />
                        PVC Applications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span className="text-gray-600">PVC pipe and fitting stabilization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span className="text-gray-600">Cable compound processing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span className="text-gray-600">Rigid profile manufacturing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span className="text-gray-600">Flexible film production</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 bg-purple-50 hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-purple-800">
                        <Zap className="h-5 w-5 text-purple-600" />
                        Industrial Applications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                          <span className="text-gray-600">Rubber processing and vulcanization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                          <span className="text-gray-600">Powder coating formulations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                          <span className="text-gray-600">Cosmetic and pharmaceutical</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                          <span className="text-gray-600">Textile and paper industries</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="processing" className="space-y-6">
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-purple-800">Processing Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-purple-700">Dosage Recommendations:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Lead Stearate: 0.5-2.0 phr</li>
                        <li>• Calcium Stearate: 0.3-1.5 phr</li>
                        <li>• Zinc Stearate: 0.2-1.0 phr</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-purple-700">Processing Conditions:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Processing Temperature: 160-200°C</li>
                        <li>• Mixing Time: 2-5 minutes</li>
                        <li>• Avoid overheating to prevent degradation</li>
                        <li>• Ensure uniform dispersion</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="selection" className="space-y-6">
                <Card className="border-teal-200 bg-teal-50">
                  <CardHeader>
                    <CardTitle className="text-teal-800">Selection Guide</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-teal-700">Choose Lead Stearate for:</h4>
                      <ul className="space-y-2 ml-4 text-gray-600">
                        <li>• High-temperature processing applications</li>
                        <li>• Cost-effective stabilization solutions</li>
                        <li>• Industrial-grade PVC compounds</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-teal-700">Choose Calcium Stearate for:</h4>
                      <ul className="space-y-2 ml-4 text-gray-600">
                        <li>• Food-grade and pharmaceutical applications</li>
                        <li>• Non-toxic formulation requirements</li>
                        <li>• Environmental compliance needs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-teal-700">Choose Zinc Stearate for:</h4>
                      <ul className="space-y-2 ml-4 text-gray-600">
                        <li>• Rubber and plastic processing</li>
                        <li>• Anti-caking and release applications</li>
                        <li>• UV-stable formulations</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our technical team for product recommendations, samples, or technical support for your specific
              application requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
                Request Technical Data
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent transform hover:scale-105 transition-all duration-200">
                Contact Sales Team
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