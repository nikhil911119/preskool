import "./Sidebar.css";
import { MenuSection } from "./Sidebar.types";
import MenuItem from "./MenuItem";

// Import Tabler Icons
import {
  IconTable,
  IconLayoutDashboard,
  IconLayoutSidebar,
} from "@tabler/icons-react";

const Sidebar: React.FC = () => {
  const menu: MenuSection[] = [
    {
      title: "Main",
      items: [
        {
          label: "Dashboard",
          icon: <IconLayoutDashboard />,
          type: "dropdown",
          dropItems: [
            { title: "Admin Dashboard", path: "/" },
            { title: "Teachers Dashboard", path: "/" },
            { title: "Students Dashboard", path: "/" },
            { title: "Guardians Dashboard", path: "/" },
          ],
        },
        {
          label: "Application",
          icon: <IconTable />,
          type: "dropdown",
          dropItems: [
            { title: "Chat", path: "/" },
            { title: "Call", path: "/" },
            { title: "Calendar", path: "/" },
            { title: "Email", path: "/" },
            { title: "To Do", path: "/" },
            { title: "Notes", path: "/" },
            { title: "File Manager", path: "/" },
          ],
        },
      ],
    },

    {
      title: "Layout",
      items: [
        {
          label: "Default",
          icon: <IconLayoutSidebar stroke={2} />,
          type: "link",
          link: "/",
        },
        {
          label: "Mini",
          icon: <IconLayoutSidebar stroke={2} />,
          type: "link",
        },
        {
          label: "RTL",
          icon: <IconLayoutSidebar stroke={2} />,
          type: "link",
          link: "/link",
        },
        {
          label: "Box",
          icon: <IconLayoutSidebar stroke={2} />,
          type: "link",
          link: "/box",
        },
        {
          label: "Dark",
          icon: <IconLayoutSidebar stroke={2} />,
          type: "link",
          link: "/dark",
        },
      ],
    },
    {
      title: "Peoples",
      items: [
        {
          icon: <IconLayoutSidebar stroke={2} />,
          label: "Students",
          type: "dropdown",
          dropItems: [
            {
              title: "All Students",
              path: "/All Students",
            },
            {
              title: "Student List",
              path: "/student-lists",
            },
            {
              title: "All Students",
              path: "/student-details",
            },
            {
              title: "Students Promotion",
              path: "/student-promotion",
            },
          ],
        },
        {
          icon: <IconLayoutSidebar stroke={2} />,
          label: "Parents",
          type: "dropdown",
          dropItems: [
            {
              title: "All Parents",
              path: "/all-parents",
            },
          ],
        },
        {
          icon: <IconLayoutSidebar stroke={2} />,
          label: "Guardians",
          type: "dropdown",
          dropItems: [
            {
              title: "All Guardians",
              path: "/all-guardians",
            },
            {
              title: "Guardians List",
              path: "/guardians-lists",
            },
          ],
        },
        {
          icon: <IconLayoutSidebar stroke={2} />,
          label: "Teachers",
          type: "dropdown",
          dropItems: [
            {
              title: "All Teachers",
              path: "/all-teachers",
            },
            {
              title: "Teachers List",
              path: "/teachers-lists",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="sidebar w-[252px] absolute h-full">
      <div className="sidebar-menu mt-[56px] p-[15px]">
        <div className="logo flex items-center gap-2 bg-white rounded-[5px] p-[8px] ">
          <img src="/images/global-img.svg" alt="Logo" />
          <h2>Global International</h2>
        </div>
        <nav className="menu">
          {menu.map((section, sectionIndex) => (
            <div key={sectionIndex} className="menu-section">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <div className="menu-item">
                      <MenuItem {...item} key={sectionIndex} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
