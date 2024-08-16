"use client"
import DashboardCard from "@/components/dashboard-card";
import DashboardHeader from "@/components/dashboard-header";
import { DashboardPieChart } from "@/components/dashboard-pie-chart";
import { Button } from "@/components/ui/button";
import { ChildrenType } from "@/types/types";
import { PlusIcon } from "lucide-react";
import React from "react";
import data from "../constant/widgetData.json"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "@/store";
import SideDrawer from "@/components/side-drawer";
import { toggleWidget } from "@/store/slices/widgetsSlice";
import { toast } from "sonner";

export default function Home() {
  const categories = useSelector((state: RootState) => state.widgets.categories);
 
  return (
    <main className="p-5 py-14">
      <DashboardHeader />
      <section className="p-2 mt-4 flex flex-col gap-16">
        {
          categories.map((category, ind) => {
            return (
              <div key={ind}>
                <H3>
                  {/* CSPM Executive dashboard */}
                  {category.category}
                </H3>
                <div className="flex flex-wrap gap-10 items-center">

                  {
                    category.widget.map((widget) => {
                      if (widget.isActive) {

                        return (
                          <DashboardCard  catId={category.id} widgetId={widget.id} key={widget.id} type={widget?.type} title={widget.label} className="flex-1">
                            {widget.type === "chart" &&
                              <DashboardPieChart />
                            }

                          </DashboardCard>
                        )
                      }
                    })
                  }
                  <DashboardCard catId={category.id} widgetId={""} type="add" className="flex-1 " >
                    <SideDrawer activeTab={category.category}>
                      <Button variant={"outline"} className="flex cursor-pointer items-center gap-3 text-zinc-400 bg-transparent">
                        <PlusIcon />
                        Add Widget
                      </Button>
                    </SideDrawer>
                  </DashboardCard>
                </div>
              </div>
            )
          })
        }

        {/* <div>
          <H3>
            CWPP Dashboard
          </H3>
          <div className="flex flex-wrap gap-10 items-center">
            <DashboardCard type="empty" title="Cloud Accounts" className="flex-1">
            </DashboardCard>
            <DashboardCard type="chart" title="Cloud Accounts" className="flex-1">
              <DashboardPieChart />
            </DashboardCard>
            <DashboardCard type="add" className="flex-1 " >
              <Button variant={"outline"} className="flex cursor-pointer items-center gap-3 text-zinc-400 bg-transparent">
                <PlusIcon />
                Add Widget
              </Button>
            </DashboardCard>
          </div>
        </div> */}
      </section>
    </main>
  );
}


export function H3({ children }: ChildrenType) {

  return (
    <h3 className="text-lg font-semibold capitalize">
      {children}
    </h3>
  )
}