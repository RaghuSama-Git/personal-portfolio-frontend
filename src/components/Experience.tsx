
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Systems Engineer",
      company: "TCS",
      period: "2025 April - 2025 September",
      location: "Hyderabad, India",
      responsibilities: [
        "Working on enterprise-level Java applications with Spring Boot framework",
        "Developing microservices architecture for scalable backend solutions",
        "Collaborating with cross-functional teams on large-scale projects",
        "Implementing best practices for code quality and performance optimization",
        "Contributing to system design and technical documentation"
      ]
    },
    {
      title: "Java Developer",
      company: "Smart IMS",
      period: "2022 April - 2025 April",
      location: "Hyderabad, India",
      responsibilities: [
        "Developed and maintained Spring Boot applications for 3 years",
        "Built RESTful APIs with comprehensive documentation and testing",
        "Worked extensively with SQL databases and MongoDB for data management",
        "Implemented security features using Spring Security framework",
        "Participated in agile development processes and code reviews"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey as a Java developer over the past 3.5 years
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01]">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-purple-100 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-1 text-purple-100">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-purple-100">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-lg p-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6 text-center">
            Personal Interests
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-100 to-red-100 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🏓</div>
              <h4 className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">Table Tennis</h4>
              <p className="text-gray-600">
                Regular player who enjoys the fast-paced nature of the game. 
                It helps me stay focused and improve my reflexes.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-100 to-teal-100 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🏏</div>
              <h4 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">Cricket</h4>
              <p className="text-gray-600">
                Team sport enthusiast who values strategy and teamwork. 
                Cricket has taught me patience and strategic thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
