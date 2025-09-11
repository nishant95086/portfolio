import { Home, User, Image, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ activeSection }) {
const navigate = useNavigate();

  const linkClasses = (id) =>
    `p-3 rounded-full transition-all duration-300 ${
      activeSection === id
        ? "bg-red-600 scale-110 shadow-lg shadow-red-500/50"
        : "bg-zinc-800 hover:bg-red-600"
    }`;

  return (
    <div className="hidden md:flex flex-col items-center justify-center space-y-4 py-6 px-3 fixed left-0 top-0 h-full">
      <button onClick={() => navigate("\home")} >
        <Home className="text-white" size={22} />
      </button>
      <button onClick={() => navigate("\about")} >
        <User className="text-white" size={22} />
      </button>
      <button onClick={() => navigate("\certificate")} >
        <Image className="text-white" size={22} />
      </button>
      <button onClick={() => navigate("\contact")} >
        <Phone className="text-white" size={22} />
      </button>
    </div>
  );
}
