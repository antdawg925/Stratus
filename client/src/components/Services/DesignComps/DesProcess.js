import "../../../style/style.css"
export const DesProcess = () => {
    return (
        <div className=" chunk" id="des-process">

            <h1 className="d3-text" > Wire Framing </ h1>

            <div className="flex-bend">

                <div className="p-1">
                    <h1>Client Side</h1>
                    <hr />
                    <p id="wire-frames"></p>
                    <p id="menuEx"></p>
                </div>

                <div className="p-1">
                    <h1>Admin Side</h1>
                    <hr />
                    <p id="orderPg"></p>
                    <p id="emailEx"></p>
                </div>

            </div>

            <div className="l-box border" id="graphics" style={{ margin: "auto" }}>



                <h1>What is wire-framing?</h1>
                <hr />

                <ul style={{
                    width: "100%"
                }}>

                    <li>
                        Wire-frames allow us to create an outline of the website design that captures necessary user features.
                        This process allows us to make immediate adjustments to our development plan without delays.

                    </li>

                    <li>
                        Typically wire-frames are black and white.
                        Color schemes are decided initially and will be available for viewing and adjustments after the prototype is developed.
                    </li>

                    {/* <li>
                        Our team has the ability to work with our clients in the deployment process to meet expectations.
                        There are two options when it comes to who will host and maintain the web application. The client
                        is more than welcome to open and allow Straus access to your Amazon Web Service account, which we
                        will instantiate a virtual machine which will host your web app and bill you directly each month,
                        this option will also leave you responsible for maintenance to your website. Stratus is more than
                        happy to host your application through our business AWS account and we will bill you directly for
                        the deployment at a premium rate. The premium rate will cover limited maintenance to your website
                        as well.
                    </li> */}

                </ul>

            </div>

        </div >
    )
}