
import service1Image from "../assets/images/services/service-1.jpg"
import service2Image from "../assets/images/services/service-2.jpg"
import service3Image from "../assets/images/services/service-3.jpg"
const Services = () => {
    return(
        <div className="services section" id="services">
            <h1 className="title">What can I do for you?</h1>
            <div className="services__inner">
                <div className="service__tile service__bg tile-1">
                    <h2 className="service__title">Full-Service Interior Renovation</h2>
                </div>
                <div className="service__tile service__bg  tile-3">
                    <h2 className="service__title">Customized Interior Design Consultation</h2>
                </div>
                <div className=" service__tile service__img  tile-2">
                    <img className="service__image" src={service1Image} alt="furniture"/>
                </div>
                <div className="service__tile service__img  tile-4">
                    <img className="service__image" src={service2Image} alt="furniture"/>
                </div>
                <div className="service__tile service__bg tile-5">
                    <h2 className="service__title">Virtual Interior Design Service</h2>
                </div>
                <div className=" service__tile service__img  tile-6">
                    <img className="service__image" src={service3Image} alt="furniture"/>
                </div>
            </div>
        </div>
    )
}

export default Services;