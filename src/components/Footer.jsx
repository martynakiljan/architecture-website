import Social from "./Social.jsx";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__col">
                    <div className="footer__contact">
                        <p className="footer__contact--name">phone</p>
                        <p className="footer__contact--info">+41 767 345 243</p>
                    </div>
                    <div className="footer__copyright">
                        © Architecture H.J
                    </div>
                </div>
                <div className="footer__col">
                    <div className="footer__contact">
                        <p className="footer__contact--name">Email</p>
                        <p className="footer__contact--info">alice.be@gmail.com</p>
                    </div>
                    <div className="footer__social">
                        <Social/>
                    </div>
                </div>
                <div className="footer__col">
                    <div className="footer__contact">
                        <p className="footer__contact--name">Address</p>
                        <p className="footer__contact--info">Zürich, Seestrasse 14</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;