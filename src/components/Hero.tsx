
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react";

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
    <section id="home" className="min-h-screen pt-20 pb-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-lg text-purple-300 font-medium tracking-wide">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Raghu Sama
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-xl text-purple-300">
                <div className="w-12 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400"></div>
                <span>Java Developer</span>
                <div className="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </div>
            </div>

            {/* Professional Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 text-purple-300 mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Experience</span>
                </div>
                <p className="text-white font-semibold">3+ Years</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 text-purple-300 mb-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Specialization</span>
                </div>
                <p className="text-white font-semibold">Backend Development</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate Java developer specializing in <span className="text-purple-300 font-semibold">Spring Boot</span>, 
              <span className="text-blue-300 font-semibold"> SQL</span>, and <span className="text-green-300 font-semibold">MongoDB</span>. 
              I build robust backend solutions and love playing table tennis and cricket in my free time.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" 
                onClick={downloadCV}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-400 text-purple-300 hover:bg-purple-400/10 backdrop-blur-sm"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200 hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200 hover:scale-110">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-60 animate-pulse delay-1000"></div>
              
              {/* Main photo container */}
              <div className="relative bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600 p-1 rounded-3xl shadow-2xl">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl">
                  <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/5baefdea-45bd-485d-884f-88d62ec0caf1.png" 
                      alt="Raghu Sama - Java Developer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
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
