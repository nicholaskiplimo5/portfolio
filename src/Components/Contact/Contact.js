import React, { useRef } from "react";
import "./contact.css";
import contact_img from "./contact.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q7vj2v7",
        "template_yfaug3k",
        form.current,
        "CJ0aOYnnpRn2H1Sb2"
      )
      .then(
        (result) => {
          console.log(result.text);
         console.log('Message Sent Successfully!')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" container">
      <div className=" row justify-content-center">
        <div className=" col-md-12 mb-3">
          <div className="row justify-content-center">
            <div className=" col-md-6">
              <h3 className="heading mb-4">Let's talk about everything!</h3>
              <p>
                Please lets connect, contact me and i will respond back to you
                as soon as possible
              </p>
              <p>
                <img
                  className="img-fluid"
                  style={{ height: "40vh" }}
                  src={contact_img}
                  alt=""
                />
              </p>
            </div>
            <div className=" col-md-6">
              <p className="mt-3">PLease fill this form!</p>
              <div className="message">
                <div className="danger_message" id="danger">
                  <p>All Fields are Required</p>
                </div>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="mb-2 need_validation"
                noValidate
              >
                <div className="row">
                  <div className=" col-md-12 form-group mb-3">
                    <input
                      type="text"
                      className=" form-control"
                      name="from_name"
                      id="name"
                      placeholder="Enter Your Name..."
                      required
                    />
                    <div className=" valid-feedback">This Looks Good!</div>
                  </div>
                </div>
                <div className="row">
                  <div className=" col-md-12 form-group mb-3">
                    <input
                      type="text"
                      className=" form-control"
                      name="from_email"
                      id="email"
                      placeholder="Enter Email Adress..."
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className=" col-md-12 input-group mb-3 ">
                    <input
                      type="text"
                      className=" form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject..."
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className=" col-md-12 mb-3">
                    <textarea
                      className=" form-control"
                      name="message"
                      rows="7"
                      id="message"
                      placeholder="Write your Message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className=" col-12">
                    <input
                      type="submit"
                      className=" btn btn-primary rounded-0 py-2 px-4"
                      value="Send Message"
                    />
                  </div>
                </div>
                <div className="message">
                  <div className="success_message" id="success">
                    <p>Your Message has been sent successfully. Thank you</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
