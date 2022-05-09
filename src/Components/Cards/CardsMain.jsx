import React from 'react';
import { Link } from 'react-router-dom';
import "./CardsMain.css";

const CardsMain = () => {
  return (
    <body>
        <div className="container">
            <main className="grid">

                <article>
                    <div className="text">
                        <h3>FE</h3>
                        <img src={require("../Home/assets/images/1.jpg")} alt='FE'/>
                        <button className='CardsMain-btn'>
                            <Link to="./FE" className='cards-link'>
                                <h6 className='cards-btn-h6'>
                                    View More
                                </h6>
                            </Link>
                        </button>

                    </div>
                </article>

                <article>
                    
                    <div className="text">
                        <h3>SE</h3>
                        <img src={require("../Home/assets/images/12.jpg")} alt='SE'/>
                        <button className='CardsMain-btn'>
                            <Link to="./SE" className='cards-link'>
                                <h6 className='cards-btn-h6'>
                                    View More
                                </h6>
                            </Link>
                        </button>
                    </div>
                </article>

                <article>
                    
                    <div className="text">
                        <h3>TE</h3>
                        <img src={require("../Home/assets/images/13.jpg")} alt='TE'/>
                        <button className='CardsMain-btn'>
                            <Link to="./TE" className='cards-link'>
                                <h6 className='cards-btn-h6' >
                                    View More
                                </h6>
                            </Link>
                        </button>
                    </div>
                </article>

                <article>
                    
                    <div className="text">
                        <h3>BE</h3>
                        <img src={require("../Home/assets/images/14.jpg")} alt='BE'/>
                        <button className='CardsMain-btn'>
                            <Link to="./BE" className='cards-link'>
                                <h6 className='cards-btn-h6'>
                                    View More
                                </h6>
                            </Link>
                        </button>
                    </div>
                </article>

                
            </main>
        </div>
    </body>
  )
}

export default CardsMain