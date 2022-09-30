import { useNavigate } from "react-router-dom"

export const Foot = () => {

    const navigate = useNavigate();

    return (
        <div id="foot">

            <button onClick={() => navigate("/email")}>contact us!</button>

            <div className="flex">

                <h4>production@stratussoftwaresolutions.com</h4>

                <div id="LI" onClick={() => window.open("https://www.linkedin.com/in/stratusSS/")}></div>

                <div id="IG" onClick={() => window.open("https://www.instagram.com/stratus_software_solutions/")}></div>

            </div>

        </div>
    )
}