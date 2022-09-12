import React from 'react'

export default function Experience () {

    const [experience, setExperience] = React.useState({
        company: "",
        title: "",
        tasks: "",
        startDate: "",
        endDate: "",
    })

    console.log(experience)
    function handleChange (event) {
        
        const {name, value} = event.target

        setExperience(prevInfo => {
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
                    placeholder="Company"
                    onChange={handleChange}
                    name="company"
                />
                
                <input 
                    type="text" 
                    placeholder="Title"
                    className="form--input"
                    onChange={handleChange}
                    name="title"
                />

                <input 
                    type="text" 
                    placeholder="Tasks"
                    className="form--input"
                    onChange={handleChange}
                    name="tasks"
                />

                <input 
                    type="date" 
                    placeholder="Start Date"
                    onChange={handleChange}
                    name="startDate"
                />

                <input 
                    type="date" 
                    placeholder="End Date"
                    onChange={handleChange}
                    name="endDate"
                />

                <button 
                    className="form--submit"
                >
                    Enter Experience
                </button>
            </form>
            <div className='formRender'>
                <h3>Company: {experience.company}</h3>
                <h3>Title: {experience.title}</h3>
                <h3>Tasks: {experience.tasks}</h3>
                <h3>Start date: {experience.startDate}</h3>
                <h3>End date: {experience.endDate}</h3>
            </div>
        </div>


    )
    
}