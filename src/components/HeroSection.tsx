import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/80">
              <span className="h-2 w-2 rounded-full accent-gradient" />
              Geofence-Powered Attendance
            </div>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
              Smart Attendance,{" "}
              <span className="bg-gradient-to-r from-[hsl(210,80%,60%)] to-[hsl(230,70%,65%)] bg-clip-text text-transparent">
                Simplified.
              </span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
              Punch in and punch out with location-based verification. Track employee attendance effortlessly with geofence technology — no buddy punching, no guesswork.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="accent-gradient border-0 text-primary-foreground shadow-button hover:opacity-90 gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <Download className="h-4 w-4" /> Download App
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroIllustration}
              alt="Employee checking in at office using My Attendance app with geofence verification"
              className="w-full max-w-md animate-float drop-shadow-2xl lg:max-w-lg"
            />
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
