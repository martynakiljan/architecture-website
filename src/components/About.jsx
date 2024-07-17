import aboutImage from "../assets/images/about/about.jpg"

const About = () => {
    return(
        <div className="about section" id="about">
            <h1 className="title about">So, who I am ?</h1>

            <div className="about__container">
                <div className="about__col">
                    <img src={aboutImage} alt="portrait" className="about__image"/>
                </div>
                <div className="about__col about__col--bg">
                    <div className="about__star-container">
                        <div className="about__star star-dark"></div>
                    </div>
                    <p className="about__description about__hallo">Hi, I am Hanah! </p>
                    <p className="about__description">I am a 35-year-old architect specializing in creating innovative and sustainable designs. Architecture is not just my profession; it is my passion. I continuously strive to learn and improve my skills to stay at the forefront of the industry. I hold a degree in Architecture, and my commitment to excellence drives me to deliver exceptional projects for my clients. </p>
                    <br></br>
                    <p className="about__description about__description--2"> I invite you to collaborate with me!</p>
                </div>
            </div>
        </div>
    )
}

export default About;