import { ReactNode } from "react"


export const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className=" w-screen h-screen bg-white text-slate-900
            dark:bg-slate-900 dark:text-white
        ">

            <div className=" container mx-auto px-4">{children}</div>
        </div>
    )
}