import { useEffect, useState } from "react";

import './Home.css';

import arrowDown from '/assets/arrow_down.svg'
import heroPageImage from '/assets/hero-page-image.png'
import heroImageFirst from '/assets/animation_shape_1.png'
import heroImageSecond from '/assets/animation_shape_2.png'
import heroImageThird from '/assets/animation_shape_3.png'
import portfolioImage1 from '/assets/portfolio_1.png'
import portfolioImage2 from '/assets/portfolio_2.png'
import portfolioImage3 from '/assets/portfolio_3.png'
import portfolioImage4 from '/assets/portfolio_4.png'
import portfolioImage5 from '/assets/portfolio_5.png'
import portfolioImage6 from '/assets/portfolio_6.png'

function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <main>
            {/* HERO PAGE */}
            <section className="hero-page">
                <div className="hero-left">
                    <h1>Pioneer digital marketing <br /> agency</h1>
                    <p>Based In India.</p>
                    <a href=''>Let's Work Together</a>
                    <div className="hero-first-icon-container" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                        <img src={heroImageFirst} alt="first icon" />
                    </div>
                    <div className="hero-second-icon-container" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
                        <img src={heroImageSecond} alt="second icon" />
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-image-container">
                        <img src={heroPageImage} alt="hero first image" />
                        <div className="hero-third-icon-container" style={{ transform: `translateY(${scrollY * 0.08}px)` }}>
                            <img src={heroImageThird} alt="third icon" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECOND PAGE */}
            <section className="second-section">
                <div className="arrow-container bounce">
                    <img src={arrowDown} alt="down arrow image" />
                </div>
            </section>

            {/* THIRD SECTION */}
            <section className="third-section">
                <div className="portfolio-container-outer-container">
                    <div className="portfolio-container">
                        <a href="">
                            <img src={portfolioImage1} alt="Portfolio image one" />
                            <div className="overlay">
                                <div className="overlay">
                                    <h1><span>Driving you towards digital</span></h1>
                                    <p><span>Digital Media</span></p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="portfolio-container-outer-container">
                    <div className="portfolio-container">
                        <a href="">
                            <img src={portfolioImage2} alt="Portfolio image two" />
                            <div className="overlay">
                                <div className="overlay">
                                    <h1><span>International-standard practices ensuring faster ROI</span></h1>
                                    <p><span>Return on Investment</span></p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="portfolio-container-outer-container">
                    <div className="portfolio-container">
                        <a href="">
                            <img src={portfolioImage3} alt="Portfolio image three" />
                            <div className="overlay">
                                <div className="overlay">
                                    <h1><span>Online PR to best position your brand</span></h1>
                                    <p><span>Online Public Relations</span></p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="portfolio-container-outer-container">
                    <div className="portfolio-container">
                        <a href="">
                            <img src={portfolioImage4} alt="Portfolio image four" />
                            <div className="overlay">
                                <h1><span>Boosting digital presence through SEO</span></h1>
                                <p><span>SEO Optimization</span></p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="portfolio-container-outer-container">
                    <div className="portfolio-container">
                        <a href="">
                            <img src={portfolioImage5} alt="Portfolio image five" />
                            <div className="overlay">
                                <div className="overlay">
                                    <h1><span>Mobile & web apps for flawless digital interactions</span></h1>
                                    <p><span>Software Development</span></p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="portfolio-container-outer-container">
                    <div className="portfolio-container">
                        <a href="">
                            <img src={portfolioImage6} alt="Portfolio image six" />
                            <div className="overlay">
                                <div className="overlay">
                                    <h1><span>Digital Analytics to track performance & consumer behavior</span></h1>
                                    <p><span>Digital Analytics</span></p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* FOURTH PAGE */}
            
        </main>
    )
}

export default Home;