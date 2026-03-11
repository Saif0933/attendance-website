import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Download, ShieldCheck, Smartphone, Zap, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast"; // Optional: if using shadcn toast

const DownloadPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    
    // Show a success message
    toast({
      title: "Download Started",
      description: "My Attendance APK is being downloaded to your device.",
    });

    // Reset the button state after 3 seconds
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-in">
              <Smartphone className="h-4 w-4" />
              <span className="text-sm font-bold">Available Now for Android</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-balance">
              Get Started with <span className="text-primary italic">My Attendance</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
              Experience the best attendance management system right on your phone. Fast, reliable, and secure.
            </p>
            
            {/* Download Button Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
              <a 
                href="/app-release.apk" 
                download="MyAttendance.apk" 
                className="w-full sm:w-auto"
                onClick={handleDownloadClick}
              >
                <Button 
                  size="lg" 
                  className={`accent-gradient border-0 text-primary-foreground shadow-button hover:opacity-90 gap-3 h-16 px-10 rounded-2xl font-bold text-lg w-full transition-all ${isDownloading ? 'bg-green-600' : ''}`}
                >
                  {isDownloading ? (
                    <>
                      <CheckCircle className="h-6 w-6 animate-bounce" /> Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="h-6 w-6" /> Download APK
                    </>
                  )}
                </Button>
              </a>
            </div>
            
            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="glass-card p-8 rounded-3xl text-left border border-white/10 hover:border-primary/50 transition-colors group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Secure App</h3>
                <p className="text-muted-foreground">Encryption protected and verified for security and performance.</p>
              </div>
              
              <div className="glass-card p-8 rounded-3xl text-left border border-white/10 hover:border-primary/50 transition-colors group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Setup</h3>
                <p className="text-muted-foreground">Easy installation process that gets you up and running in seconds.</p>
              </div>
              
              <div className="glass-card p-8 rounded-3xl text-left border border-white/10 hover:border-primary/50 transition-colors group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Optimized</h3>
                <p className="text-muted-foreground">Lightweight and fully optimized for all modern Android devices.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default DownloadPage;