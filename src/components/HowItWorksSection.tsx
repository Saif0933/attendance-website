const steps = [
  { step: "01", title: "Download the App", description: "Install My Attendance on your mobile device and create your account." },
  { step: "02", title: "Enter the Geofence", description: "Walk into your office area — the app detects you're within range." },
  { step: "03", title: "Punch In", description: "Tap once to mark your attendance. Your location and time are recorded securely." },
  { step: "04", title: "Punch Out", description: "When you leave, tap to clock out. Your working hours are calculated automatically." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Process
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground/80">
            Get your team up and running in minutes. No expensive hardware or complex setup required.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="group relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[80%] w-full h-px bg-dashed border-t-2 border-dashed border-primary/20 -z-10" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl accent-gradient font-display text-2xl font-bold text-primary-foreground shadow-lg group-hover:rotate-6 transition-transform">
                  {s.step}
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
