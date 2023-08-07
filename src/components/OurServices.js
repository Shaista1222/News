import React from 'react'
const OurServices = (service) => {
    return (
        <>
            <div>
                {service.logo}
            </div>
            <div className='mx-4'>
                <h5>{service.title}</h5>
                <p style={{ fontSize: "13px" }}>{service.description}</p>
            </div>
        </>

    )
}
export default OurServices