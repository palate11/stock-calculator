import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Benjamin Graham equation 

          V = ((EPS*(8.5+2g)*4.4)/(Y))
         

          EPS = Earning per share "\n"
          Expected annual growth rate (2 over 7-10 years)= g "\n"
          Corporate bond yield 'risk free rate' (Y)
          8.5 price to Earnings Ratio for a no growth company 
         
          intrinsic value per share = V
          Margin of safty % = 

          <b></b>
        </a>
      </header>
    </div>
  );
}

export default App;
