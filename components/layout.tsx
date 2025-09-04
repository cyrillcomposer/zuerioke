import { ReactNode } from "react";
import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navigation />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">{children}</main>
      <Footer />
    </div>
  );
}