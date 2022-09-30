import { Designed } from "../components/Services/DesignComps/Designed"
import { DesProcess } from "../components/Services/DesignComps/DesProcess"
// import { GraphicDesigning } from "../components/Services/DesignComps/GraphicDesigning"

export const Design = () => {
    return (
        <div className=" service-head"
            style={{
                padding: "0rem 0rem 2rem 0"
            }}
        >

            <div className="flex a-nav ">

                <div className="logo a-logo"></div>

                <a href="/">Home</a>
                <a href="#des-process">Wire Framing</a>
                <a href="#designs">Designs</a>
                {/* <a href="#graphics">Graphics</a> */}


            </div>

            <DesProcess />

            <Designed />

            {/* <GraphicDesigning /> */}

        </div>
    )
}