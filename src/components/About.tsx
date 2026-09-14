
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Users, Trophy } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Expert in Java and Spring Boot development",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-100 to-cyan-100"
    },
    {
      icon: Database,
      title: "Database Management", 
      description: "Proficient in SQL and MongoDB",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-100 to-emerald-100"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "4.5 years of collaborative development experience",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-100 to-indigo-100"
    },
    {
      icon: Trophy,
      title: "Sports Enthusiast",
      description: "Active in table tennis and cricket",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-100 to-red-100"
    }
  ];

  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
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
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${item.gradient}`}></div>
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.bgGradient} flex items-center justify-center`}>
                  <item.icon className={`h-8 w-8 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`} />
                </div>
                <h3 className={`text-xl font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-lg p-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 text-center">
            My Journey
          </h3>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <div className="p-6 rounded-lg bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-500">
              <p>
                Over the past 4.5 years, I've developed a strong foundation in Java development, 
                specializing in building robust backend systems using Spring Boot. My experience 
                spans across various domains, working with both SQL and NoSQL databases.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500">
              <p>
                I believe in writing clean, maintainable code and following best practices. 
                My technical skills combined with my passion for problem-solving help me 
                deliver high-quality solutions that meet business requirements.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500">
              <p>
                When I'm not coding, you'll find me on the table tennis table or cricket field. 
                These sports have taught me teamwork, strategy, and perseverance - qualities 
                that I bring to my professional work as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
