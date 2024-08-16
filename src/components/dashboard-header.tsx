import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock4, EllipsisVertical, PlusIcon, RefreshCcw } from "lucide-react";
import { ModalBox } from "./modal-box";


const DashboardHeader = () => {
  return (
    <section className="flex items-center justify-between">
      <h2 className="text-xl font-bold">CNAPP Dashboard</h2>
      <div className="flex items-center gap-5">
        <ModalBox>
          <Button className="font-medium text-md text-zinc-500 flex items-center gap-3" variant={"secondary"} >
            Add Widget <PlusIcon />
          </Button>
        </ModalBox>
        <Button className="px-2 font-medium text-md text-zinc-500 flex items-center gap-3" variant={"secondary"}>
          <RefreshCcw />
        </Button>
        <Button className=" px-2 font-medium text-md text-zinc-500 flex items-center gap-3" variant={"secondary"}>
          <EllipsisVertical />
        </Button>
        <Select>
          <SelectTrigger className="w-[180px] p-0 px-2 flex outline-indigo-500 focus:outline-indigo-500 text-indigo-500 text-md font-semibold">

            <Clock4 />
            <div className="bg-indigo-500 w-[2px]   h-[30px]"></div>
            <p>Last 2 days</p>

          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Last 2 days</SelectItem>

          </SelectContent>
        </Select>

      </div>
    </section>
  )
}

export default DashboardHeader