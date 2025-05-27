
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Java Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Remote",
      responsibilities: [
        "Developed and maintained Spring Boot applications serving 10,000+ users",
        "Designed and implemented RESTful APIs with comprehensive documentation",
        "Optimized database queries resulting in 40% performance improvement",
        "Collaborated with cross-functional teams using Agile methodologies",
        "Implemented unit and integration tests achieving 85% code coverage"
      ]
    },
    {
      title: "Junior Java Developer",
      company: "Digital Innovations Ltd.",
      period: "2021 - 2022",
      location: "Hybrid",
      responsibilities: [
        "Built microservices using Spring Boot and Spring Cloud",
        "Worked with MongoDB and MySQL databases for data persistence",
        "Participated in code reviews and maintained coding standards",
        "Assisted in system architecture design and documentation",
        "Implemented security features using Spring Security"
      ]
    },
    {
      title: "Software Development Intern",
      company: "StartUp Hub",
      period: "2021",
      location: "On-site",
      responsibilities: [
        "Developed small-scale Java applications for learning purposes",
        "Gained hands-on experience with Git version control",
        "Learned Java fundamentals and object-oriented programming",
        "Participated in daily standups and sprint planning meetings",
        "Created basic REST APIs and worked with JSON data"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey as a Java developer over the past 3 years
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-blue-600 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Personal Interests
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏓</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Table Tennis</h4>
              <p className="text-gray-600">
                Regular player who enjoys the fast-paced nature of the game. 
                It helps me stay focused and improve my reflexes.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏏</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Cricket</h4>
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
