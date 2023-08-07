import React, { useState } from 'react'
import OurServices from './OurServices';
import { faJetFighterUp, faMobileScreen, faBarsStaggered, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AllServices = () => {
    const [services, setServices] = useState([
        {
            id: 1,
            logo: <FontAwesomeIcon icon={faJetFighterUp} size="2xl" style={{ color: "#c51b23", }} />,
            title: "Web Development",
            description: "We develope professional websites for our clients.",
        },
        {
            id: 2,
            logo: <FontAwesomeIcon icon={faMobileScreen} size="2xl" style={{ color: "#c71f30", }} />,
            title: "Web Designing",
            description: "We design professional looking websites.",
        },
        {
            id: 3,
            logo: <FontAwesomeIcon icon={faBarsStaggered} size="2xl" style={{ color: "#ca1c24", }} />,
            title: "Web Applications",
            description: "We build professional web applications..",
        },
        {
            id: 4,
            logo: <FontAwesomeIcon icon={faPencil} size="2xl" style={{ color: "#c01b1b", }} />,
            title: "Web Development",
            description: "We develope professional websites for our clients.",
        },
        {
            id: 5,
            logo: <FontAwesomeIcon icon={faBarsStaggered} size="2xl" style={{ color: "#ca1c24", }} />,
            title: "Web Designing",
            description: "We design professional looking websites.",
        },
        {
            id: 6,
            logo: <FontAwesomeIcon icon={faBarsStaggered} size="2xl" style={{ color: "#ca1c24", }} />,
            title: "Web Applications",
            description: "We build professional web applications..",
        },

    ]);
    return (
        <div className='container my-5'>
            <div className=" text-center" >
                <h2 style={{ marginTop: "100px" }}><u style={{ textDecorationColor: "red" }}>Our Services</u></h2>
                <p style={{ marginTop: "24px", fontSize: "13px" }}>
                    We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites.
                </p>
            </div>
            <div className='my-5 row'>
                {services.map((item) => {
                    return <div className="d-flex col-md-4" >
                        <OurServices key={item.id} logo={item.logo} title={item.title} description={item.description} service={item} /></div>
                })} </div>
        </div>
    )
}

export default AllServices