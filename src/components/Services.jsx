import React, { useEffect, useState } from "react";

import './Services.css';

import services_page_img_1 from '/assets/services_page_img_1.png';
import services_page_img_2 from '/assets/services_page_img_2.png';
import services_page_icon_1 from '/assets/services_page_icon_1.svg';
import services_page_icon_2 from '/assets/services_page_icon_2.svg';
import services_page_icon_3 from '/assets/services_page_icon_3.svg';
import services_page_icon_4 from '/assets/services_page_icon_4.svg';
import services_page_icon_5 from '/assets/services_page_icon_5.svg';
import services_page_icon_6 from '/assets/services_page_icon_6.svg';
import services_page_icon_7 from '/assets/services_page_icon_7.svg';
import meeting from '/assets/meeting.svg';
import cta_icon from '/assets/cta_icon.png';
import client1 from '/assets/client_1.png';
import icon1 from '/assets/testimonial_icon_1.png';
import icon2 from '/assets/testimonial_icon_2.png';

const testimonials = [
    {
        name: "Eva Sawyer",
        job: "CEO, Fashworks",
        image: "https://i.postimg.cc/gJDkZrNn/profile-image-1.png",
        testimonial:
            "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus.",
    },
    {
        name: "Katey Topaz",
        job: "Developer, TechCrew",
        image: "https://i.postimg.cc/8kZzkJ7Y/profile-image-2.png",
        testimonial:
            "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim.",
    },
    {
        name: "Jae Robin",
        job: "UI Designer, Affinity Agency",
        image: "https://i.postimg.cc/90gmLK32/profile-image-3.png",
        testimonial:
            "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus.",
    },
    {
        name: "Nicola Blakely",
        job: "CEO, Zeal Wheels",
        image: "https://i.postimg.cc/6qp6Lwmz/profile-image-4.png",
        testimonial:
            "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
];



function Services() {
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const { testimonial, image, name, job } = testimonials[current];

    return (
        <section className="services">
            {/* FIRST SECTION */}
            <section className="services-first-section">
                <div className="first-section-image-container-one">
                    <img src={services_page_img_1} alt="services page image one" />
                </div>
                <h1>Promoting digital interactions while driving higher returns</h1>
                <div className="first-section-image-container-two">
                    <img src={services_page_img_2} alt="services page image two" />
                </div>
            </section>

            {/* SECOND SECTION */}
            <div className="services-second-section">
                <div className="second-section-row-one">
                    <p>Our Services</p>
                    <h1>Services we Provide</h1>
                </div>
                <div className="second-section-row-two">
                    <div className="section-section-card">
                        <div className="card-image-container">
                            <img src={services_page_icon_1} alt="Social Media Marketing icon" />
                        </div>
                        <h2>Social Media Marketing</h2>
                        <p>Looking forward to educating and engaging your audience...</p>
                    </div>

                    <div className="section-section-card">
                        <div className="card-image-container">
                            <img src={services_page_icon_2} alt="Social Media Marketing icon" />
                        </div>
                        <h2>Content Marketing</h2>
                        <p>Searching for innovative ways to influence your target...</p>
                    </div>

                    <div className="section-section-card">
                        <div className="card-image-container">
                            <img src={services_page_icon_3} alt="Social Media Marketing icon" />
                        </div>
                        <h2>Paid Media</h2>
                        <p>Compensating for your passive sales practices made...</p>
                    </div>

                    <div className="section-section-card">
                        <div className="card-image-container">
                            <img src={services_page_icon_4} alt="Social Media Marketing icon" />
                        </div>
                        <h2>Online PR + Influencer Marketing</h2>
                        <p>Online PR on top of your list? Let our experts do it...</p>
                    </div>

                    <div className="section-section-card">
                        <div className="card-image-container">
                            <img src={services_page_icon_5} alt="Social Media Marketing icon" />
                        </div>
                        <h2>SEO</h2>
                        <p>Whether you're looking for a quick way to make your...</p>
                    </div>

                    <div className="section-section-card">
                        <div className="card-image-container">
                            <img src={services_page_icon_6} alt="Social Media Marketing icon" />
                        </div>
                        <h2>Web & App Development</h2>
                        <p>With digital presence becoming the need of the hour...</p>
                    </div>

                    <div className="section-section-card">
                        <div className="card-image-container">
                            <img src={services_page_icon_7} alt="Social Media Marketing icon" />
                        </div>
                        <h2>Digital Marketing Analytics</h2>
                        <p>Convert user behavior into actionable data with our online analytics...</p>
                    </div>
                </div>
            </div>

            {/* THIRD SECTION */}
            <section className="services-third-wrapper">
                <section className="services-third-section">
                    <div className="services-third-section-first">
                        <p className="services-third-first-text">Get in touch</p>
                        <h1>Wanna discuss on your project<span>?</span></h1>
                        <p className="services-third-first-text-two">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat. Attribution is appreciated and allows contributors to gain exposure.</p>
                        <button>Start Project <span>&#8594;</span></button>
                    </div>

                    <div className="services-third-section-second">
                        <div className="services-third-section-image-container">
                            <img src={meeting} alt="meeting image" />
                        </div>
                    </div>
                </section>

                <div className="third-section-outer-image">
                    <img src={cta_icon} alt="circle image" />
                </div>
            </section>

            {/* FOURTH SECTION */}
            <div id="box">
                <div className="img-con">
                    {testimonials.map((item, index) => (
                        <img key={index} src={item.image} alt="" />
                    ))}
                </div>

                <div className="wrapper">
                    <div className="testimonial-container">
                        <p>{testimonial}</p>
                        <img src={image} alt={name} />
                        <h3>{name}</h3>
                        <h6>{job}</h6>
                    </div>

                    <button id="prev" onClick={prev}>
                        &lt;
                    </button>
                    <button id="next" onClick={next}>
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Services;