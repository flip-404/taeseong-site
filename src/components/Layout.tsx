import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            My Blog
          </Link>
          <nav>
            <Link to="/" className="mx-4 hover:underline">
              Home
            </Link>
            <Link to="/about" className="mx-4 hover:underline">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8 px-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 px-6 text-center">
        <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
