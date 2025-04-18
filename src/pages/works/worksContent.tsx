import React from "react";
import MotionDiv from "@components/motionDiv";
import Boxs from "./boxs/boxs";
import { Tab, Tabs, Card, CardBody } from "@heroui/react";

type ContentsType = {
  id: string;
  content: React.ReactNode;
};
const jobContent = ({ props }: { props?: React.ReactNode }) => {
  const works: ContentsType[] = [{ id: "Boxs Limited", content: <Boxs /> }];
  return (
    <>
      {
        <div className="flex flex-col items-start justify-center w-full h-full">
          <Tabs
            classNames={{
              tab: "max-w-fit px-0 h-12",
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-divider",
              cursor: "w-full dark:bg-[#22d3ee]",
              tabContent: "dark:group-data-[selected=true]:text-[#06b6d4]",
            }}
            variant="underlined"
            size="lg"
            aria-label="works tab"
          >
            {works.map(({ id, content }) => (
              <>
                <Tab key={id} title={id}>
                  <Card className="w-full">
                    <CardBody>
                      <MotionDiv delay={0.5}>
                        <div>{content}</div>
                        <div className="w-full h-[1px] bg-gray-600" />
                      </MotionDiv>
                    </CardBody>
                  </Card>
                </Tab>
              </>
            ))}
          </Tabs>
        </div>
      }
    </>
  );
};

export default jobContent;
