import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Logo from "/images/full-logo.svg";
import {
  IconCommand,
  IconMenuDeep,
  IconCalendar,
  IconFlag,
  IconPlus,
  IconMoon,
  IconSun,
  IconBell,
  IconMessageCircle,
  IconChartBar,
  IconMaximize,
} from "@tabler/icons-react";
import DropMenu from "../dropdown/DropMenu";
import "./navbar.css";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const toggleFullScreen = () => {
    const docEl = document.documentElement as HTMLElement & {
      requestFullscreen?: () => Promise<void>;
      mozRequestFullScreen?: () => Promise<void>;
      webkitRequestFullscreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    };

    if (!document.fullscreenElement) {
      if (docEl.requestFullscreen)
        docEl.requestFullscreen().catch(console.error);
      else if (docEl.mozRequestFullScreen)
        docEl.mozRequestFullScreen().catch(console.error);
      else if (docEl.webkitRequestFullscreen)
        docEl.webkitRequestFullscreen().catch(console.error);
      else if (docEl.msRequestFullscreen) docEl.msRequestFullscreen();
    } else {
      if (document.exitFullscreen)
        document.exitFullscreen().catch(console.error);
      else if ((document as any).mozCancelFullScreen)
        (document as any).mozCancelFullScreen();
      else if ((document as any).webkitExitFullscreen)
        (document as any).webkitExitFullscreen();
      else if ((document as any).msExitFullscreen)
        (document as any).msExitFullscreen();
    }
  };

  const navbarItems = [
    {
      type: "search",
      placeholder: "Search",
      icon: <IconCommand size={20} className="text-gray-500" />,
    },
    {
      type: "text",
      label: "Academic Year: 2024 / 2025",
      icon: <IconCalendar size={20} className="text-gray-500" />,
    },
    { type: "icon", icon: <IconFlag size={18} className="icon" /> },
    { type: "icon", icon: <IconPlus size={18} className="icon" /> },
    {
      type: "icon",
      icon: theme.isDarkMode ? (
        <IconSun size={18} className="icon" />
      ) : (
        <IconMoon size={18} className="icon" />
      ),
      onClick: theme.toggleTheme,
    },
    { type: "icon", icon: <IconBell size={18} className="icon" /> },
    { type: "icon", icon: <IconMessageCircle size={18} className="icon" /> },
    { type: "icon", icon: <IconChartBar size={18} className="icon" /> },
    {
      type: "icon",
      icon: <IconMaximize size={18} className="icon" />,
      onClick: toggleFullScreen,
    },
    { type: "profile", image: "/images/profile-image.jpg" },
  ];

  const academicYears = [
    "Academic Year: 2023 / 2024",
    "Academic Year: 2024 / 2025",
    "Academic Year: 2025 / 2026",
  ];

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Company Logo" className="logo" />
        <IconMenuDeep stroke={2} className="menu-icon" aria-label="Menu" />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        {navbarItems
          .filter((item) => item.type === "search")
          .map((item, index) => (
            <div key={index} className="search-container">
              <input
                type="search"
                placeholder={item.placeholder}
                className="search-input"
              />
              {item.icon}
            </div>
          ))}
      </div>

      <div className="navbar-right">
        <DropMenu
          data={academicYears}
          defaultLabel="Academic Year 2024 / 2025"
          onFilterChange={() => {}}
        />

        {navbarItems
          .filter((item) => item.type === "icon")
          .map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="nav-icon"
              aria-label="Navbar Icon"
            >
              {item.icon}
            </button>
          ))}

        {navbarItems
          .filter((item) => item.type === "profile")
          .map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt="User Profile"
              className="profile-img"
            />
          ))}
      </div>
    </header>
  );
};

export default Navbar;
