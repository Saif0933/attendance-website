import { BarChart3, Clock, MapPin, Shield, Smartphone, Users } from "lucide-react";

const features = [
  { icon: MapPin, title: "Geofence Tracking", description: "Attendance is recorded only when the employee is within the approved location radius." },
  { icon: Clock, title: "Punch In / Punch Out", description: "One-tap clock in and out with real-time timestamps and location proof." },
  { icon: Shield, title: "Anti-Fraud Protection", description: "Prevent buddy punching and fake check-ins with GPS verification." },
  { icon: Users, title: "Admin Dashboard", description: "Manage employees, view attendance logs, and generate reports in one place." },
  { icon: BarChart3, title: "Detailed Reports", description: "Export attendance data with working hours, late arrivals, and overtime insights." },
  { icon: Smartphone, title: "Mobile First", description: "Designed for mobile — employees can mark attendance on the go." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Features
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground/80">
            A complete attendance management solution built for modern teams with powerful geofencing technology.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl accent-gradient shadow-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
