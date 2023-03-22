/**
 * Make 3 text fields
 * - Text Field 1 and 2 are the numbers to be divided
 * - Text Field 3 is the quotient
 *
 * - Since this is division, please add a text field showing the remainder
 *   (hint: you will to learn about modulo operator '%')
 *
 * Add a button that says "Calculate" and can be clicked
 */

import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Divider = props => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [quotient, setQuotient] = useState(0)
  const [remainder, setRemainder] = useState(0)

  const getQuotient = () => {
    const quotient = Math.floor(parseInt(number1) / parseInt(number2))
    setQuotient(quotient)
  }
  const getModulus = () => {
    const remainder = Math.floor(parseInt(number1) % parseInt(number2))
    setRemainder(remainder)
  }
  const update1 = event => {
    const { value } = event.target
    setNumber1(value)
  }

  const update2 = event => {
    const { value } = event.target
    setNumber2(value)
  }

  console.log('number1: ' + number1)
  console.log('number2: ' + number2)
  console.log('quotient: ' + quotient)
  console.log('remainder' + remainder)

  return (
    <div>
      <div>
        Dividend:{' '}
        <TextField
          id="outlined-basic"
          variant="outlined"
          bf
          value={number1}
          onChange={e => update1(e)}
          size="small"
        />
      </div>

      <br />
      <div>
        Divisor:{' '}
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
        Quotient: <TextField id="outlined-basic" variant="outlined" value={quotient} size="small" />
      </div>

      <br />
      <div>
        Modulus: <TextField id="outlined-basic" variant="outlined" value={remainder} size="small" />
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          getQuotient()
          getModulus()
        }}
      >
        Calculate!
      </Button>
    </div>
  )
}

export default Divider
