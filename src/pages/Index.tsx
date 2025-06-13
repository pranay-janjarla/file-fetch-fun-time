
import { Download, File, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const files = [
    {
      id: 1,
      name: "Initial Setup Guide",
      filename: "Things You Need For Initial Setup.docx",
      description: "Complete setup documentation including all requirements, dependencies, and step-by-step instructions to get started.",
      size: "1.2 MB",
      type: "DOCX",
      downloadUrl: "/files/Things You Need For Initial Setup.docx",
      icon: File
    },
    {
      id: 2,
      name: "Newsletter AI Package",
      filename: "Newsletter-ai.zip",
      description: "Full newsletter AI application package with all source code, configuration files, and dependencies included.",
      size: "8.5 MB", 
      type: "ZIP",
      downloadUrl: "/files/Newsletter-ai.zip",
      icon: File
    },
    {
      id: 3,
      name: "Configuration Data",
      filename: "config.json",
      description: "JSON configuration file containing default settings, API endpoints, and application parameters.",
      size: "45 KB",
      type: "JSON",
      downloadUrl: "/files/config.json",
      icon: File
    },
    {
      id: 4,
      name: "Additional Resources",
      filename: "resources.zip",
      description: "Additional resources archive containing templates, examples, and supplementary materials.",
      size: "2.8 MB",
      type: "ZIP",
      downloadUrl: "/files/resources.zip",
      icon: File
    }
  ];

  const handleDownload = (file: typeof files[0]) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = file.downloadUrl;
    link.download = file.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Downloading ${file.filename}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">File Download Hub</h1>
                <p className="text-sm text-muted-foreground">Access your project files instantly</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              View Repository
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Download Project Files
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get instant access to all the files you need. Click on any file below to start your download.
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {files.map((file) => (
              <Card key={file.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <file.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{file.name}</CardTitle>
                        <p className="text-sm text-muted-foreground font-mono">{file.filename}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {file.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="mb-4 leading-relaxed">
                    {file.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-medium">
                      Size: {file.size}
                    </span>
                    <Button 
                      onClick={() => handleDownload(file)}
                      className="flex items-center gap-2 group-hover:shadow-md transition-all"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <div className="bg-muted/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Need Help?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you encounter any issues with downloading these files, please check our documentation 
              or contact our support team. All files are hosted securely and scanned for safety.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline">
                <File className="w-4 h-4 mr-2" />
                Documentation
              </Button>
              <Button variant="outline">
                <Github className="w-4 h-4 mr-2" />
                GitHub Issues
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 File Download Hub. All files are provided as-is.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
