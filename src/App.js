import { useEffect, useState } from 'react';
import './App.css';
import { getList } from './api/index.js';
import List from './components/List';
import Form from './components/Form';

const App = () => {
  const [marins, setMarins] = useState([]);
  const [feedback, setFeedback] = useState(false);

  useEffect(() => {
    getList().then(data => setMarins(data));
  }, [feedback]);

  return (
    <div className="App">
      <header>
        <h1>
          <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
          Les Argonautes
        </h1>
      </header>
      <main>
        <Form setFeedback={setFeedback} />
        {feedback && <div className="message-success"><p>Marin enrôlé !</p></div>}
        {marins && <List marins={marins} />}
      </main>
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
