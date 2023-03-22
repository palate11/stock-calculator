import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const IntrinsicCalculator = props => {
  const [eps, setEps] = useState(0)
  const [growth, setGrowth] = useState(0)
  const [yrs, setYrs] = useState(0)
  const [result, setResult] = useState(0)

  const calculate = () => {
    const result = ((eps * (8.5 + 2 * growth * 4)) / yrs).toFixed(2)
    setResult(result)
  }
  const updateEps = event => {
    const { value } = event.target
    setEps(value)
  }
  const updateGrowth = event => {
    const { value } = event.target
    setGrowth(value)
  }
  const updateYrs = event => {
    const { value } = event.target
    setYrs(value)
  }
  return (
    <div>
      <div>
        EPS:{' '}
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={eps}
          onChange={e => updateEps(e)}
          size="small"
        />
      </div>

      <br />
      <div>
        Growth Rate:{' '}
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={growth}
          onChange={e => updateGrowth(e)}
          size="small"
        />
      </div>

      <br />
      <div>
        10 years government bond:{' '}
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={yrs}
          onChange={e => updateYrs(e)}
          size="small"
        />
      </div>

      <br />
      <div>
        Result: <TextField id="outlined-basic" variant="outlined" value={result} size="small" />
      </div>

      <Button variant="contained" color="primary" onClick={calculate}>
        Calculate
      </Button>
    </div>
  )
}

export default IntrinsicCalculator
