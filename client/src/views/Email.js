import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import emailjs from "emailjs-com"

export const Email = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [sub, setSub] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [thx, setThx] = useState(false);


    function sendEmail(e) {
        e.preventDefault();

        if (email.length < 1 || name.length < 1 || sub.length < 1 || message.length < 1) {
            setError("All fields are required")
            return Error;
        }

        emailjs.sendForm("service_giyv6oa", "template_hoq0ftw", e.target, "IzdB39g7KF5jYu2iA")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setThx(true);
        setError("")
        setNumber("")
        setEmail("")
        setMessage("")
        setName("")
        setSub("")
    }

    const navigate = useNavigate();
    return (
        <div style={{
            backgroundColor: "silver",
            width: "70%",
            margin: "3rem auto",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}>
            {
                thx ? (

                    <div id="conformation-box">
                        <h3 id="closer" onClick={() => setThx(false)}> X </h3>
                        <h4 id="thanks-box">Thank you for you inquiry! Our team will reach out to the email provided. </h4>
                    </div>
                ) : null
            }

            <h3 style={{
                background: "#36dcfb",
                position: "relative",
                top: "0",
                width: "100%",
                height: "5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2rem",
            }}>Contact us</h3>

            <button onClick={() => navigate("/")}>Exit</button>
            {/* <h4>Please send us a message so our team can reach out to you and begin your website design.</h4> */}

            <form onSubmit={sendEmail} className="flex-col"
                style={{
                    alignItems: "left"
                }}>

                <h3>{error}</h3>

                <h5>Subject:</h5>
                {/* <input type="text" placeholder=" Subject" name="subject" /> */}
                <select name="subject" value={sub} onChange={(e) => setSub(e.target.value)}>
                    <option value="Website_for_your_business">Website for your business</option>
                    <option value="Question">Question about software services</option>
                    <option value="speak_to_representative">Request to speak to a representative</option>
                </select>

                <h5>Your name:</h5>
                <input type="text" placeholder=" Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

                <h5>Your phone number:</h5>
                <input type="tel" placeholder=" Phone number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} />

                <h5>Your email:</h5>
                <input type="email" placeholder=" Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <h5>Inquiry:</h5>
                <textarea type="text" placeholder=" Inquiry" name="message" rows="5" cols="22" value={message} onChange={(e) => setMessage(e.target.value)} />

                <button class="button">Send!</button>


            </form>

        </div>
    )
}