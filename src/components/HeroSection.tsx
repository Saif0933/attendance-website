import heroIllustration from "@/assets/hero-illustration.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-foreground/90">
              <span className="h-2 w-2 rounded-full accent-gradient animate-pulse" />
              Geofence-Powered Attendance System
            </div>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-7xl text-balance">
              Smart Attendance,{" "}
              <span className="bg-gradient-to-r from-[hsl(250,85%,75%)] to-[hsl(280,80%,70%)] bg-clip-text text-transparent">
                Simplified.
              </span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              Punch in and punch out with location-based verification. Track employee attendance effortlessly with geofence technology — no buddy punching, no guesswork.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="accent-gradient border-0 text-primary-foreground shadow-button hover:opacity-90 px-8 py-7 rounded-2xl flex flex-col items-start gap-0 h-auto">
                <span className="text-[10px] uppercase tracking-wider opacity-80 font-normal">Download on the</span>
                <span className="text-lg font-bold">App Store</span>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-primary-foreground hover:bg-white/10 px-8 py-7 rounded-2xl flex flex-col items-start gap-0 h-auto glass-card">
                <span className="text-[10px] uppercase tracking-wider opacity-80 font-normal">Get it on</span>
                <span className="text-lg font-bold">Google Play</span>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-primary-foreground/60 text-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-secondary bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p><span className="text-primary-foreground font-bold italic">500+</span> Companies trust us</p>
            </div>
          </div>
          <div className="flex justify-center animate-fade-up relative" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <img
              src={heroIllustration}
              alt="Employee checking in at office using My Attendance app with geofence verification"
              className="w-full max-w-md animate-float drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:max-w-lg rounded-3xl"
            />
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute -bottom-1 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
