import { useState } from "react";
import { saveMember } from '../api/index.js';

const Form = () => {
    const [name, setName] = useState("");

    const addMember = async () => {
        await saveMember(name)
        .then(data => {
          alert(`Bravo ${name}, vous êtes engagé !`);
        });
      };

    
    return (
        <>
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form" onSubmit={() => {(addMember())}}>
            <label htmlFor="name">Nom de l&apos;Argonaute</label>
            <input id="name" name="name" type="text" placeholder="Charalampos" onChange={(e) => setName(e.target.value)} />
            <button type="submit">Envoyer</button>
        </form>
        </>
    )
}

export default Form;