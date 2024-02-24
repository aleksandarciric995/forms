import { useState } from "react";

const Forma = () => {
    const [user, setUser] = useState({
        ime: ``,
        email: ``,
        godine: ``,
        newsletter: [],
        pol: ``,
        poruka: ``,
    }) 

    const handlerChange = (e) => {
        const ime = e.target.name;
        const value = e.target.value;
        console.log(e.target);
        console.log(e.target.value);
        setUser(prevState => ({...prevState, [ime]: value}))
    }

    return (
        <form>
            <h3>Ime: {user.ime}</h3>
            <input type="text" placeholder="Unesite ime" name="ime" onChange={handlerChange} />

            <h3>email: {user.email}</h3>
            <input type="email" placeholder="unesite email" name="email" onChange={handlerChange}/>

            <h3>godine: {user.godine}</h3>
            <input type="number" name="godine" onChange={handlerChange}/>

            <h3>newsletter: {user.newsletter}</h3>
            <input type="checkbox" /> News1
            <input type="checkbox" /> News2
            <input type="checkbox" /> News3

            <h3>pol: {user.pol}</h3>
            <select>
                <option>Muski</option>
                <option>Zenski</option>
            </select>

            <h3>poruka: {user.poruka}</h3>
            <input type="text" placeholder="unesite poruku"></input>
        </form>
    )
}

export default Forma;