// import { ServerConfig } from "../components/Services/Deployed/ServerConfigs"
import { APIs } from "../components/Services/Deployed/APIs"
import { FullStack } from "../components/Services/Deployed/FullStack"
import { ClientApp } from "../components/Services/Deployed/ClientApp"


export const Deploy = () => {
    return (
        <div className="color service-head"
            style={{
                padding: "0rem 0rem 2rem 0"
            }}
        >

            <div className="flex a-nav">

                <a href="/">Home</a>
                <a href="#client-app">Client App</a>
                <a href="#full-stack">Admin App</a>
                <a href="#apiz">API</a>

                <div className="logo a-logo"></div>
                {/* <a href="#serv-conf">Server Configuration</a> */}
                {/* <a href="#opt-d">Optimized Storage</a>
                <a href="#opt-traff">Optimized Traffic</a> */}
            </div>


            <ClientApp />
            <FullStack />
            <APIs />
            {/* <ServerConfig /> */}
            {/* <OptData />
            <OptTraffic /> */}

        </div >
    )
}