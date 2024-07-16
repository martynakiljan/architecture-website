import headerImage from '../assets/images/header/header.jpg';
const Header = () => {
    return (
        <div className="header section" id="home">
            <div className="header__inner">
                <div className="header__col">
                    <h1 className="header__title">Design  <div className="star-beige"> </div> Your Dream, </h1>
                    <h1 className="header__subtitle"> Live Your Reality</h1>
                </div>
                <div className="header__col header__col--img">
                    <img className="header__col--image" alt="furniture" src={headerImage} />
                </div>
            </div>
        </div>
    );
};

export default Header;
