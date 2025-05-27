
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
      liveUrl: "https://ecommerce-api.example.com"
    },
    {
      title: "Task Management System",
      description: "A comprehensive task management application with real-time updates, built using Spring Boot and MySQL for efficient project tracking.",
      technologies: ["Spring Boot", "MySQL", "WebSocket", "JPA"],
      githubUrl: "https://github.com/example/task-manager",
      liveUrl: "https://taskmanager.example.com"
    },
    {
      title: "Banking Application",
      description: "Secure banking application with transaction management, account handling, and fraud detection features using Spring Security.",
      technologies: ["Spring Boot", "PostgreSQL", "Spring Security", "Microservices"],
      githubUrl: "https://github.com/example/banking-app",
      liveUrl: "https://banking.example.com"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my expertise in Java development,
            Spring Boot, and database management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
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
            variant="outline" 
            onClick={() => navigate('/projects')}
            className="bg-white hover:bg-gray-50"
          >
            See All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
