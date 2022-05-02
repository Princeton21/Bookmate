import React from 'react'
import './sellform.css'

function Sellform() {
  return (
    <>
        <div className="sell-box">
        <form>
            <h2>Post Advertisement</h2>
            <label>
                Year:
                <input type="text" name="class" />
            </label>
            <label>
                Name of the Book:
                <input type="text" name="name" />
            </label>
            <label>
                Description:
                
                <textarea placeholder='Describe about the book'></textarea>
            </label>
            <input type="submit" value="Post" />
        </form>
        </div>
        
        
    </>
  )
}

export default Sellform