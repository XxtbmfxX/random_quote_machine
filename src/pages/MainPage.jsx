import React, { useEffect, useState } from "react";
import Quote from "../components/Quote";

export default function MainPage({session}) {
  return (
      <div className="Main">
        <section className="Quote">
          <Quote session={session} />
        </section>
      </div>
  );
}
