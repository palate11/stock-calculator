import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Subtract = props => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(0)

  const calculate = () => {
    const result = parseInt(number1) - parseInt(number2)
    setResult(result)
  }

  const update1 = event => {
    const { value } = event.target
    setNumber1(value)
  }

  const update2 = event => {
    const { value } = event.target
    setNumber2(value)
  }

  // console.log('number1: ' + number1)
  // console.log('number2: ' + number2)
  // console.log('result: ' + result)

  return (
    <div>
      <div>
        Subtrahend:{' '}
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
        Minuend:{' '}
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
        Difference: <TextField id="outlined-basic" variant="outlined" value={result} size="small" />
      </div>

      <Button variant="contained" color="primary" onClick={calculate}>
        Calculate
      </Button>
    </div>
  )
}

export default Subtract
