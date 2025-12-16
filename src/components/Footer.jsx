import './footer.css';
import logo from '/assets/logo_2.png';

function Footer() {
    return (
        <footer>
            <div className="footer-section">
                <div className="footer-first-row">
                    <div className="footer-first-row-one footer-one">
                        <div className="footer-top-top">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="footer-top-bottom">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cumque quibusdam quas officia ab. Qui cumque pariatur est fuga tempora?</p>
                        </div>
                    </div>

                    <div className="footer-first-row-two footer-one">
                        <div className="footer-top-top"><h1>Contact Us</h1></div>
                        <div className="footer-top-bottom">
                            <a href="">Website :  www.digidrive.com</a>
                            <a href="">Email :  chirag@pioneerpublicityindia.com</a>
                            <a href="">Phone :  +91 95084 00000</a>
                        </div>
                    </div>

                    <div className="footer-first-row-three footer-one">
                        <div className="footer-top-top"><h1>Visit Us</h1></div>
                        <div className="footer-top-bottom">
                            <a href="">Pioneer House - 2C/6 New Rothak Road Karol Bagh, Nr. Liberty Cinema New Delhi - 110005</a>
                        </div>
                    </div>

                    <div className="footer-first-row-four footer-one">
                        <div className="footer-top-top"><h1>On Social</h1></div>
                        <div className="footer-top-bottom">
                            <a href="">Facebook</a>
                            <a href="">Twitter</a>
                            <a href="">Youtube</a>
                            <a href="">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="footer-second-row">
                    <p>&copy; Copyright 2021 DigiDrive</p>
                    <div className="social-icons">
                        <a href="#"><i className="fa-brands fa-dribbble"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;