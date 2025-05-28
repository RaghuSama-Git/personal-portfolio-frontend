import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Server, Database, Code, GitBranch, Camera } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      skills: [
        { name: "Java", level: 95, color: "from-orange-400 to-red-500" },
        { name: "Spring Boot", level: 92, color: "from-green-400 to-emerald-500" },
        { name: "Microservices", level: 88, color: "from-blue-400 to-cyan-500" },
        { name: "RESTful API Design", level: 90, color: "from-purple-400 to-indigo-500" },
        { name: "JUnit/Testing", level: 85, color: "from-pink-400 to-rose-500" },
      ]
    },
    {
      title: "Database Technologies",
      icon: Database,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      skills: [
        { name: "SQL", level: 90, color: "from-blue-400 to-cyan-500" },
        { name: "MySQL/PostgreSQL", level: 88, color: "from-indigo-400 to-blue-500" },
        { name: "MongoDB", level: 86, color: "from-green-400 to-emerald-500" },
        { name: "Database Design", level: 85, color: "from-teal-400 to-cyan-500" },
      ]
    },
    {
      title: "Frontend & Other",
      icon: Code,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      skills: [
        { name: "React.js", level: 82, color: "from-cyan-400 to-blue-500" },
        { name: "JavaScript/TypeScript", level: 80, color: "from-yellow-400 to-orange-500" },
        { name: "HTML/CSS", level: 78, color: "from-pink-400 to-red-500" },
        { name: "Git/Version Control", level: 88, color: "from-gray-600 to-gray-800" },
        { name: "Docker", level: 80, color: "from-blue-500 to-indigo-500" },
        { name: "DevOps/CI/CD", level: 75, color: "from-purple-400 to-pink-500" },
      ]
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      alt: "Java programming on monitor",
      title: "Backend Development"
    },
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      alt: "Circuit board technology",
      title: "Technology Stack"
    },
    {
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      alt: "Developer workspace",
      title: "Development Environment"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive overview of my technical skills across different domains of software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.bgGradient} flex items-center justify-center`}>
                  <category.icon className={`h-8 w-8 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`} />
                </div>
                <CardTitle className={`text-2xl bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-semibold text-sm">{skill.name}</span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tools Section */}
        <div className="mt-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-100 to-slate-200 flex items-center justify-center">
                <GitBranch className="h-8 w-8 bg-gradient-to-r from-gray-600 to-slate-800 bg-clip-text text-transparent" />
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-gray-600 to-slate-800 bg-clip-text text-transparent">
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "IntelliJ IDEA", "Maven", "Gradle", "Postman", "Jenkins", "AWS",
                  "Linux", "Swagger", "Redis", "Hibernate", "Spring Security", "JPA"
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-gradient-to-r from-gray-100 to-slate-200 rounded-lg text-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-gray-200"
                  >
                    <span className="text-gray-700 font-medium text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-200 flex items-center justify-center">
                <Camera className="h-8 w-8 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent" />
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
                Project Gallery
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="basis-full">
                      <div className="relative group">
                        <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
                          <img 
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl font-semibold">{image.title}</h3>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
                <CarouselNext className="right-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
              </Carousel>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
