import { Button } from "@/components/ui/button";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Instagram,
} from "lucide-react";
import MyResume from "../components/Assets/SamaRaghu_ Resume.pdf";

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = MyResume;
    link.download = "SamaRaghu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 pb-16 px-4 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        <div className="absolute top-20 left-20 w-4 h-4 bg-emerald-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-cyan-400 rounded-full opacity-40 animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-teal-400 rounded-full opacity-50 animate-bounce delay-700"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-emerald-300 rounded-full opacity-30 animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
          {/* Photo Section */}
          <div className="flex-1 max-w-md lg:max-w-lg order-1 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl opacity-70 animate-pulse rotate-12"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-xl opacity-60 animate-pulse delay-1000 -rotate-12"></div>
              <div className="absolute top-1/3 -right-8 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-50 animate-pulse delay-500"></div>

              <div className="relative bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 p-1 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl transform -rotate-2">
                  <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/lovable-uploads/5baefdea-45bd-485d-884f-88d62ec0caf1.png"
                      alt="Raghu Sama - Java Developer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-8 order-2 lg:order-2">
            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-lg text-emerald-300 font-medium tracking-wide mb-2">
                  Hello World! 👋
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                    I'm Raghu
                  </span>
                  <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
                    Sama
                  </span>
                </h1>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-xl text-emerald-300">
                <div className="w-16 h-[3px] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                <span className="font-semibold">Java Developer</span>
                <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-emerald-300/30 hover:border-emerald-300/50 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-center gap-3 text-emerald-300 mb-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">Experience</span>
                </div>
                <p className="text-white font-bold text-lg">4+ Years</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-cyan-300/30 hover:border-cyan-300/50 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-center gap-3 text-cyan-300 mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <p className="text-white font-bold text-lg">Hyderabad</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-lg text-gray-200 leading-relaxed">
                Passionate Java developer at{" "}
                <span className="text-emerald-300 font-semibold">TCS</span>{" "}
                specializing in
                <span className="text-cyan-300 font-semibold">
                  {" "}
                  Spring Boot
                </span>
                ,<span className="text-teal-300 font-semibold"> SQL</span>, and
                <span className="text-emerald-300 font-semibold"> MongoDB</span>
                . I build robust backend solutions and love playing table tennis
                and cricket in my free time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold"
                onClick={downloadCV}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400/10 backdrop-blur-sm font-semibold hover:border-emerald-300 transition-all duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-200 hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/raghu-sama-89a433214/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/raghu__sama/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 hover:border-teal-400/50 transition-all duration-200 hover:scale-110"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:raghusama99@gmail.com"
                className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-200 hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
