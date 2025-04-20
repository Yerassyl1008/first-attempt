import React from "react";
import Sidebar from "@/components/page";
import Main from "@/components/main/page";

export default function Home() {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <Main />
      </div>
    </>
    
  );
}
