import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option"
import bannerImg from '@/images/banner-girl-1.png';
// import './contact.css'
export default function ContactUs() {

  return (
    <main className="content">
      <div className="featured">
        <div className="banner">
          <div className="banner-desc">
            <h1>Contact Us</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact US</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp" style={{ display: "flex" }}>
          <Col lg="5" className="mb-5" style={{ flex: 1 }}>
            <h2 className="color_sec py-4">Get in touch</h2>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center" style={{ flex: 1 }}>
            <form className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                    style={{ width: '100%' }}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                    style={{ width: '100%' }}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
                style={{ width: '100%' }}
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button
                    className={`button button-small`}
                    type="submit"
                  >
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </main>
  );
}