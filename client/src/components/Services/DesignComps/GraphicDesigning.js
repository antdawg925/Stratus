
export const GraphicDesigning = () => {

    return (
        <div className="chunk">
            <h1 className="d3-text">Graphics!</h1>

            <div className="l-box border" id="graphics" >

                <ul style={{
                    width: "100%"
                }}>

                    <li>
                        We encourage our clients to provide their logos, but it is not required to begin a project.
                    </li>

                    <li>
                        An arrange of icon ideas to match your logo and overall website appearance will be provided to
                        ensure our clients approve of the colorscheme.
                    </li>

                </ul>

            </div>

            <iframe src="/logos" title="logo examples" width={"90%"} height={"210rem"} style={{ margin: "3rem 0" }}></iframe>

        </div >
    )
}