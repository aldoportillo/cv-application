import React from "react";
//How am i going to get props from sibiling components onto this? 
export default function CurriculumVitae (props) {
    return(
        <div className="content">
            <div className="document">
                <div className="personalInfo">
                    <div className='formRender'>
                        <div className="info-title">
                            <h2>{props.name}</h2>
                            <h3>{props.profession}</h3>
                        </div>
                        <h3>Phone: {props.phone}</h3>
                        <h3>Address: {props.address}</h3>
                        <h3>E-mail: {props.email}</h3>
                        
                        
                    </div>
                </div>
                <div className="education">
                    <h2>Education</h2>
                    <div className='formRender'>
                        <h3>School: {props.school}</h3>
                        <h3>Major: {props.major}</h3>
                        <h3>Class of {props.classOf}</h3>
                    </div>
                </div>
                <div className="experience">
                    <h2>Experience</h2>
                    <div className='formRender'>
                        <h3>Company: {props.company}</h3>
                        <h3>Title: {props.title}</h3>
                        <h3>Tasks: {props.tasks}</h3>
                        <h3>Start date: {props.startDate}</h3>
                        <h3>End date: {props.endDate}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}