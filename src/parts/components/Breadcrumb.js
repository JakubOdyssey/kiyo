"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label =
      segment.charAt(0).toUpperCase() +
      segment.slice(1).replace(/-/g, " ");

    return { href, label };
  });

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol itemScope itemType="https://schema.org/BreadcrumbList" className="breadcrumb-items">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="breadcrumb-item">
          <span itemProp="name"><Link href="/" itemProp="item">Home</Link></span>
        </li>

        {breadcrumbs.map((crumb, index) => (
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="breadcrumb-item" key={crumb.href}>
            <span className="breadcrumb-separator">/</span>
            {index === breadcrumbs.length - 1 ? (
              <span itemProp="name" className="breadcrumb-active">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} itemProp="item"><span itemProp="name">{crumb.label}</span></Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}