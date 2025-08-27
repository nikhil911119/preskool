import React, { useState, useRef, useEffect } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import "./dropmenu.css";

interface DropMenuProps {
  data: (string | number)[];
  defaultLabel?: string | number;
  onFilterChange: (value: any) => void;
}

const DropMenu: React.FC<DropMenuProps> = ({
  data,
  defaultLabel = "Select",
  onFilterChange,
}) => {
  const [selected, setSelected] = useState<string | number>(defaultLabel);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string | number) => {
    setSelected(value);
    onFilterChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="dropdown-trigger flex gap-[20px] items-center border px-4 py-2 rounded-lg cursor-pointer bg-white shadow-sm hover:bg-gray-100 transition w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <IconChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <ul className="absolute left-0 mt-1 w-full bg-white border shadow-md rounded-lg overflow-hidden z-10">
          {data.map((item) => (
            <li
              key={item.toString()}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition"
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropMenu;
