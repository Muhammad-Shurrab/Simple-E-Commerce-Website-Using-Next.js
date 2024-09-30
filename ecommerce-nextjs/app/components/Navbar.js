import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Jujutsu_Kaisen_logo.png"; // Import the logo image

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ></div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/products">
                  <p>Products</p>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <p>About Us</p>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            {/* Use the Image component for optimization */}
            <Image
              src={Logo}
              alt="Jujutsu Kaisen Logo"
              width={160}
              height={160}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/about-us">
                <p>About Us</p>
              </Link>
            </li>
            <li></li>
            <li>
              <Link href="/products">
                <p>Products</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
