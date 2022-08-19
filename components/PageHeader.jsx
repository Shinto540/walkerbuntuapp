import Link from "next/link";
import React from "react";

const PageHeader = ({pageTitle}) => {
  return (
    <section className="page__header text-white uppercase flex items-center justify-center h-[40vh] relative">
      <div>
        <h3 className="text-5xl font-bold text-white uppercase">{pageTitle}</h3>
      </div>
      <div className="page__nav absolute">
        <Link href="/">
          <a>Home</a>
        </Link>
        <span>/ {pageTitle}</span>
      </div>
    </section>
  );
};

export default PageHeader;
