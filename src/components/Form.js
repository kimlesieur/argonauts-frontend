import { useState } from "react";
import { saveMember } from '../api/index.js';
import * as Yup from 'yup';

const Form = () => {
    const [name, setName] = useState("");
    const [valid, setValid] = useState(false);

    const validationSchema = Yup.object().shape({
      name: Yup.string().min(2).max(50).matches(/^[a-z]+$/).required()
    });

    const handleInput = async (e) => {
      const name = e.target.value; 
      await validationSchema.isValid({name: name}).then(boolean => setValid(boolean));
      setName(name);
    }

    const addMember = async () => {
      if(valid){
        await saveMember(name)
        .then(data => {
          console.log(data);
        });
      }
      return null;
    };
    
    return (
        <>
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form" onSubmit={() => {(addMember())}}>
            <label htmlFor="name">Nom de l&apos;Argonaute</label>
            <input id="name" name="name" type="text" placeholder="Charalampos" onChange={e => handleInput(e)} />
            <button type="submit">Envoyer</button>
            {!valid && <div className="warning-error"><p>Indiquer votre nom, de 3 à 50 lettres maximum.</p></div>}
        </form>
        </>
    )
}

export default Form;