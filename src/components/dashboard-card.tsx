
import { cn } from "@/lib/utils";
import { ChartNoAxesCombinedIcon, CrossIcon, X } from "lucide-react";
import React from "react";
import CloseCard from "./close-card";

type TCardProps = {
  title?: string;
  catId:string;
  widgetId:string;
  className?: string;
  children?: React.ReactNode;
  type: string
}
const DashboardCard = ({ catId,widgetId,title, type, className, children }: TCardProps) => {
  return (
    <div className={cn("bg-white flex flex-col rounded-xl min-w-96 w-fit min-h-80 p-5 ", className, {
      "flex items-center justify-center": !title
    })}>
      {
        title && <h4 className="text-base flex items-center justify-between font-semibold capitalize mb-3">
          <p>{title}</p>
          
           <CloseCard catId={catId} widgetId={widgetId}/>
          
        </h4>
      }
      <div className={cn("flex flex-1 flex-col justify-center items-center",{
        "items-start justify-start": type==="chart"
      })}>
        {
          children ?
          children
          :
          <div className="text-zinc-400 flex flex-col justify-center items-center">
            <ChartNoAxesCombinedIcon size={"50px"}/>
            <p className="text-zinc-500 font-medium">No Graph data available!</p>
          </div>
        }
      </div>
    </div>
  )
}

export default DashboardCard