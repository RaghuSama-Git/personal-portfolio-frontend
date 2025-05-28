
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "E-Commerce Backend API",
      description: "A robust e-commerce backend built with Spring Boot, featuring user authentication, product management, and order processing with MongoDB integration.",
      technologies: ["Spring Boot", "MongoDB", "JWT", "REST API"],
      githubUrl: "https://github.com/example/ecommerce-api",
      liveUrl: "https://ecommerce-api.example.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Task Management System",
      description: "A comprehensive task management application with real-time updates, built using Spring Boot and MySQL for efficient project tracking.",
      technologies: ["Spring Boot", "MySQL", "WebSocket", "JPA"],
      githubUrl: "https://github.com/example/task-manager",
      liveUrl: "https://taskmanager.example.com",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Banking Application",
      description: "Secure banking application with transaction management, account handling, and fraud detection features using Spring Security.",
      technologies: ["Spring Boot", "PostgreSQL", "Spring Security", "Microservices"],
      githubUrl: "https://github.com/example/banking-app",
      liveUrl: "https://banking.example.com",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my expertise in Java development,
            Spring Boot, and database management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            onClick={() => navigate('/projects')}
          >
            See All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
