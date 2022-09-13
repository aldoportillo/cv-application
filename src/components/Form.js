import React from "react";

export default function Form () {
    const [info, setInfo] = React.useState({
        name: "",
        email: "",
        phone: "",
    })
    const [education, setEducation] = React.useState({
        school: "",
        major: "",
        class: "",
    })
    const [experience, setExperience] = React.useState({
        company: "",
        title: "",
        tasks: "",
        startDate: "",
        endDate: "",
    })

    console.log(info)
    function handleChange (event) {
        
        const {name, value} = event.target

        setInfo(prevInfo => {
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
                    placeholder="Name"
                    onChange={handleChange}
                    name="name"
                />
                
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                />

                <input 
                    type="number" 
                    placeholder="Phone number"
                    onChange={handleChange}
                    name="phone"
                />

                <button 
                    className="form--submit"
                >
                    Enter Personal Info
                </button>
            </form>
            <div className='formRender'>
                <h3>Name: {info.name}</h3>
                <h3>E-mail: {info.email}</h3>
                <h3>Phone: {info.phone}</h3>
            </div>
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
            <div className='formRender'>
                <h3>School: {education.school}</h3>
                <h3>Major: {education.major}</h3>
                <h3>Class of {education.class}</h3>
            </div>
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