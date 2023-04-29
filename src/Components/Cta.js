import React from "react";
import { Link } from "react-router-dom";
import Ctaimg from "../Images/thiagokimel5.gif";

export default function Cta() {
  return (
    <section className="mb-20">
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover bg-bottom"
        style={{
          backgroundColor: "#1886B4",
          backgroundPositionY: "75%",
          height: "380px",
        }}
      >
        {" "}
        <img
          className="block rounded-lg"
          src={Ctaimg}
          style={{
            // marginTop: "00px",
            height: "400px",
            backdropFilter: "blur(30px)",
          }}
        />
      </div>
    </section>
  );
}
