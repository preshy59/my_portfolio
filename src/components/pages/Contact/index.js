import React from "react";
import "./style.css";



function Contact() {
    return (
        <div className="contact">
            <h3> CONTACT DETAIL</h3>
            <form className="details">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>

            <div className="socials">
                <ul className="outline">
                    <li> <a href="mailto:okemba50@gmail.com" className="send"><img src= "./assets/images/email.png" className="img-fluid"
                            alt="email"></img></a></li>
                    <li><a href="https://github.com/preshy59" className="send"><img src="./assets/images/github.png" className="img-fluid"
                            alt="GitHub"></img></a></li>
                    <li><a href="https://twitter.com/thebelle_o?t=Mpv2oiGkYta4-WK7NDYjjA&s=09" className="send"><img src="./assets/images/twitter.png" className="img-fluid"
                            alt="twitter"></img></a></li>
                    <li> <a href="https://www.linkedin.com/in/ebele-okemba-76291b201" className="send"><img src="./assets/images/linkdeln.png"className="img-fluid"
                            alt="linkedln"></img></a></li>
                </ul>
                         </div>
        </div>

    );
}

export default Contact;
