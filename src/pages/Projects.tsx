
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const allProjects = [
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
    },
    {
      title: "Social Media Analytics",
      description: "Real-time social media analytics platform with data visualization and sentiment analysis using Spring Boot and Apache Kafka.",
      technologies: ["Spring Boot", "Apache Kafka", "Redis", "Chart.js"],
      githubUrl: "https://github.com/example/social-analytics",
      liveUrl: "https://analytics.example.com"
    },
    {
      title: "Inventory Management System",
      description: "Enterprise-level inventory management system with barcode scanning, automated alerts, and comprehensive reporting features.",
      technologies: ["Spring Boot", "MySQL", "JasperReports", "Thymeleaf"],
      githubUrl: "https://github.com/example/inventory-system",
      liveUrl: "https://inventory.example.com"
    },
    {
      title: "Learning Management System",
      description: "Full-featured LMS with course management, student progress tracking, and interactive quizzes built with Spring Boot.",
      technologies: ["Spring Boot", "PostgreSQL", "Spring Security", "WebSockets"],
      githubUrl: "https://github.com/example/lms-platform",
      liveUrl: "https://lms.example.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                All Projects
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive showcase of my Java development projects, demonstrating
                expertise in Spring Boot, database management, and modern backend technologies.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
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
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
