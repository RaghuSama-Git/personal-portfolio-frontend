
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const downloadCV = () => {
    // Create a sample CV file and trigger download
    const cvContent = `
RAGHU SAMA - Java Developer

Contact Information:
Email: raghu.sama@example.com
Phone: +1 (555) 123-4567

Professional Summary:
Passionate Java developer with 3 years of experience in Spring Boot, SQL, and MongoDB.
Specializing in building robust backend solutions with modern technologies.

Technical Skills:
- Java & Spring Boot
- SQL & MongoDB
- Backend Development
- Database Management

Experience:
3 years of professional development experience

Hobbies:
- Table Tennis
- Cricket
    `;
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Raghu_Sama_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="pt-20 pb-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hey, my name is
              <span className="text-blue-600 block">Raghu Sama</span>
              <span className="text-gray-700 text-3xl sm:text-4xl lg:text-5xl block mt-2">I am a Java Developer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Passionate Java developer with 3 years of experience in Spring Boot, 
              SQL, and MongoDB. I build robust backend solutions and love playing 
              table tennis and cricket in my free time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={downloadCV}>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
            <div className="flex gap-6 mt-8 justify-center lg:justify-start">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face" 
                    alt="Developer" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
