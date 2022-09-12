import React from 'react'

export default function Info () {

    const [info, setInfo] = React.useState({
        name: "",
        email: "",
        phone: "",
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

            <h3>Name: {info.name}</h3>
            <h3>E-mail: {info.email}</h3>
            <h3>Phone: {info.phone}</h3>


        </div>

        

    )
    
}