import React from "react";
import MotionDiv from "@components/motionDiv";
import Boxs from "./boxs";

const jobContent = ({ props }: { props?: React.ReactNode }) => {
  const works = [<Boxs />];
  return (
    <>
      {
        <div
          className={`grid gap-5 ${
            works.length > 1 ? "grid-cols-[1fr,1fr]" : "grid-cols-[1fr]"
          }`}
        >
          {works.map((work) => (
            <MotionDiv delay={0.5}>
              <div>{work}</div>
              <div className="w-full h-[1px] bg-gray-600" />
            </MotionDiv>
          ))}
        </div>
      }
    </>
  );
};

export default jobContent;
