// import logo from './logo.svg'
// import './App.css'

import Button from '@material-ui/core/Button'

import TextField from '@material-ui/core/TextField'
import InboxIcon from '@material-ui/icons/Inbox'
import { useState } from 'react'
import Multiplier from './components/Multiplier'

function countInitial() {
  //speeding up computation from inisial state
  console.log('run function')
}

function App() {
  // Have to use a function to use a Hook also Hooks must be first - no if functions loops nested in nothing
  const [number1, setNumber1] = useState(0) //Hook  Number (current state) setNumber (update current state) 'Use state (0) defult state
  const [number2, setNumber2] = useState(0)
  const [sum, setSum] = useState(0)
  const [whatever, setWhatever] = useState('whatever')

  const Multiplier = props => {
    const [number1, setNumber1] = useState(0)

    return <div>hellow</div>
  }

  const calculate = () => {
    const newSum = parseInt(number1) * parseInt(number2)
    setSum(newSum)
  }

  const update1 = event => {
    const { value } = event.targetS
    setNumber1(value)
  }

  const update2 = event => {
    const { value } = event.target
    setNumber2(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload. HI HI
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Benjamin Graham equation V = ((EPS*(8.5+2g)*4.4)/(Y)) EPS = Earning per share <br />
          Expected annual growth rate (2 over 7-10 years)= g "\n" Corporate bond yield 'risk free
          rate' (Y) 8.5 price to Earnings Ratio for a no growth company intrinsic value per share =
          V Margin of safty % =<b></b>
        </a>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <div>
          <InboxIcon /> Benjamin Graham equation V = ((EPS*(8.5+2g)*4.4)/(Y))
        </div>
        <div>
          <InboxIcon /> EPS = Earning per share
        </div>

        <br />
        <br />
        <div>
          A:{' '}
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={number1}
            onChange={e => update1(e)}
            size="small"
          />
        </div>

        <br />
        <div>
          B:{' '}
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={number2}
            onChange={e => update2(e)}
            size="small"
          />
        </div>

        <br />
        <div>
          Sum: <TextField id="outlined-basic" variant="outlined" value={sum} size="small" />
        </div>

        <Button variant="contained" color="primary" onClick={calculate}>
          Calculate
        </Button>

        <div>
          MULTIPLY
          <Multiplier />
        </div>
      </header>
    </div>
  )
}

export default App
