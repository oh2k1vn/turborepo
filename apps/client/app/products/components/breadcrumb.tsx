"use client";

import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@ui/components/ui/breadcrumb";

export function BreadcrumbLayout() {

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbLink
            href="/"
          >
            Home
          </BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbLink
            href="/"
            className="text-black"
          >
            Catalog
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
