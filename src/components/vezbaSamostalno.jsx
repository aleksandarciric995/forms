import { useState } from "react";

const Formm = () => {
    const [person, setPerson] = useState({
        name: ``,
        email: ``,
        age: ``,
        subscription: false,
        gender: ``,
        message: ``,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        setPerson(prevData => ({
            ...prevData, [name]: type === `checkbox` ? checked : value
        }))
    }


    return <form onSubmit={handleSubmit}>
        <div>
            <label>Name: </label>
            <input type="text" name="name" value={person.name} onChange={handleChange} />
        </div>

        <div>
            <label>Email: </label>
            <input name="email" type="text" value={person.email} onChange={handleChange}></input>
        </div>

        <div>
            <label>Age:</label>
            <input name="age" type="number" value={person.age} onChange={handleChange}/>
        </div>

        <div>
            <label>Subscribe? </label>
            <input name="subscription" type="checkbox" value={person.subscription} onChange={handleChange}></input>
        </div>

        <div>
            <label>Gender: </label>
            <select name="gender" value={person.gender} onChange={handleChange}>
                <option value="">Choose</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>

        <div>
            <textarea name="message" onChange={handleChange} value={person.message}></textarea>
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>
    </form>

}

export default Formm;