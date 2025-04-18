import { Tabs, Tab } from "@heroui/react";
import React from "react";

export type tabsPropsType = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const JobDemoTab = ({ tabs }: { tabs: tabsPropsType[] }) => {
  return (
    <>
      <div className="h-full w-full flex flex-col mobile:w-screen">
        <Tabs
          aria-label="tabs"
          items={tabs}
          size="sm"
          variant="underlined"
          classNames={{
            tab: "max-w-fit px-0 h-12",
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-divider",
            cursor: "w-full dark:bg-[#22d3ee]",
            tabContent: "dark:group-data-[selected=true]:text-[#06b6d4]",
          }}
        >
          {(item: tabsPropsType) => (
            <Tab className="overflow-y-scroll scroll-smooth" key={item.id} title={item.label}>
              {item.content}
            </Tab>
          )}
        </Tabs>
      </div>
    </>
  );
};

export default JobDemoTab;
