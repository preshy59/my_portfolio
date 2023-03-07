import React from "react";
import "./style.css";
import Email from "./../../../images/email.png";
import Git from "./../../../images/github.png";
import Twitter from "./../../../images/twitter.png"
import Linkdeln from "./../../../images/linkdeln.png"

function Contact() {
    return (
        <div className="contact">
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


            <div className="row logo">

                <div className="col-lg-2 col-md-6 col-sm-12">


                    <div className="view overlay z-depth-1-half">
                        <a href="mailto:okemba50@gmail.com" className="send"><image src={Email} className="img-fluid"
                            alt="email"></image></a>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-12">


                    <div className="view overlay z-depth-1-half">
                        <a href="https://github.com/preshy59" className="send"><image src={Git} className="img-fluid"
                            alt="GitHub"></image></a>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-12">


                    <div className="view overlay z-depth-1-half">
                        <a href="https://www.linkedin.com/in/ebele-okemba-76291b201" className="send"><image src={Linkdeln} className="img-fluid"
                            alt="linkedln"></image></a>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-12">


                    <div className="view overlay z-depth-1-half">
                        <a href="https://twitter.com/thebelle_o?t=Mpv2oiGkYta4-WK7NDYjjA&s=09" className="send"><image src={Twitter} className="img-fluid"
                            alt="twitter"></image></a>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Contact;
