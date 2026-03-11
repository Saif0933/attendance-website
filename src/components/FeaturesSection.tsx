import { MapPin, Clock, Shield, Users, BarChart3, Smartphone } from "lucide-react";

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
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete attendance management solution built for modern teams.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:border-primary/30 hover:shadow-lg"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl accent-gradient">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
