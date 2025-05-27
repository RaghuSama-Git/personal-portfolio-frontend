
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Users, Trophy } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Expert in Java and Spring Boot development"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in SQL and MongoDB"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "3 years of collaborative development experience"
    },
    {
      icon: Trophy,
      title: "Sports Enthusiast",
      description: "Active in table tennis and cricket"
    }
  ];

  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated Java developer with a passion for creating efficient, 
            scalable backend solutions. With 3 years of professional experience, 
            I specialize in Spring Boot applications and database management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            My Journey
          </h3>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <p className="mb-4">
              Over the past 3 years, I've developed a strong foundation in Java development, 
              specializing in building robust backend systems using Spring Boot. My experience 
              spans across various domains, working with both SQL and NoSQL databases.
            </p>
            <p className="mb-4">
              I believe in writing clean, maintainable code and following best practices. 
              My technical skills combined with my passion for problem-solving help me 
              deliver high-quality solutions that meet business requirements.
            </p>
            <p>
              When I'm not coding, you'll find me on the table tennis table or cricket field. 
              These sports have taught me teamwork, strategy, and perseverance - qualities 
              that I bring to my professional work as well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
