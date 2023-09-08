import logo from './logo.svg';
import './App.css';

function App() {

  let user = {
    firstName: "Vincent",
    lastName: "Zerbib",
    isAuth: false,
    age: 20
  }

  const { firstName, lastName, isAuth } = user;

  const authenticateUser = () => {
    console.log("trigger");
    user.isAuth = true
  }

  return (
    <header>
      <p>
        Bonjour {firstName} {lastName}
      </p>
      <p>
        {
          isAuth ?
            (<p>Vous êtes connecté</p>)
            : (<div>
              <p>Vous n'êtes pas connecté</p>
              <button onClick={() => authenticateUser()}>Connexion</button>
            </div>)
        }
      </p>
    </header>
  );
}

export default App;
