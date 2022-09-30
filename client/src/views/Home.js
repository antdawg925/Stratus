// import { BodyPic } from "../components/Home/BodyPic"
import { Foot } from "../components/Home/Foot"
import { Nav } from "../components/Home/Nav"
import { useNavigate } from "react-router-dom"
import { MissionState } from "../components/Home/MissionState"


export const Home = () => {
    const navigate = useNavigate();

    return (
        <div >

            <Nav />

            <MissionState />

            <div id="nav-div">

                <div className="nav-boxs" onClick={() => navigate("/designs")}>

                    <p className="t-mini" style={{ padding: "3rem 0 2rem 0" }}>Design</p>

                    <p id="design-tag"></p>

                </div>

                <div className="nav-boxs chip" onClick={() => navigate("/deployments")} >

                    <p className="t-mini" style={{ padding: "3rem 0 2rem 0" }}>Deploy</p>

                    <p id="deploy-tag"></p>

                </div>

            </div>

            <h1 style={{
                margin: "10rem auto",
                fontSize: "55px",
                color: "#309bbf",
                lineHeight: "4rem"
            }}>
                "Devoted to development"
            </h1>

            {/* <BodyPic /> */}


            <Foot />

        </div >
    )
}