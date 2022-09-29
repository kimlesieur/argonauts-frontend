import { useEffect, useState } from 'react';
import './App.css';
import { getList, saveMember } from './api/index.js';
import List from './components/List';

const App = () => {
  const [marins, setMarins] = useState([]);
  const [name, setName] = useState("");

  const fetchData = async () => {
    await getList()
      .then(data => {
        setMarins(data)
      })
  };

  const addMember = async () => {
    await saveMember(name)
    .then(data => {
      alert(`Bravo ${name}, vous êtes engagé !`);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
          <h1>
            <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
            Les Argonautes
          </h1>
        </header>

        <main>
          <h2>Ajouter un(e) Argonaute</h2>
          <form className="new-member-form" onSubmit={() => {(addMember())}}>
            <label htmlFor="name">Nom de l&apos;Argonaute</label>
            <input id="name" name="name" type="text" placeholder="Charalampos" onChange={(e) => setName(e.target.value)} />
            <button type="submit">Envoyer</button>
          </form>

          <h2>Membres de l'équipage</h2>
          <List marins={marins} />
        </main>
        
        <footer>
          <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
        </footer>
    </div>
  );
}

export default App;
