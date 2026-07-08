import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          In delivery we finalize the XR experience, optimize it for the
          target platform, and prepare it for launch in the client&apos;s operational
          environment.
        </p>
        <p>
          We validate the product on the selected headset or display hardware,
          refine interactions, and hand over clear documentation for operators
          and maintenance teams.
        </p>
        <p>
          After launch, we remain available for support, iteration and any
          follow-up adjustments needed to keep the project running smoothly.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Device validation, performance tuning, and QA ensure the experience
          works reliably in the real world.
        </ListItem>
        <ListItem title="Integration">
          We connect XR systems with existing workflows, data sources, and
          stakeholder review processes.
        </ListItem>
        <ListItem title="Support">
          Clear documentation, deployment guidance, and optional post-launch
          support keep the solution stable over time.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
