import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import PopoverAlt from "./PopoverAlt";
import { DialogHeader } from "./ui/dialog";
import { items } from "@/data";
import { TextAnimate } from "./ui/text-animate";

export function ShowCase() {
  return (
    <div className="flex flex-col mt-8 w-full">
      <TextAnimate text="Signature Dishes" type="popIn" className="font-sans font-bold text-neutral-600 dark:text-neutral-200 text-[50px] flex w-full justify-center pb-4"/>
      <BentoGrid className="max-w-7xl mx-auto mt-8">
        {items.map((item, i) => (
          <PopoverAlt
            key={i}
            trigger={
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
              />
            }>
            <div className="bg-white">
              <div className="flex flex-col items-center">
                <img src={item.header} alt="img" className="object-center object-cover max-h-[25rem] rounded-xl w-full" />
              </div>
              <p className="font-sans text-neutral-600 text-[20px] font-bold pt-4">{item.title}</p>
            </div>
          </PopoverAlt>
        ))}
      </BentoGrid>
    </div>
  );
}
