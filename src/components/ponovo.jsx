import { useState } from "react";

export const Ponovo = () => {
    const [person, setPerson] = useState({
        name: ``,
        email: ``,
        age: ``,
        subscribe: false,
        gender: ``,
        message: ``,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person);
    }

    const handleChange = (e) => {
        // if(e.target.type === `checkbox`) {
        //     if(person.subscribe === false) {
        //         setPerson(prevState => ({...prevState, [e.target.name]: true}));
        //     }
        //     else {
        //         setPerson(prevState => ({...prevState, [e.target.name]: false}))
        //     }
        // }
        // else {
        //     setPerson(prevState => ({...prevState, [e.target.name]: e.target.value}))
        // }

        const {name, value, type, checked} = e.target;
        setPerson(prevState => ({...prevState, [name]: type === `checkbox` ? checked : value }))

    }


    return <form onSubmit={handleSubmit}>
        <div>
            <label>Name: </label>
            <input type="text" name="name" value={person.name} onChange={handleChange}></input>
        </div>

        <div>
            <label>Email: </label>
            <input type="text" name="email" value={person.email} onChange={handleChange}></input>
        </div>

        <div>
            <label>Age: </label>
            <input type="text" name="age" value={person.age} onChange={handleChange}></input>
        </div>

        <div>
            <label>Subscribe? </label>
            <input type="checkbox" name="subscribe" value={person.subscribe} onChange={handleChange}></input>
        </div>

        <div>
            <label>Gender: </label>
            <select name="gender" value={person.gender} onChange={handleChange}>
                <option value="">Choose</option>
                <option value="male">Male:</option>
                <option value='female'>Female:</option>
            </select>
        </div>

        <div>
            <label>Message: </label>
            <textarea name="message" value={person.message} onChange={handleChange}></textarea>
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
}




