import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We start by mapping the business context, operational constraints,
          and user needs to define an XR experience that aligns with real-world
          outcomes.
        </p>
        <p>
          Through workshops, technical feasibility checks, and stakeholder
          interviews, we validate assumptions and clarify the scope for the
          first prototype.
        </p>
        <p>
          The result is a focused discovery plan with recommended platforms,
          success metrics, and a practical implementation path.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Stakeholder workshops</TagListItem>
        <TagListItem>Operational research</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Experience mapping</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Technical validation</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
