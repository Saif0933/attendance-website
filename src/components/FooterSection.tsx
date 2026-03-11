import { MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl accent-gradient shadow-lg">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold text-foreground">My Attendance</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="text-foreground font-semibold">My Attendance</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
