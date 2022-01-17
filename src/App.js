import './App.css';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="grid-container">
      <header>
        <a href="/">Shopping cart</a>
      </header>
      <main>
        <HomePage />
      </main>
      <footer>
        <p>All about footer</p>
      </footer>
    </div>
  );
}

export default App;
