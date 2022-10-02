import { useState } from "react";
import { saveMember } from '../api/index.js';
import * as Yup from 'yup';

const Form = ({setFeedback}) => {
    const [name, setName] = useState("");
    const [valid, setValid] = useState(false);
    const [error, setError] = useState(false);

    const validationSchema = Yup.object().shape({
      name: Yup.string().min(2).max(50).matches(/^[a-z]+$/).required()
    });

    const handleInput = async (e) => {
      const name = e.target.value; 
      await validationSchema.isValid({name: name}).then(boolean => setValid(boolean));
      setName(name);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(valid){
        await saveMember(name)
        .then(() => {
          setName("");
          setValid(false);
          setFeedback(true);
        })
        .catch(err => {
          console.log(err);
          setError(true);
        })
 
      }
      return null;
    };
    
    return (
        <>
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form" onSubmit={e => handleSubmit(e)}>
            <label htmlFor="name">Nom de l&apos;Argonaute</label>
            <input id="name" name="name" type="text" placeholder="Charalampos" onChange={e => handleInput(e)} value={name} />
            <button type="submit">Envoyer</button>
            {!valid && <div className="message-error"><p>3 à 50 lettres max, pas de caractères spéciaux.</p></div>}
            {error && <div className="message-error"><p>Erreur lors du chargement des données</p></div>}
        </form>
        </>
    )
}

export default Form;