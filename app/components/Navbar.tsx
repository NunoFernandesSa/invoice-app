"use client";

import { UserButton } from "@clerk/nextjs";
/**
 * @copyright 2025
 * @license Apache 2.0
 * @author Nuno F
 */

/**
 * Node Modules
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers } from "lucide-react";

const navlinks = [
  { href: "/", label: "Invoices" },
  { href: "/quotes", label: "Quotes" },
];

function Navbar() {
  const pathname = usePathname();

  const isActiveLink = (href: string): boolean =>
    pathname.replace(/\/$/, "") === href.replace(/\/$/, "");

  const renderLinks = (className: string) => {
    return navlinks.map(({ href, label }, key) => (
      <Link
        href={href}
        key={key}
        title={label}
        className={`${className} ${isActiveLink(href) ? "btn-accent" : "btn"}`}
      >
        {label}
      </Link>
    ));
  };

  return (
    <nav className="border-b border-base-300 px-5 md:px-[10%] py-4 relative">
      <div className="flex justify-between items-center">
        <div className="bg-accent-content text-accent rounded-full py-2 px-4 flex gap-2">
          InvoiceAPP
          <Layers />
        </div>
        <div className="flex justify-end items-center gap-3">
          <div className="">{renderLinks("btn btn-sm mx-3")}</div>
          <UserButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
