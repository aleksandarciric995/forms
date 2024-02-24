import { useState } from "react";

const Form = () => {
    const [name, setName] = useState(``);
    const handleChange = (value) => {
        setName(value);
    }
    // const handleChange = (event) => {
    //     setName(event.target.value);
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Your name is ` + name);
        alert(`Your name is ${name}`);
    }

    return (<form onSubmit={handleSubmit}>
        <h1>Hello {name}</h1>
        <p>Enter your name</p>
        {/* <input type="text" onChange={handleChange}/> */}
        <input type="text" onChange={(e) => handleChange(e.target.value)}/>
        <input type="Submit" valuu="Submit"/>
    </form>
    );
}

export default Form;