import Image from "next/image";

const NAV_ITEMS: { href: string; label?: string }[] = [
  { href: "/" },
  { href: "/about", label: "About Us" },
  { href: "/lock-status", label: "Lock Status" },
  { href: "/vessels", label: "Vessels" },
  { href: "/barges", label: "Barges" },
  { href: "/websites/garberbrosinc/images/application.pdf", label: "Employment" },
  { href: "/contact", label: "Contact Us" }
];

export default function Header(): JSX.Element {
  const logoUrl = "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png";
  const safeSrc = encodeURI(logoUrl);
  return (
    <header className="header-container bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" aria-label="Home">
            <Image src={safeSrc} alt="Garber Bros logo" width={200} height={50} unoptimized />
          </a>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          {Array.isArray(NAV_ITEMS) ? (Array.isArray(NAV_ITEMS) ? NAV_ITEMS : []).map((item, idx) => (
            <a key={idx} href={item.href} className="text-gray-700 hover:text-black">{item.label ?? item.href}</a>
          )) : null}
        </nav>
      </div>
      <div className="md:hidden border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between">
          <div className="text-sm">
            <a href="/vessels" className="text-gray-700">Vessels</a>
          </div>
          <div className="text-sm">
            <a href="/contact" className="text-gray-700">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}
