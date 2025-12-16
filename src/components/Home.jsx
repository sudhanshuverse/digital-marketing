import { useParallax } from "../hooks/useParallax";
import { useSectionParallax } from "../hooks/useSectionParallax";
import "./Home.css";

import Footer from "./Footer";

import arrowDown from "/assets/arrow_down.svg";
import heroPageImage from "/assets/hero-page-image.png";
import heroImageFirst from "/assets/animation_shape_1.png";
import heroImageSecond from "/assets/animation_shape_2.png";
import heroImageThird from "/assets/animation_shape_3.png";
import portfolioImage1 from "/assets/portfolio_1.png";
import portfolioImage2 from "/assets/portfolio_2.png";
import portfolioImage3 from "/assets/portfolio_3.png";
import portfolioImage4 from "/assets/portfolio_4.png";
import portfolioImage5 from "/assets/portfolio_5.png";
import portfolioImage6 from "/assets/portfolio_6.png";
import demo_1 from "/assets/demo_1.png";
import demo_2 from "/assets/demo_2.png";
import blogImage1 from "/assets/blog_1.png";
import blogImage2 from "/assets/blog_2.png";
import blogImage3 from "/assets/blog_3.png";
import blogImage4 from "/assets/blog_4.png";
import blogImage5 from "/assets/blog_5.png";
import blogImage6 from "/assets/blog_6.png";

import blogPost1 from "/assets/blog_post_1.png";
import blogPost2 from "/assets/blog_post_2.png";
import blogPost3 from "/assets/blog_post_3.png";
import blogPost4 from "/assets/blog_post_4.png";
import blogPost5 from "/assets/blog_post_5.png";
import blogPost6 from "/assets/blog_post_6.png";
import blogPost7 from "/assets/blog_post_7.png";
import blogPost8 from "/assets/blog_post_8.png";
import blogPost9 from "/assets/blog_post_9.png";


function Home() {
    // HERO parallax
    const heroIconFast = useParallax({ speed: 0.12, min: -60, max: 60 });
    const heroIconSlow = useParallax({ speed: 0.06, min: -40, max: 40 });
    const heroIconMid = useParallax({ speed: 0.08, min: -50, max: 50 });

    const demoParallax = useSectionParallax({
        speed: 1,
        maxOffset: 60,
        smoothness: 0.05 // tweak this
    });

    return (
        <>
            <main>
                {/* HERO SECTION */}
                <section className="hero-page">
                    <div className="hero-left">
                        <h1>Pioneer digital marketing <br /> agency</h1>
                        <p>Based In India.</p>
                        <a href="">Let's Work Together</a>
                        <div className="hero-first-icon-container" style={{ transform: `translateY(${heroIconFast}px)` }}>
                            <img src={heroImageFirst} alt="first icon" />
                        </div>
                        <div className="hero-second-icon-container" style={{ transform: `translateY(${heroIconSlow}px)` }}>
                            <img src={heroImageSecond} alt="second icon" />
                        </div>
                    </div>

                    <div className="hero-right">
                        <div className="hero-image-container">
                            <img src={heroPageImage} alt="hero" />
                            <div className="hero-third-icon-container" style={{ transform: `translateY(${heroIconMid}px)` }}>
                                <img src={heroImageThird} alt="third icon" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECOND SECTION */}
                <section className="second-section">
                    <div className="arrow-container bounce">
                        <img src={arrowDown} alt="down arrow" />
                    </div>
                </section>

                {/* THIRD SECTION */}
                <section className="third-section">
                    <div className="portfolio-container-outer-container">
                        <div className="portfolio-container">
                            <a href=""> <img src={portfolioImage1} alt="Portfolio image one" />
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

                {/* FOURTH SECTION */}
                <section className="fourth-section">
                    <div className="fourth-section-container">
                        <h1>Who We Are</h1>
                        <p> Pioneer DigiDrive is the business vertical of Pioneer Publicity Corporation dealing in digital branding and marketing.</p>
                        <button>
                            <span>Read More</span>
                            <span className="arrow">&#8594;</span>
                        </button>
                    </div>
                </section>

                {/* FIFTH SECTION */}
                <section className="fifth-section" ref={demoParallax.ref}>
                    <div className="fifth-section-container">
                        <h1>What We Do</h1>
                        <p> Our digital solutions are focused on enabling brands to have an edge over their competition.</p>
                        <button>Take a Demo</button>
                        <img src={demo_1} className="demo-image-1" alt="demo 1" style={{ transform: `translateY(${demoParallax.offset}px)` }} />
                        <img src={demo_2} className="demo-image-2" alt="demo 2" style={{ transform: `translateY(${demoParallax.offset}px)` }} />
                    </div>
                </section>

                {/* SIXTH SECTION */}
                <section className="sixth-section">
                    <div className="sixth-section-first-row">
                        <p>Our Strength</p>
                        <h1>Why us ?</h1>
                    </div>
                    <div className="sixth-section-second-row">
                        <div className="sixth-section-inner-first">
                            <div className="sixth-image-container">
                                <img src={blogImage1} alt="why us image 1" />
                            </div>
                            <div className="sixth-text-container six-one">
                                <p>Digital Marketing</p>
                                <h2>One-stop-shop for all digital marketing needs</h2>
                            </div>
                        </div>

                        <div className="sixth-section-inner-second">
                            <button>
                                <span>Read More</span>
                                <span>&#8594;</span>
                            </button>
                        </div>
                    </div>
                    <div className="sixth-section-second-row">
                        <div className="sixth-section-inner-first">
                            <div className="sixth-image-container">
                                <img src={blogImage2} alt="why us image 1" />
                            </div>
                            <div className="sixth-text-container six-two">
                                <p>Experience</p>
                                <h2>65 years of trust & service</h2>
                            </div>
                        </div>
                        <div className="sixth-section-inner-second">
                            <button>
                                <span>Read More</span>
                                <span>&#8594;</span>
                            </button>
                        </div>
                    </div>
                    <div className="sixth-section-second-row">
                        <div className="sixth-section-inner-first">
                            <div className="sixth-image-container">
                                <img src={blogImage3} alt="why us image 1" />
                            </div>
                            <div className="sixth-text-container six-three">
                                <p>Digital Presence</p>
                                <h2>Improved digital presence & brand awareness.</h2>
                            </div>
                        </div>
                        <div className="sixth-section-inner-second">
                            <button>
                                <span>Read More</span>
                                <span>&#8594;</span>
                            </button>
                        </div>
                    </div>
                    <div className="sixth-section-second-row">
                        <div className="sixth-section-inner-first">
                            <div className="sixth-image-container">
                                <img src={blogImage4} alt="why us image 1" />
                            </div>
                            <div className="sixth-text-container six-four">
                                <p>Conversion</p>
                                <h2>Higher conversion rates</h2>
                            </div>
                        </div>
                        <div className="sixth-section-inner-second">
                            <button>
                                <span>Read More</span>
                                <span>&#8594;</span>
                            </button>
                        </div>
                    </div>
                    <div className="sixth-section-second-row">
                        <div className="sixth-section-inner-first">
                            <div className="sixth-image-container">
                                <img src={blogImage5} alt="why us image 1" />
                            </div>
                            <div className="sixth-text-container six-five">
                                <p>Cost</p>
                                <h2>Cost-effective solutions</h2>
                            </div>
                        </div>
                        <div className="sixth-section-inner-second">
                            <button>
                                <span>Read More</span>
                                <span>&#8594;</span>
                            </button>
                        </div>
                    </div>
                    <div className="sixth-section-second-row">
                        <div className="sixth-section-inner-first">
                            <div className="sixth-image-container">
                                <img src={blogImage6} alt="why us image 1" />
                            </div>
                            <div className="sixth-text-container six-six">
                                <p>Customer Support</p>
                                <h2>Relentless customer support</h2>
                            </div>
                        </div>
                        <div className="sixth-section-inner-second">
                            <button>
                                <span>Read More</span>
                                <span>&#8594;</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* SEVENTH SECTION */}
                <section className="seventh-section">
                    <div className="seventh-inner">
                        <h1>Join our Instagram <br /> Community</h1>
                        <p>Latest Posts</p>
                    </div>
                </section>

                {/* EIGHT SECTION */}
                <section className="eight-section">
                    <div className="eight-section-inner">
                        <div className="eight-inner-card">
                            <div className="eight-image-container">
                                <img src={blogPost1} alt="blog post image 2" />
                            </div>
                            <div className="eight-card-likes">
                                <span><i className="fa-solid fa-user"></i> By Justin Trada</span>
                                <span><i className="fa-solid fa-comment"></i>  03 Comments</span>
                            </div>
                            <div className="eight-card-text">
                                <h2>Doloremque velit sapien labore eius lopren itna</h2>
                            </div>
                        </div>

                        <div className="eight-inner-card">
                            <div className="eight-image-container">
                                <img src={blogPost2} alt="blog post image 2" />
                            </div>
                            <div className="eight-card-likes">
                                <span><i className="fa-solid fa-user"></i> By Justin Trada</span>
                                <span><i className="fa-solid fa-comment"></i> 03 Comments</span>
                            </div>
                            <div className="eight-card-text">
                                <h2>Officiis similiq repell partu arie error earum conubia</h2>
                            </div>
                        </div>

                        <div className="eight-inner-card">
                            <div className="eight-image-container">
                                <img src={blogPost3} alt="blog post image 3" />
                            </div>
                            <div className="eight-card-likes">
                                <span><i className="fa-solid fa-user"></i> By Justin Trada</span>
                                <span><i className="fa-solid fa-comment"></i> 03 Comments</span>
                            </div>
                            <div className="eight-card-text">
                                <h2>Morbi asperiores nascetur ligula cras blanditiis</h2>
                            </div>
                        </div>

                        <div className="eight-inner-card">
                            <div className="eight-image-container">
                                <img src={blogPost4} alt="blog post image 4" />
                            </div>
                            <div className="eight-card-likes">
                                <span><i className="fa-solid fa-user"></i> By Justin Trada</span>
                                <span><i className="fa-solid fa-comment"></i> 03 Comments</span>
                            </div>
                            <div className="eight-card-text">
                                <h2>Why I say old chap that is spiffing jolly good a load</h2>
                            </div>
                        </div>

                        <div className="eight-inner-card">
                            <div className="eight-image-container">
                                <img src={blogPost5} alt="blog post image 5" />
                            </div>
                            <div className="eight-card-likes">
                                <span><i className="fa-solid fa-user"></i> By Justin Trada</span>
                                <span><i className="fa-solid fa-comment"></i> 03 Comments</span>
                            </div>
                            <div className="eight-card-text">
                                <h2>Why I say old chap that is spiffing jolly good a load</h2>
                            </div>
                        </div>

                        <div className="eight-inner-card">
                            <div className="eight-image-container">
                                <img src={blogPost6} alt="blog post image 6" />
                            </div>
                            <div className="eight-card-likes">
                                <span><i className="fa-solid fa-user"></i> By Justin Trada</span>
                                <span><i className="fa-solid fa-comment"></i> 03 Comments</span>
                            </div>
                            <div className="eight-card-text">
                                <h2>Doloremque velit sapien labore eius lopren itna</h2>
                            </div>
                        </div>

                        <div className="eight-inner-card">
                            <div className="eight-image-container">
                                <img src={blogPost7} alt="blog post image 7" />
                            </div>
                            <div className="eight-card-likes">
                                <span><i className="fa-solid fa-user"></i> By Justin Trada</span>
                                <span><i className="fa-solid fa-comment"></i> 03 Comments</span>
                            </div>
                            <div className="eight-card-text">
                                <h2>Pay your bill to Phone to Pay Payments Bank in the world</h2>
                            </div>
                        </div>

                        <div className="eight-inner-card">
                            <div className="eight-image-container">
                                <img src={blogPost8} alt="" />
                            </div>
                            <div className="eight-card-likes">
                                <span><i className="fa-solid fa-user"></i> By Justin Trada</span>
                                <span><i className="fa-solid fa-comment"></i> 03 Comments</span>
                            </div>
                            <div className="eight-card-text">
                                <h2>The new camera king is coming will rock the town hall!</h2>
                            </div>
                        </div>

                        <div className="eight-inner-card">
                            <div className="eight-image-container">
                                <img src={blogPost9} alt="" />
                            </div>
                            <div className="eight-card-likes">
                                <span><i className="fa-solid fa-user"></i> By Justin Trada</span>
                                <span><i className="fa-solid fa-comment"></i> 03 Comments</span>
                            </div>
                            <div className="eight-card-text">
                                <h2>Doloremque velit sapien labore eius lopren itna</h2>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NINETH SECTION */}
                <section className="nine-section">
                    <div className="inner-nine-section">
                        <p>Let's get started</p>
                        <h1>All set to kickstart your digital Journey <span>?</span></h1>
                        <button>Get Started Today</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
