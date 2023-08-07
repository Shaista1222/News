import React from 'react'
import us from '../images/us.jpg'
import uss from '../images/uss.jpg'
import lapi from '../images/lapi.jpg'
import ImageWithTextOverlay from './ImageWithTextOverlay'
import { MDBCarousel, MDBBtn } from 'mdb-react-ui-kit';

const Slidder = () => {
    return (
        <MDBCarousel>
            <div>
                <div >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <ImageWithTextOverlay imageUrl={lapi} text={
                                <span className='container'>
                                    <h1>Lorem ipsum dolor amet adipisicing.</h1>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, amet.</p>
                                    <MDBBtn className='me-1' color='danger'>
                                        Learn More
                                    </MDBBtn>
                                    <MDBBtn className='me-1' color='dark'>
                                        Get Started
                                    </MDBBtn>
                                </span>
                            } />
                        </div>
                        <div className="carousel-item">
                            <ImageWithTextOverlay imageUrl={us} text={<div>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, saepe.</p>
                                <MDBBtn className='me-1' color='danger'>
                                    Learn More
                                </MDBBtn>
                                <MDBBtn className='me-1' color='dark'>
                                    Get Started
                                </MDBBtn>
                            </div>
                            } />
                        </div>
                        <div className="carousel-item">
                            <ImageWithTextOverlay imageUrl={uss} text={<div>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, rerum.</p>
                                <MDBBtn className='me-1' color='danger'>
                                    Learn More
                                </MDBBtn>
                                <MDBBtn className='me-1' color='dark'>
                                    Get Started
                                </MDBBtn>
                            </div>
                            } />
                        </div>
                    </div>
                </div>
            </div>
        </MDBCarousel>
    );
}

export default Slidder;
