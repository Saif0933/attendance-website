import { MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg accent-gradient">
              <MapPin className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">My Attendance</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} My Attendance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
