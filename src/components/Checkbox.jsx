import { useState } from "react";

const Checkbox = () => {
    const [lang, setLang] = useState([
        { label: `HTML`, isChecked: false },
        { label: `CSS`, isChecked: false },
        { label: `JS`, isChecked: false },
        { label: `React`, isChecked: false },
    ])

    const handleChange = (index) => {
        // const updatedCheckboxes = [...lang];
        // updatedCheckboxes[index].isChecked = !updatedCheckboxes[index].isChecked; // daje mu kontra vrednost
        // setLang(updatedCheckboxes);

        setLang(prevState => [...prevState].map((lang, i) => i === index ? {...lang, isChecked: !lang.isChecked} : {...lang}))
    }

    return <div>
        {/* array.filter uvek vraca neki niz, i zato imamo opciju da pozovemo .length */}
        {/* [].length vraca false */}
                <h1>
                    {/* I know {lang.filter(lang => lang.isChecked).length} languages.
                     */}
                     I know {lang.filter(lang => lang.isChecked).length || `nothing`} {` `}
                </h1>
        {
            lang.map((lang, index) => ( // da je ovde bila {} umest (), morali bismo sve iza njih da pisemo iza return 
                <div key={index}>
                    <label>
                        <input type="checkbox" checked={lang.isChecked} onChange={() => handleChange(index)}></input>
                        {lang.label}
                    </label>
                </div>
            ))
        }
    </div>
}

export default Checkbox;