import React, { useEffect } from "react";
import services from "./Api/Services.json"
import AOS from "aos";
import "aos/dist/aos.css";
import { ServiceCard } from "./ServiceCard"; 

export const Services = () => {

      AOS.init({ duration: 2000 });

  return (
    <section className="services py-5 mt-3">
      <div className="container" id="services">
        <div className="py-5">
          <h1 className="text-center pb-5">Services</h1>

          <div className="row pb-3">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="row pb-3">
            {services.slice(3, 6).map((service, index) => (
              <ServiceCard key={index + 3} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
