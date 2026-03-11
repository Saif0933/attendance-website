const steps = [
  { step: "01", title: "Download the App", description: "Install My Attendance on your mobile device and create your account." },
  { step: "02", title: "Enter the Geofence", description: "Walk into your office area — the app detects you're within range." },
  { step: "03", title: "Punch In", description: "Tap once to mark your attendance. Your location and time are recorded securely." },
  { step: "04", title: "Punch Out", description: "When you leave, tap to clock out. Your working hours are calculated automatically." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-secondary-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Get started in minutes. No hardware required.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl accent-gradient font-display text-xl font-bold text-primary-foreground">
                {s.step}
              </div>
              <div>
                <h3 className="mb-1 font-display text-lg font-semibold text-secondary-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-secondary-foreground/70">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
