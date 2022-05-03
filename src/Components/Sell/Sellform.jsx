import React from 'react'
import './sellform.css'

function Sellform() {
  return (
    <>
        <div className="sell-box">
        <form>
            <h2>Post Advertisement</h2>
            
            <div className="form">
            
            <div className="class">
            <label>
                Year* :
                <br /> 
                <input type="text" name="class" />
            </label>
            </div>
            <br />
            

            <div className="name">
            <label>
                Name of the Book* : 
                <br />
                <input type="text" name="name" />
            </label>
            </div>
            <br />

            <div className="name">
            <label>
                Price of the Book* : 
                <br />
                <input type="text" name="name" />
            </label>
            </div>
            <br />
            

            <div className="describe">
            <label>
                Description* : 
                <br />
                <textarea placeholder='Describe about the book'></textarea>
            </label>
            </div>
            <br />
            

            <div className="button">
            <input type="submit" value="Post" />
            </div>
            <br />

            </div>

        </form>
        </div>
        
        
    </>
  )
}

export default Sellform