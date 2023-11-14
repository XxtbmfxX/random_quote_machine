import React, { useEffect, useState } from "react";
import Quote from "../components/Quote";

export default function MainPage() {
  return (
      <div className="Main">
        <section className="Quote">
          <Quote />
        </section>
      </div>
  );
}
