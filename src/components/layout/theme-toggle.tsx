"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure component runs only on the client

    // Load theme from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("system"); // Default to system theme
    }
  }, [setTheme]);

  // Save selected theme to localStorage
  const handleThemeChange = (newTheme: string) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // Prevent hydration errors
  if (!mounted) return null;

  // Determine the displayed icon based on the current theme
  const getThemeIcon = () => {
    if (theme === "system") return <Monitor className="h-6 w-6 text-blue-500" />;
    return resolvedTheme === "dark" ? <Moon className="h-6 w-6 text-gray-700" /> : <Sun className="h-6 w-6 text-yellow-400" />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {getThemeIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          <Sun className="mr-2 h-5 w-5 text-yellow-400" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          <Moon className="mr-2 h-5 w-5 text-gray-700" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")}>
          <Monitor className="mr-2 h-5 w-5 text-blue-500" />
          System (Default)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
