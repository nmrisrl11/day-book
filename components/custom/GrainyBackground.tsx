const GrainyBackground = () => {
    return (
        <div className="flex-none h-screen w-full fixed top-0 z-10 pointer-events-none" style={{left: "calc(50.00000000000002% - 100% / 2)"}}>
            <div
                className="w-full h-full bg-repeat opacity-[0.05] rounded-none" 
                style={{ backgroundSize: "128px", backgroundImage: `url(/bg-grain.png)`,}}
            />
        </div>
    )
}

export default GrainyBackground
