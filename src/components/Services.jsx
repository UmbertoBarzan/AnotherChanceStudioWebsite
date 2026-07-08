import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From industrial training to immersive stakeholder experiences, we
          design XR systems that fit operations, hardware and long-term business
          goals.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="XR Training">
              Design and deliver immersive training programs for safety,
              onboarding, and technical operations.
            </ListItem>
            <ListItem title="Simulation & Visualization">
              Build realistic, real-time models for operational review, process
              validation and decision support.
            </ListItem>
            <ListItem title="Immersive Events">
              Create polished walkthroughs, demos and product showcases for live
              stakeholder engagement.
            </ListItem>
            <ListItem title="Custom Integration">
              Connect XR experiences with existing systems, hardware platforms,
              and enterprise workflows.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
