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
      <div className="h-full flex flex-col">
        <Tabs
          aria-label="tabs"
          size="sm"
          items={tabs}
          variant="underlined"
          classNames={{
            tab: "max-w-fit px-0 h-12 mobile:h-8",
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-divider mobile:grid mobile:grid-cols-2 mobile:pt-5 mobile:px-5",
            cursor: "w-full dark:bg-[#22d3ee]",
            tabContent: "dark:group-data-[selected=true]:text-[#06b6d4]",
          }}
        >
          {(item: tabsPropsType) => (
            <Tab
              className="overflow-x-hidden overflow-y-auto scroll-smooth"
              key={item.id}
              title={item.label}
            >
              {item.content}
            </Tab>
          )}
        </Tabs>
      </div>
    </>
  );
};

export default JobDemoTab;
