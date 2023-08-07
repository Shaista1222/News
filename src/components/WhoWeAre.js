import React from 'react'
import { faEye, faFlag, faBullseye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhoWeAre = () => {
    return (

        <div className="content text-center m-5">
            < div className='text-center'>
                <h2 style={{ marginTop: "90px", }}><u style={{ textDecorationColor: "red", }}>Who we are</u> </h2>
                <p style={{ marginTop: "20px", fontSize: "13px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi qui eaque cum perferendis labore sed veniam! Sed, dicta facilis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum odit omnis impedit. Veritatis dolorem a commodi id debitis accusamus!
                </p>
            </div>
            <div className='d-flex ' style={{ marginTop: "60px" }} >
                < div className='container text-center col-sm-4' >

                    <FontAwesomeIcon icon={faEye} beat style={{ color: "#de1717", width: "77", height: "33" }} />
                    <h5 className='m-2'>Our Vision</h5>
                    <p className='m-2' style={{ fontSize: "13px" }}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum veritatis deleniti aliquam dolorem voluptate dignissimo!
                    </p>

                </div >
                <div className='container text-center col-sm-4'>
                    <FontAwesomeIcon icon={faFlag} beat style={{ color: "#ce222a", width: "77", height: "33" }} />
                    <h5 className='m-2'>Our Mission</h5>
                    <p className='m-2' style={{ fontSize: "13px" }}>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eos officiis pariatur aut doloribus vero?.
                    </p>

                </div >
                <div className='container text-center col-sm-4'>
                    <FontAwesomeIcon icon={faBullseye} fade style={{ color: "#c81919", width: "77", height: "33" }} />
                    <h5 className='m-2'>Our Goal</h5>
                    <p className='m-2' style={{ fontSize: "13px" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque ab quia, eligendi harum culpa voluptatibus laboriosam.   </p>
                </div >
            </div>
        </div>
    )
};
export default WhoWeAre;
