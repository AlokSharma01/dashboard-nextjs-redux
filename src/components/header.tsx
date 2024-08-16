import { cn } from "@/lib/utils"
import { ChevronRight ,CircleUserIcon,PersonStanding, User} from "lucide-react"
import { Search } from "./ui/Search"


const Header = () => {

    const nav = ["Home", "Dashboard V2"]
    return (
        <header className="flex items-center justify-between gap-10 p-3 px-5">
            <nav>
                <ul className="flex items-center">
                    {
                        nav.map((itm, ind) => {

                            return (
                                <li key={ind} className={cn("flex cursor-pointer text-zinc-400 font-medium", {
                                    "text-teal-800 font-bold": ind === nav.length - 1
                                })}>
                                    {itm}
                                    {
                                        (ind !== nav.length - 1) &&
                                        <ChevronRight />
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <section className="flex items-center gap-5">
                <Search type="search" placeholder="Search anything..." className="w-[400px]  bg-zinc-100" />
                <div className=" flex items-center justify-center size-10 rounded-full bg-zinc-200"><User/></div>
                <p className="font-semibold text-lg">Alok</p>
            </section>
        </header>
    )
}

export default Header