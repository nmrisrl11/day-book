import { Birthdays, GrainyBackground } from "@/components/custom"
import { GridPattern } from "@/components/magicui/grid-pattern"

const Home = () => {
    return (
        <main className="h-dvh w-full">
            <GrainyBackground />

            <GridPattern 
                width={60}
                height={60}
                x={-1}
                y={-1}
                strokeDasharray={"1 1"}
                className="z-20"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/0 to-background z-30" />

            <Birthdays />
        </main>
    )
}

export default Home
