import aboutImage from "../assets/images/about/about.jpg"

const About = () => {
    return(
        <div className="about section" id="about">
            <h1 className="title about">So, who I am ?</h1>

            <div className="about__container">
                <div className="about__col">
                    <img src={aboutImage} alt="portrait" className="about__image"/>
                </div>
                <div className="about__col">
                    <p  className="about__description about__hallo">Hi, I am Hanah! </p>
                    <p className="about__description">Aliquet tLorem ipsum dolor sit amet consectetur adipiscing, elit a tempor tellus neque curae aptent, vel penatibus arcu tincidunt eu. Lectus vivamus convallis interdum nunc eu enim at turpis felis in cubilia    Lorem ipsum dolor sit amet consectetur adipiscing
                        elit posuere, in potenti convallis tellus sem
                        pellentesque penatibus varius cubilia    Lorem ipsum dolor sit amet consectetur adipiscing
                        elit posuere, in potenti convallis tellus sem
                        pellentesque penatibus varius cubilia, velit cras commodo platea odio ultrices orci augue tempus a cursus perellus nisi litora gravida integer augue sollicitudin
                        condimentum eu, class ad metus vestibulum egestas auctor suscilamcorper. </p>
                    <br></br>
                    <p className="about__description about__description--2">Aliquet tellus nisi litora gravida intege</p>
                </div>
            </div>
        </div>
    )
}

export default About;