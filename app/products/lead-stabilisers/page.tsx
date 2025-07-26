"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, CheckCircle, AlertTriangle, Shield } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function LeadStabilisersPage() {
  const products = [
    {
      name: "Lead Stabiliser LS-101",
      description: "General purpose lead stabilizer for rigid PVC applications",
      features: ["Cost-effective", "Excellent heat stability", "Good processability"],
      applications: ["Pipes", "Fittings", "Profiles"],
      specifications: {
        "Lead Content": "≥ 80%",
        "Melting Point": "120-130°C",
        "Bulk Density": "1.5-1.7 g/cm³",
      },
      color: "blue"
    },
    {
      name: "Lead Stabiliser LS-202",
      description: "High-performance lead stabilizer for demanding applications",
      features: ["Superior heat stability", "Enhanced processing", "Excellent clarity"],
      applications: ["Pressure Pipes", "Industrial Profiles", "Extruded Products"],
      specifications: {
        "Lead Content": "≥ 85%",
        "Melting Point": "125-135°C",
        "Bulk Density": "1.6-1.8 g/cm³",
      },
      color: "orange"
    },
    {
      name: "Lead Stabiliser LS-303",
      description: "Specialized lead stabilizer for high-temperature applications",
      features: ["High temperature resistance", "Long-term stability", "Excellent performance"],
      applications: ["Hot Water Pipes", "High-Temperature Profiles", "Industrial Applications"],
      specifications: {
        "Lead Content": "≥ 90%",
        "Melting Point": "130-140°C",
        "Bulk Density": "1.7-1.9 g/cm³",
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
                <AlertTriangle className="h-4 w-4 mr-2" />
                Traditional PVC Stabilizers
              </Badge>
            </FadeInSection>

            <FadeInSection delay={200}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Lead Stabilisers</h1>
            </FadeInSection>

            <FadeInSection delay={400}>
              <p className="text-xl text-green-100 leading-relaxed">
                Cost-effective lead-based stabilizers providing excellent heat stability and processability for rigid PVC
                applications in pipes, fittings, and profiles.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>
      {/* Safety Notice */}
      <section className="py-6 bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 border-b border-orange-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 max-w-4xl mx-auto">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <div className="flex-1">
              <p className="text-orange-800 font-medium">
                Important Safety Notice: Lead-based stabilizers require proper handling and are subject to regulatory
                restrictions. Please consult safety data sheets and comply with local regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <FadeInSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Product Overview</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our lead stabilizers are traditional PVC stabilizers that have been widely used in the industry for
                    decades. They offer excellent heat stability, cost-effectiveness, and proven performance in rigid PVC
                    applications.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
                  <div className="space-y-3">
                    {[
                      "Excellent heat stability and processing performance",
                      "Cost-effective solution for rigid PVC applications",
                      "Proven track record in the industry",
                      "Good compatibility with PVC formulations",
                      "Suitable for various processing methods",
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
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Lead+Stabiliser+Production"
                  alt="Lead Stabiliser Production"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">40+</div>
                    <div className="text-sm">Years Experience</div>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Lead Stabiliser Products</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive range of lead stabilizers designed to meet various performance requirements and processing
                conditions.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {products.map((product, index) => {
                const colorClasses = getColorClasses(product.color)
                return (
                  <Card key={product.name} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${colorClasses.shadow} ${colorClasses.bg} ${colorClasses.border} border-2`}>
                    <CardHeader>
                      <CardTitle className={`text-xl ${colorClasses.text}`}>{product.name}</CardTitle>
                      <CardDescription className="text-base">{product.description}</CardDescription>
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
                        <Button size="sm" variant="outline" className={`flex-1 bg-transparent ${colorClasses.border} ${colorClasses.text} hover:${colorClasses.bg}`}>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Information</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed technical specifications and application guidelines for our lead stabilizer products.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="specifications" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-blue-100 to-purple-100">
                  <TabsTrigger value="specifications" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Specifications</TabsTrigger>
                  <TabsTrigger value="applications" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">Applications</TabsTrigger>
                  <TabsTrigger value="processing" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Processing Guidelines</TabsTrigger>
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
                              <th className="text-left p-4 text-blue-800">LS-101</th>
                              <th className="text-left p-4 text-blue-800">LS-202</th>
                              <th className="text-left p-4 text-blue-800">LS-303</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-blue-100">
                              <td className="p-4">Lead Content</td>
                              <td className="p-4">≥ 80%</td>
                              <td className="p-4">≥ 85%</td>
                              <td className="p-4">≥ 90%</td>
                            </tr>
                            <tr className="border-b border-blue-100">
                              <td className="p-4">Melting Point</td>
                              <td className="p-4">120-130°C</td>
                              <td className="p-4">125-135°C</td>
                              <td className="p-4">130-140°C</td>
                            </tr>
                            <tr className="border-b border-blue-100">
                              <td className="p-4">Bulk Density</td>
                              <td className="p-4">1.5-1.7 g/cm³</td>
                              <td className="p-4">1.6-1.8 g/cm³</td>
                              <td className="p-4">1.7-1.9 g/cm³</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="applications" className="space-y-6">
                  <Card className="border-orange-200 bg-orange-50">
                    <CardHeader>
                      <CardTitle className="text-orange-800">Application Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-orange-700">Recommended Applications:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                            <span>Rigid PVC pipes and fittings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                            <span>Window and door profiles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                            <span>Industrial profiles and sheets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                            <span>Construction materials</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-orange-700">Typical Dosage:</h4>
                        <p className="text-gray-600">
                          2-5 phr (parts per hundred resin) depending on application requirements
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="processing" className="space-y-6">
                  <Card className="border-purple-200 bg-purple-50">
                    <CardHeader>
                      <CardTitle className="text-purple-800">Processing Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-purple-700">Processing Conditions:</h4>
                        <ul className="space-y-2">
                          <li>• Processing Temperature: 160-200°C</li>
                          <li>• Mixing Time: 3-5 minutes</li>
                          <li>• Melt Temperature: 180-220°C</li>
                          <li>• Residence Time: Keep to minimum</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-purple-700">Handling & Storage:</h4>
                        <ul className="space-y-2">
                          <li>• Store in cool, dry place</li>
                          <li>• Avoid exposure to moisture</li>
                          <li>• Use appropriate personal protective equipment</li>
                          <li>• Follow safety data sheet guidelines</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Safety & Regulatory */}
      <FadeInSection>
        <section className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Safety & Regulatory Information</h2>
                <p className="text-xl text-gray-600">
                  Important safety and regulatory considerations for lead stabilizer products.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-orange-200 bg-orange-50 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Shield className="h-8 w-8 text-orange-600" />
                      <CardTitle className="text-xl text-orange-800">Safety Considerations</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600">
                      Lead stabilizers require special handling procedures and safety precautions due to the presence of
                      lead compounds.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Use appropriate personal protective equipment</li>
                      <li>• Ensure adequate ventilation</li>
                      <li>• Follow proper handling procedures</li>
                      <li>• Comply with occupational exposure limits</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50 hover:shadow-lg hover:shadow-red-200 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-8 w-8 text-red-600" />
                      <CardTitle className="text-xl text-red-800">Regulatory Status</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600">
                      Lead stabilizers are subject to various regulatory restrictions and may have limitations on use.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Check local regulations before use</li>
                      <li>• Not suitable for food contact applications</li>
                      <li>• Restrictions may apply in certain regions</li>
                      <li>• Consider alternative stabilizers where required</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">Need Lead Stabilizer Solutions?</h2>
              <p className="text-xl text-green-100">
                Our technical experts can help you select the right lead stabilizer for your specific applications and
                requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
                  Contact Technical Team
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent transform hover:scale-105 transition-all duration-200"
                >
                  Request Product Samples
                </Button>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}