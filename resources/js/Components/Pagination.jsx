import { Link } from "@inertiajs/react";
import React from "react";

export default function Pagination ({links}) {
  return (
    <nav className="text-center mt-4">
      {links.map(link => (
        <Link preserveScroll href={link.url || ""} key={link.label} dangerouslySetInnerHTML={{__html: link.label }} className={"inline-block px-3 py-2 rounded-lg text-gray-200 text-xs " + (link.active ? "bg-gray-950 " : " ") + (!link.url ? "text-gray-950 cursotr-not-allowed " : "hover:bg-gray-950")}></Link>
      ))}
    </nav>
  )
}
