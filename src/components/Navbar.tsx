// import { Button } from "@/components/ui/button";
// import { Download, MapPin } from "lucide-react";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl glass-morphism">
//       <div className="container mx-auto flex h-20 items-center justify-between px-6">
//         <div className="flex items-center gap-3 group cursor-pointer">
//           <div className="flex h-11 w-11 items-center justify-center rounded-xl accent-gradient shadow-lg group-hover:rotate-12 transition-transform duration-300">
//             <MapPin className="h-6 w-6 text-primary-foreground" />
//           </div>
//           <span className="font-display text-2xl font-bold tracking-tight text-foreground transition-all group-hover:opacity-80">
//             My Attendance
//           </span>
//         </div>
        
//         <div className="hidden items-center gap-12 md:flex">
//           <a href="#features" className="relative text-sm font-bold text-muted-foreground transition-all hover:text-primary group">
//             Features
//             <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
//           </a>
//           <a href="#how-it-works" className="relative text-sm font-bold text-muted-foreground transition-all hover:text-primary group">
//             How It Works
//             <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
//           </a>
//         </div>
        
//         <Button size="lg" className="accent-gradient border-0 text-primary-foreground shadow-button hover:opacity-90 gap-2 h-12 px-7 rounded-2xl font-bold">
//           <Download className="h-5 w-5" /> Download App
//         </Button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl glass-morphism">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl accent-gradient shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <MapPin className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-foreground transition-all group-hover:opacity-80">
            My Attendance
          </span>
        </Link>
        
        <div className="hidden items-center gap-12 md:flex">
          <a href="/#features" className="relative text-sm font-bold text-muted-foreground transition-all hover:text-primary group">
            Features
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="/#how-it-works" className="relative text-sm font-bold text-muted-foreground transition-all hover:text-primary group">
            How It Works
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
        
        {/* Direct download for the APK */}
        <a href="/app-release.apk" download="MyAttendance.apk">
          <Button size="lg" className="accent-gradient border-0 text-primary-foreground shadow-button hover:opacity-90 gap-2 h-12 px-7 rounded-2xl font-bold">
            <Download className="h-5 w-5" /> Download App
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
