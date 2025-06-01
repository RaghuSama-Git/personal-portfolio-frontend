
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Skills = () => {
  const skills = [
    "Java",
    "Spring Boot",
    "SQL",
    "MongoDB",
    "REST APIs",
    "Microservices",
    "Git",
    "Docker",
    "AWS",
    "JavaScript",
    "React",
    "HTML/CSS",
  ];

  const galleryImages = [
    {
      src: "/lovable-uploads/db2f6cef-9580-4732-9915-cfceec3b9746.png",
      alt: "Professional photo 1",
    },
    {
      src: "/lovable-uploads/d55ddcd8-3997-49a6-abb5-5f99eaad90e4.png", 
      alt: "Professional photo 2",
    },
    {
      src: "/lovable-uploads/117fb386-a364-48c8-8151-762e2b5244db.png",
      alt: "Professional workspace photo",
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My technical expertise and the tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01]">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold text-center">{skill}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Gallery
            </h3>
            <p className="text-lg text-gray-600">
              A glimpse into my professional journey
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="border-0 shadow-xl overflow-hidden">
                        <CardContent className="p-0">
                          <div className="aspect-square relative">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
