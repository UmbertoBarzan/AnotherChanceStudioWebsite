import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Built around clarity, craft and long-term reliability"
      >
        <p>
          We combine rigorous engineering, thoughtful design and a practical
          delivery mindset so each XR project can be used and sustained in a
          real business environment.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Practical">
            We design solutions for real workflows and deployment constraints
            rather than experiments that only feel impressive in a showroom.
          </GridListItem>
          <GridListItem title="Reliable">
            Every project is built with stability, performance and easy
            handover in mind.
          </GridListItem>
          <GridListItem title="Collaborative">
            We involve stakeholders early so the final XR system supports the
            people who will actually use it.
          </GridListItem>
          <GridListItem title="Transparent">
            Clear communication and milestone reviews keep expectations aligned
            throughout the project.
          </GridListItem>
          <GridListItem title="Resourceful">
            We choose the right tools and workflows to deliver fast results
            without compromising quality.
          </GridListItem>
          <GridListItem title="Future-focused">
            Our designs are grounded in today&apos;s needs, with a path for future
            updates and broader adoption.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
