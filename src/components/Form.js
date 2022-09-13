import React from "react";
import CurriculumVitae from "./CurriculumVitae";

export default function Form () {
    const [info, setInfo] = React.useState({
        name: "",
        profession: "",
        email: "",
        phone: "",
        address: "",
    })
    const [education, setEducation] = React.useState({
        school: "",
        major: "",
        classOf: "",
    })
    const [experience, setExperience] = React.useState({
        company: "",
        title: "",
        tasks: "",
        startDate: "",
        endDate: "",
    })

    console.log(info)
    console.log(education)
    console.log(experience)
    function handleChange (event) {
        
        const {name, value} = event.target

        setInfo(prevInfo => {
            return{
                ...prevInfo,
                [name]: value,
            }
        })
        setEducation(prevInfo => {
            return{
                ...prevInfo,
                [name]: value,
            }
        })
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
        <div className="main">
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                
                <input 
                    type="text" 
                    placeholder="Name"
                    onChange={handleChange}
                    name="name"
                />

                <input 
                    type="text" 
                    placeholder="Profession"
                    onChange={handleChange}
                    name="profession"
                />      
                
                <input 
                    type="number" 
                    placeholder="Phone number"
                    onChange={handleChange}
                    name="phone"
                />

                <input 
                    type="text" 
                    placeholder="Address"
                    onChange={handleChange}
                    name="address"
                />

                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                />

                
            </form>
            
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
                    name="classOf"
                />

            </form>
            
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

            </form>
            
        </div>
        <CurriculumVitae 
            name={info.name}
            profession={info.profession}
            email={info.email}
            phone={info.phone}
            address={info.address}
            school={education.school}
            major={education.major}
            classOf={education.classOf}
            company={experience.company}
            title={experience.title}
            tasks={experience.tasks}
            startDate={experience.startDate}
            endDate={experience.endDate}
        />
        </div>
    )
}