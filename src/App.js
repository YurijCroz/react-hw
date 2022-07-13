import First from "./Components/First";
import Second from "./Components/Second";
import './App.css';

const firstBlock = {
  img: '../../images/IMG_1.png',
  h3: 'Create an account',
  h2: 'Create/login to an existing account to get started',
  p: 'An account is created with your email and a desired password'
};

const secondBlock = {
  img: '../../images/IMG_2.png',
  h3: 'Explore varieties',
  h2: 'Shop for your favorites meal as e dey hot.',
  p: 'Shop for your favorite meals or drinks and enjoy while doing it.'
}

function App() {
  return (
    <>
      <div className="container">
        <h2>How the app works</h2>
        <First block={firstBlock} />
        <First block={secondBlock} reverse />
      </div>
      <div className="container second">
        <Second start={10} step={2} />
        <Second start={20} step={3} />
      </div>
    </>
  );
}

export default App;