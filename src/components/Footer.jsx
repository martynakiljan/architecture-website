import Social from "./Social.jsx";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-star star-beige"></div>
                <div className="footer__inner">
                    <div className="footer__col">
                        <div className="footer__contact">
                            <p className="footer__contact--name">Phone</p>
                            <p className="footer__contact--info">+41 767 345 243</p>
                        </div>
                        <div className="footer__copyright footer__copyright--mobile">
                            © Architecture H.J
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__contact">
                            <p className="footer__contact--name">Email</p>
                            <a className="footer__contact--info" href="mailto:someone@example.com">alice.be@gmail.com</a>
                        </div>
                        <div className="footer__social  footer__copyright--mobile">
                            <Social/>
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__contact">
                            <p className="footer__contact--name">Address</p>
                            <p className="footer__contact--info">Zürich, Seestrasse 14</p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__copyright--desktop">
                            <Social/>
                            <p className="footer__copyright"> © Architecture H.J </p>
                        </div>
                    </div>
                </div>
        </footer>
)
}

export default Footer;