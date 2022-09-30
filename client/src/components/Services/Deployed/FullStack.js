
export const FullStack = () => {
    return (
        <div className="chunk" id="full-stack">

            <h1 className="d3-text">Admin Application </h1>

            <div id="fs-des"></div>

            <div className="l-box border" id="graphics" style={{ margin: "auto" }}>


                <ul style={{
                    width: "100%"
                }}>

                    <li>
                        Admin application consist of a client application to host visitors and display information.
                        A database is integrated to allow your business to keep track of client information and organize logistics.
                    </li>

                    <li>
                        Saved client information allows our software to manage tasks like schedule appointments,
                        send appointment reminders, and organize client and business history.
                    </li>

                    {/* <li>
                        Admin applications integrate a database into the program to deepen the connection your
                        business will have with client information by opening the opportunity to save client information, advertise directly to previous clientele, and so much more.
                    </li>

                    <li>
                        The customization benefits of full stack applications include the opportunity to dynamically load content as client history builds up and be able to sift through that information to.
                    </li> */}


                </ul>


            </div>

            {/* <div className="b-box border p-1">

                <p>
                    This consists of a client side interface to allow access to the user features we design.
                    A RESTapi is set up to input information into our database and retrieve information as well.
                    Our team of developers has an arsenal of different frameworks, databases, and servers to
                    complete your project in the most efficient manner. Every project is uniquely designed to
                    ensure we exceed our clients expectations.
                </p>

            </div> */}

        </div >
    )
}