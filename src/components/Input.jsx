import { useState } from "react";

const Input = () => {
    const [person, setPerson] = useState({
        name: ``,
        age: ``,
        errorMsg: `error`,
    });

    const handleChange = (e) => {
        const name = e.target.name; // ovo je promenljiva koju kasnije gledamo u [name]
        const value = e.target.value;

        // console.log(name, value);
        // console.log({...person});
        // setPerson(prevState => ({...prevState, [name]: value})); // u velikoj zagradi pisemo name zato sto citamo vrednost pormenljive name

        let errorMsg = ``;

        if(name === `age`) {
            if(value !== `` && !Number(value)) {
                errorMsg = `You must enter a number!`;
            }
        }
        setPerson(prevState => ({...prevState, [name]: value, errorMsg: errorMsg})); // errorMsg: errorMsg smo mogli da napisemo samo kao errorMsg
    };


    return (
        <form>
            <h1>Hello {person.name}</h1>
            <h2>Your age is {person.age}</h2>

            <p>Enter your name:</p>
            <input type="text" name="name" onChange={handleChange}/>
            <p>Enter your age:</p>
            <input type="text" name="age" onChange={handleChange}/>
            <h5>{person.errorMsg}</h5>
        </form>
    )
}

export default Input;