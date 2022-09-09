import React from 'react'

export default function Education () {

    const [education, setEducation] = React.useState({
        school: "",
        major: "",
        class: "",
    })

    console.log(education)
    function handleChange (event) {
        
        const {name, value} = event.target

        setEducation(prevInfo => {
            return{
                ...prevInfo,
                [name]: value,
            }
        })

        //console.log(value)
    }
    function handleSubmit(){

    }
    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                
                <input 
                    type="text" 
                    placeholder="School"
                    onChange={handleChange}
                    name="school"
                />
                
                <input 
                    type="text" 
                    placeholder="Major"
                    className="form--input"
                    onChange={handleChange}
                    name="major"
                />

                <input 
                    type="number" 
                    placeholder="Class of"
                    onChange={handleChange}
                    name="class"
                />

                <button 
                    className="form--submit"
                >
                    Enter Education
                </button>
            </form>
        </div>


    )
    
}