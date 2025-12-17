import { Link } from 'react-router';
import './About.css';

import { useParallax } from "../hooks/useParallax";
import { useSectionParallax } from "../hooks/useSectionParallax";


import aboutImageOne from '/assets/about_img_1.png'
import aboutImageTwo from '/assets/about_img_2.png'
import aboutImageThree from '/assets/about_img_3.png'
import team from '/assets/team.svg'
import cta_icon from '/assets/cta_icon.png'
import about_us_img_1_shape from '/assets/about_us_img_1_shape.png'
import video_bg_1 from '/assets/video_bg_1.png'

function About() {
    const { ref, offset } = useSectionParallax({
        speed: 0.8,
        maxOffset: 40,
        smoothness: 0.04
    });



    return (
        <section className="about">
            {/* FIRST SECTION */}
            <section className="about-first-section">
                <div className="about-section-column-one" ref={ref}>
                    <div className="about-image-one-container" style={{ transform: `translateY(${-offset}px)` }}>
                        <img src={aboutImageOne} alt="about first image" />
                    </div>
                    <div className="about-image-two-container">
                        <img src={aboutImageTwo} alt="about second image" style={{ transform: `translateY(${offset}px)` }} />
                    </div>
                    <div className="about-image-three-container" style={{ transform: `translateY(${offset * 0.5}px)` }}>
                        <img src={aboutImageThree} alt="about third image" />
                    </div>
                </div>
                <div className="section-first-column-two">
                    <p className='about-us-one'>About us</p>
                    <h1>A one-stop-shop for all your digital presence needs</h1>
                    <p>Pioneer DigiDrive is the business vertical of Pioneer Publicity Corporation which deals in branding, advertising, and marketing. Being an integrated digital marketing agency, the firm is Pioneer's initiative to bring all the essential online visibility solutions at one platform to help businesses thrive by ensuring better brand reach and organic growth. We believe in a customer-first approach and don't mind going that extra mile to meet our clients' expectations who trust us for our dedication and transparency.</p>
                    <Link to="/contact">Get in touch</Link>
                </div>
            </section>

            {/* SECOND SECTION */}
            <section className="about-second-wrapper">
                <section className="about-second-section">
                    <div className="about-second-section-first">
                        <p className="about-second-first-text">Get to know us</p>
                        <h2>Wanna know more about us <span>?</span></h2>
                        <p className="about-second-first-text-two">Our team is determined to serve our clients with digital branding and marketing solutions developed and customized as per their business needs which has been the key to building and keeping the trust earned over 65 years. Being a prominent name in the OOH advertising space, we endeavor to bring the same success to our new as well as existing clients in this digital era by catering to all their digital needs under one roof. <br /> <br /> With a quest for modern approaches to help clients drive more revenue, DigiDrive is here to bring innovation to your existing marketing strategies, making your business future-ready and driving you towards digital.</p>
                        <button>Meet Our Team <span>&#8594;</span></button>
                    </div>

                    <div className="about-second-section-second">
                        <div className="about-second-section-image-container">
                            <img src={team} alt="team image" />
                        </div>
                    </div>
                </section>

                <div className="second-section-outer-image">
                    <img src={cta_icon} alt="circle image" />
                </div>
            </section>


            {/* THIRD SECTION */}
            <section className="about-third-section">
                <div className="about-third-inner">
                    <img src={about_us_img_1_shape} alt="decorative shape" className="about-third-shape"/>
                    <div className="about-video-box">
                        <img src={video_bg_1} alt="video background" />
                        <a href="https://youtu.be/L3pk_TBkihU?si=LwmfbmyajUSS1fLe" className="video-play-btn" target="_blank" rel="noopener noreferrer">▶</a>
                    </div>
                    <span className="about-video-circle"></span>
                </div>
            </section>

        </section>
    )
}

export default About;