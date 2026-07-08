import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on discovery, we build the XR architecture, prototype the core
          interactions, and validate the experience on the chosen hardware.
        </p>
        <p>
          Our development process keeps performance, usability and real-world
          constraints front of mind, so the final product is practical for
          operators and stakeholders alike.
        </p>
        <p>
          Every project is reviewed with the client through frequent previews
          and milestone checkpoints to ensure the direction stays aligned with
          the business goal.
        </p>
      </div>
      <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
        className="mt-12"
      >
        The team delivered a clear and effective prototype that helped our
        stakeholders understand exactly how XR could support our operations.
      </Blockquote>
    </Section>
  );
};

export default Build;
