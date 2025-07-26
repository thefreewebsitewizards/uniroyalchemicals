"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Search, Filter, Download, Star, Beaker } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"

export default function ProductsPage() {
  const productCategories = [
    {
      name: "Lead Stabilisers",
      description:
        "Traditional stabilizers for cost-effective PVC processing with superior thermal stability and performance.",
      products: 25,
      featured: true,
      image: "/placeholder.svg?height=200&width=300&text=Lead+Stabilisers",
      href: "/products/lead-stabilisers",
      color: "blue"
    },
    {
      name: "Calcium Zinc Stabilisers",
      description: "Eco-friendly stabilizers for food-grade and medical applications ensuring safety and compliance.",
      products: 18,
      featured: true,
      image: "/placeholder.svg?height=200&width=300&text=Calcium+Zinc+Stabilisers",
      href: "/products/calcium-zinc-stabilisers",
      color: "green"
    },
    {
      name: "Metallic Stearates",
      description:
        "High-performance metallic stearates including Lead, Calcium, and Zinc Stearates for various industrial applications.",
      products: 12,
      featured: true,
      image: "/placeholder.svg?height=200&width=300&text=Metallic+Stearates",
      href: "/products/metallic-stearates",
      color: "purple"
    },
    {
      name: "Lubricants",
      description: "Processing aids for improved flow and surface finish in PVC manufacturing processes.",
      products: 15,
      featured: false,
      image: "/placeholder.svg?height=200&width=300&text=Lubricants",
      href: "/products/lubricants",
      color: "orange"
    },
  ]

  const featuredProducts = [
    {
      name: "Lead Stabiliser LS-101",
      category: "Lead Stabiliser",
      description:
        "Cost-effective stabilizer for general PVC applications with excellent thermal stability and processing performance.",
      applications: ["Pipes", "Profiles", "Fittings"],
      datasheet: true,
      color: "blue"
    },
    {
      name: "Calcium Zinc Stabiliser CZ-202",
      category: "Calcium Zinc Stabiliser",
      description: "Eco-friendly stabilizer for food-grade PVC products ensuring safety and regulatory compliance.",
      applications: ["Food Packaging", "Medical Devices", "Toys"],
      datasheet: true,
      color: "green"
    },
    {
      name: "Lead Stearate MS-303",
      category: "Metallic Stearate",
      description: "High-performance lead stearate for PVC stabilization and lubrication in industrial applications.",
      applications: ["PVC Compounds", "Industrial Processing", "Stabilization"],
      datasheet: true,
      color: "purple"
    },
    {
      name: "Lubricant L-404",
      category: "Lubricant",
      description: "External lubricant for improved PVC processing with enhanced flow properties and surface finish.",
      applications: ["Extrusion", "Injection Molding", "Calendering"],
      datasheet: true,
      color: "orange"
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
        shadow: "hover:shadow-blue-200",
        accent: "bg-blue-600"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-600",
        icon: "text-green-600",
        badge: "bg-green-100 text-green-800",
        button: "bg-green-600 hover:bg-green-700",
        shadow: "hover:shadow-green-200",
        accent: "bg-green-600"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        icon: "text-purple-600",
        badge: "bg-purple-100 text-purple-800",
        button: "bg-purple-600 hover:bg-purple-700",
        shadow: "hover:shadow-purple-200",
        accent: "bg-purple-600"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-600",
        icon: "text-orange-600",
        badge: "bg-orange-100 text-orange-800",
        button: "bg-orange-600 hover:bg-orange-700",
        shadow: "hover:shadow-orange-200",
        accent: "bg-orange-600"
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.green
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
                Specialty Chemical Solutions
              </Badge>
            </FadeInSection>

            <FadeInSection delay={200}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Product Portfolio</h1>
            </FadeInSection>

            <FadeInSection delay={400}>
              <p className="text-xl text-green-100 leading-relaxed mb-8">
                Discover our comprehensive range of PVC additives, designed to meet the most demanding industrial
                requirements with unmatched quality and performance.
              </p>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search products"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-white backdrop-blur-sm"
                  />
                </div>
                <Button className="bg-white text-green-700 hover:bg-green-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of chemical solutions organized by application and industry needs.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color)
              return (
                <FadeInSection key={index} delay={index * 150}>
                  <Card className={`group hover:shadow-xl ${colorClasses.shadow}/50 transition-all duration-300 cursor-pointer ${colorClasses.border} hover:${colorClasses.border.replace('200', '400')} transform hover:scale-105 h-full bg-white`}>
                    <div className="relative overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {category.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className={`${colorClasses.accent} text-white`}>
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className={`bg-white/90 ${colorClasses.text}`}>
                          {category.products} Products
                        </Badge>
                      </div>
                      <div className={`absolute inset-0 ${colorClasses.accent}/0 group-hover:${colorClasses.accent}/10 transition-colors duration-300`}></div>
                    </div>
                    <CardHeader>
                      <CardTitle className={`group-hover:${colorClasses.text} transition-colors ${colorClasses.text}`}>
                        {category.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600">{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="outline"
                        className={`w-full group-hover:${colorClasses.accent} group-hover:text-white group-hover:${colorClasses.border.replace('200', '600')} transition-colors ${colorClasses.border.replace('200', '600')} ${colorClasses.text} bg-transparent`}
                        asChild
                      >
                        <Link href={category.href}>
                          View Products
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting our most popular and innovative chemical solutions trusted by industry leaders worldwide.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => {
              const colorClasses = getColorClasses(product.color)
              return (
                <FadeInSection key={index} delay={index * 200}>
                  <Card className={`${colorClasses.border} hover:${colorClasses.border.replace('200', '400')} hover:shadow-lg ${colorClasses.shadow}/50 transition-all duration-300 transform hover:scale-105 bg-white`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <Badge variant="outline" className={`${colorClasses.text} ${colorClasses.border.replace('200', '600')}`}>
                            {product.category}
                          </Badge>
                          <CardTitle className={`text-xl ${colorClasses.text}`}>{product.name}</CardTitle>
                        </div>
                        {product.datasheet && (
                          <Button size="sm" variant="ghost" className={`text-gray-500 hover:${colorClasses.text}`}>
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <CardDescription className="text-base leading-relaxed text-gray-600">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className={`font-medium ${colorClasses.text} mb-2`}>Key Applications:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.applications.map((app) => (
                              <Badge key={app} variant="secondary" className={`text-xs ${colorClasses.badge}`}>
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className={`flex-1 ${colorClasses.button} text-white`}>
                            Request Sample
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className={`flex-1 ${colorClasses.border.replace('200', '600')} ${colorClasses.text} hover:${colorClasses.bg} bg-transparent`}
                          >
                            Technical Data
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              )
            })}
          </div>

          <FadeInSection delay={800} className="text-center mt-12">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300"
            >
              View All Featured Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* Product Finder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Product Finder</h2>
              <p className="text-xl text-gray-600">
                Find the right chemical solution for your specific application and requirements.
              </p>
            </FadeInSection>

            <FadeInSection delay={200}>
              <Card className="border-green-200 shadow-xl bg-white">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-center text-2xl text-green-700">Find Your Perfect Solution</CardTitle>
                  <CardDescription className="text-center text-base text-gray-600">
                    Use our advanced search to filter products by application, industry, or chemical properties.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-2">Industry</label>
                        <Select>
                          <SelectTrigger className="border-green-200 focus:border-green-500">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pvc-pipes">PVC Pipes</SelectItem>
                            <SelectItem value="pvc-profiles">PVC Profiles</SelectItem>
                            <SelectItem value="pvc-fittings">PVC Fittings</SelectItem>
                            <SelectItem value="pvc-cables">PVC Cables</SelectItem>
                            <SelectItem value="pvc-films">PVC Films</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-2">Application</label>
                        <Select>
                          <SelectTrigger className="border-green-200 focus:border-green-500">
                            <SelectValue placeholder="Select application" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="stabilization">Stabilization</SelectItem>
                            <SelectItem value="lubrication">Lubrication</SelectItem>
                            <SelectItem value="processing-aid">Processing Aid</SelectItem>
                            <SelectItem value="impact-modification">Impact Modification</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-2">Product Type</label>
                        <Select>
                          <SelectTrigger className="border-green-200 focus:border-green-500">
                            <SelectValue placeholder="Select product type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lead-stabiliser">Lead Stabiliser</SelectItem>
                            <SelectItem value="calcium-zinc-stabiliser">Calcium Zinc Stabiliser</SelectItem>
                            <SelectItem value="metallic-stearate">Metallic Stearate</SelectItem>
                            <SelectItem value="lubricant">Lubricant</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-2">Keywords</label>
                        <Input
                          placeholder="Enter keywords or product name"
                          className="border-green-200 focus:border-green-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white px-12 transform hover:scale-105 transition-all duration-300"
                    >
                      Search Products
                      <Search className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Need Custom Chemical Solutions?</h2>
            <p className="text-xl text-green-100">
              Our R&D team can develop custom formulations tailored to your specific requirements and applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const phoneNumber = "916304894331";
                  const message = "Hello! I would like to request a custom chemical solution tailored to my requirements. Please assist me.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Request Custom Solution
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Download Product Catalog
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
