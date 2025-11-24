import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductHeader() {
  return (
    <header className="relative w-full flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/productHeader.jpg" 
        alt="Product Kay Pee Dies"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <section className="relative z-20 max-w-6xl w-full px-4 sm:px-6 py-28 sm:py-40 flex flex-col items-center text-center gap-6">
        
        <h2 className="saira text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Our Product
        </h2>

        <h3 className="nunitoSans text-base sm:text-lg lg:text-md text-white/90 max-w-2xl leading-snug">
          Products We’re Offering to Our Customers
        </h3>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-4 text-white text-sm sm:text-base">
          <Link href="/" className="hover:text-yellowDark transition font-semibold">
            Home
          </Link>
          <span className="text-yellowDark font-bold"> {` / `} </span>
          <span className="text-yellowDark font-semibold">Product</span>
        </div>

      </section>
    </header>
  );
}

export default ProductHeader;
