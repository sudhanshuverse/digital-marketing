import './Home.css';

import heroPageImage from '/assets/hero-page-image.png'
import heroImageFirst from '/assets/animation_shape_1.png'
import heroImageSecond from '/assets/animation_shape_2.png'
import heroImageThird from '/assets/animation_shape_3.png'

function Home() {
    return (
        <main>
            <section className="hero-page">
                <div className="hero-left">
                    <h1>Pioneer digital marketing <br /> agency</h1>
                    <p>Based In India.</p>
                    <a href=''>Let's Work Together</a>
                    <div className="hero-first-icon-container">
                        <img src={heroImageFirst} alt="first icon" />
                    </div>
                    <div className="hero-second-icon-container">
                        <img src={heroImageSecond} alt="second icon" />
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-image-container">
                        <img src={heroPageImage} alt="hero first image" />
                        <div className="hero-third-icon-container">
                            <img src={heroImageThird} alt="third icon" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;