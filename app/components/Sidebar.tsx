"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { sidebarStyles as s } from "../data/dummyStyles"


type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

const HomeIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 11L12 4l9 7v9a1 1 0 0 1-1 1h-5v-5H9v5H4a1 1 0 0 1-1-1v-9z" />
  </svg>
);

const ProjectsIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h10v8H4zM10 14h10v6H10zM14 4h6v6h-6z" />
  </svg>
);

const UserIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20a8 8 0 0 1 16 0" />
  </svg>
);

const MailIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v12H3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 7 9-7" />
  </svg>
);

const MenuIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 8l8 8m0-8l-8 8" />
  </svg>
);

const ExperienceIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h10l3 4v14H4V7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4h4M8 13h8M8 17h8" />
  </svg>
);

const ToolsIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 7a4 4 0 0 1 0 8l6 6-2 2-6-6a4 4 0 1 1 2-10z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 8l3 3" />
  </svg>
);



const Sidebar = (): React.ReactElement => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {   // Cierra el menu si se hace click fuera del menu o del toggle
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest('.mobile-sidebar') &&             // Cierra el menu si se hace click fuera del menu
        !target.closest('.mobile-menu-toggle')            // Cierra el menu si se hace click en el toggle
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {               // Cierra el menu si se presiona la tecla Escape
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);     // Agrega un event listener para el click
    document.addEventListener('keydown', handleEsc);            // Agrega un event listener para la tecla Escape

    return () => {                                              // Remueve los event listeners cuando el componente se desmonta
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isMobileMenuOpen]);

  return (
    <div>Sidebar</div>
  )
}

export default Sidebar  