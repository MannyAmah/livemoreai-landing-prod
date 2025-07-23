"use client";

import type React from "react";

import Footer from "../footer";
import Header from "../header";

interface IMainLayout {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <div className="flex w-full min-h-screen flex-col bg-background text-foreground font-sans">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
