import React from "react";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function Button({ href, children, variant = 'primary' }: ButtonProps): JSX.Element {
  const base = "inline-flex items-center px-4 py-2 rounded-md text-sm font-medium shadow-sm";
  const styles = variant === 'primary' ? "bg-[#ffcc00] text-black hover:opacity-95" : "bg-white text-gray-800 border";
  if (href) {
    return (
      <a href={href} className={`${base} ${styles}`}>
        {children}
      </a>
    );
  }
  return (
    <button className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
