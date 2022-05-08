import React from 'react'
import "./CardsMain.css"
const CardsMain = () => {
  return (
    <body>
        <div className="container">
            <main className="grid">

                <article>
                    <div className="text">
                        <h3>FE</h3>
                        <img src={require("../Home/assets/images/1.jpg")} alt='FE'/>
                        <button >View more</button>
                    </div>
                </article>

                <article>
                    
                    <div className="text">
                        <h3>SE</h3>
                        <img src={require("../Home/assets/images/12.jpg")} alt='SE'/>
                        <button>View More</button>
                    </div>
                </article>

                <article>
                    
                    <div className="text">
                        <h3>TE</h3>
                        <img src={require("../Home/assets/images/13.jpg")} alt='TE'/>
                        <button>View More</button>
                    </div>
                </article>

                <article>
                    
                    <div className="text">
                        <h3>BE</h3>
                        <img src={require("../Home/assets/images/14.jpg")} alt='BE'/>
                        <button>View More</button>
                    </div>
                </article>

                
            </main>
        </div>
    </body>
  )
}

export default CardsMain