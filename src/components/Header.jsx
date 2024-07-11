import headerImage from '../assets/images/header/header.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Social from "./Social.jsx";
const Header = () => {
    return (
        <div className="header section" id="home">
            <div className="header__inner">
                <div className="header__col">
                    <h1 className="header__title">Design Your Dream, </h1>
                    <h1 className="header__subtitle"> Live Your Reality</h1>

                    <div className="header__bottom">
                        <button className="header__button">
                            <span> Scroll down</span>
                            <span>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </span>
                        </button>
                        <p className="header__description">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit posuere, in potenti convallis tellus sem
                            pellentesque penatibus varius cubilia
                        </p>
                    </div>
                    <Social/>
                </div>
                <div className="header__col header__col--img">
                    <img alt="furniture" src={headerImage} />
                </div>
            </div>
        </div>
    );
};

export default Header;
