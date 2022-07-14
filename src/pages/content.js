import React from "react";
import {Col, Row} from "react-bootstrap";

function Content() {

    return (
        <div className="content">
            <h1 className="overview">Overview</h1>
            <Row className="content1">
                <Col lg={8}>
                    <div className="box d-flex">
                        <div className="box-balance">
                            <div className="box-description">
                                <i className='bx bx-wallet'></i>
                                <span>Total Balance</span>
                                <p>N566,300.84</p>
                            </div>
                        </div>

                        <div className="box-balance">
                            <div className="box-description">
                                <i className='bx bx-money'></i>
                                <span>Budget Balance</span>
                                <p>N250,547.34</p>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col lg={4}>
                    <div className="right-content">
                            <p className="goals">Your Goals  <a href="#">Add new</a></p>
                             <div className="rt1">
                                 <div className="bar">
                                     <i className='bx bx-building-house'></i><span className="pdt">New car<span className="percent">20%</span></span>
                                     <div className="progress">
                                         <div className="progress-bar bg-success" role="progressbar"
                                              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                     </div>
                                     <span className="price-range">N5,900 of N35,000</span>
                                 </div>
                                 <div className="bar">
                                     <i className='bx bxs-car'></i><span className="pdt">Rent fee<span className="percent">20%</span></span>

                                     <div className="progress">
                                       <div className="progress-bar bg-success" role="progressbar"
                                          aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                       </div>
                                     </div>
                                     <span className="price-range">N5,900 of N35,000</span>
                                 </div>
                                 <div className="bar">
                                     <i className='bx bx-user'></i><span className="pdt">Family<span className="percent">20%</span></span>

                                     <div className="progress">
                                         <div className="progress-bar bg-success" role="progressbar"
                                              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                         </div>
                                     </div>
                                     <span className="price-range">N5,900 of N35,000</span>
                                 </div>
                             </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
export default Content;
