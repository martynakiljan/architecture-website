
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Social = () => {
    return(
        <div className="social">
        <a className="social__icon" href="https://www.google.com"><FontAwesomeIcon icon={faInstagram} /></a>
        <a className="social__icon" href="https://www.google.com"><FontAwesomeIcon icon={faFacebook} /></a>
        <a className="social__icon" href="https://www.google.com"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
    
    )
}

export default Social;
