import { Link } from "react-router-dom";
import './Contact.css';

import map from '/assets/map.png'
import phn from '/assets/phn.png'
import mail from '/assets/mail.png'

function Contact() {
    return (
        <section className="contact">
            {/* FIRST SECTION */}
            <div className="contact-first-section">
                <div className="contact-first-section-inner">
                    <h1>Contact Us</h1>
                    <p>Dedicated customer support for resolving <br /> branding and marketing queries</p>
                </div>
            </div>

            {/* SECOND SECTION */}
            <section className="contact-second-section">
                <div className="contact-second-section-row-one">
                    <p>Want to explore more about our role in shifting your <br /> business online <span>?</span></p>
                    <p>Let's connect for a virtual <br /> coffee today!</p>
                </div>
                <div className="contact-second-section-row-two">
                    <div className="contact-second-section-row-two-card">
                        <div className="explore-image">
                            <img src={map} alt="map image" />
                        </div>
                        <b>Write us at:</b>
                        <p>Pioneer House - 2C/6 New Rothak Road Karol Bagh, Nr. Liberty Cinema New Delhi - 110005</p>
                    </div>
                    <div className="contact-second-section-row-two-card">
                        <div className="explore-image">
                            <img src={phn} alt="call image" />
                        </div>
                        <b>Connect with us at:</b>
                        <p>+91 9508410000</p>
                    </div>
                    <div className="contact-second-section-row-two-card">
                        <div className="explore-image">
                            <img src={mail} alt="email image" />
                        </div>
                        <b>Send us your queries at:</b>
                        <p>chirag@pioneerpublicityindia.com</p>
                    </div>
                </div>
            </section>

            {/* THIRD SECTION */}
            <section className="contact-third-section">
                <div className="contact-third-section-inner">
                    <div className="contact-third-section-row-one">
                        <p>Have something more to convey <span>?</span> </p>
                        <h1>Drop Here!</h1>
                    </div>
                    <div className="contact-third-section-row-two">
                        <div className="contact-form-row-one">
                            <input type="text" placeholder='Name' />
                            <input type="text" placeholder='Number' />
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className="contact-form-row-two">
                            <textarea placeholder='Message'></textarea>
                        </div>
                        <div className="contact-form-row-three">
                            <Link to="">Send Message</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOURTH SECTION */}
            <section className="contact-fourth-section">
                <div className="contact-fourth-section-inner">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13897.126791812178!2d77.70728939999998!3d29.4497835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1765994478640!5m2!1sen!2sin" loading="lazy"></iframe>
                </div>
            </section>

        </section>
    )
}

export default Contact;