import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  // Paper,
  TextField,
} from '@material-ui/core'

const useStyles = makeStyles(
  theme => ({
    root: {},

    paper: {
      color: 'blue',
      backgroundColor: 'red',
    },

    formRow: {
      display: 'flex',
      flex: 1,
      // flexDirection: 'column',
      maxWidth: '50%',
      marginLeft: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },

    fieldName: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      fontWeight: 'bold',
      minWidth: theme.spacing(20),
      color: '#33834b',
    },
  }),
  { name: 'IntrinsicCalculator' }
)

const IntrinsicCalculator = props => {
  const classes = useStyles(props)

  const [eps, setEps] = useState(0)
  const [growth, setGrowth] = useState(0)
  const [tenYearBondRate, setTenYearBondRate] = useState(0)
  const [result, setResult] = useState(0)

  const calculate = () => {
    const result = ((eps * (8.5 + 2 * growth * 4)) / tenYearBondRate).toFixed(2)
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

  const updateTenYearBondRate = event => {
    const { value } = event.target
    setTenYearBondRate(value)
  }

  return (
    <div>
      {/* <Paper className={classes.paper}>PAPER TEST</Paper> */}
      <div className={classes.formRow}>
        <div className={classes.fieldName}>EPS:</div>
        <div className={classes.fieldContainer}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={eps}
            onChange={e => updateEps(e)}
            size="small"
          />
        </div>
      </div>

      <div className={classes.formRow}>
        <div className={classes.fieldName}>Growth Rate:</div>
        <div className={classes.fieldContainer}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={growth}
            onChange={e => updateGrowth(e)}
            size="small"
          />
        </div>
      </div>

      {/* TODO: Fix the rest of these fields to be stylized more pretty like the ones above */}
      <div className={classes.formRow}>
        <div className={classes.fieldName}>10 Years Government Bond:</div>
        <div className={classes.fieldContainer}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={tenYearBondRate}
            onChange={e => updateTenYearBondRate(e)}
            size="small"
          />
        </div>
      </div>
      <div>
        <div className={classes.formRow}>
          <div className={classes.fieldName}>Stock Intrinsic Value: </div>
          <div className={classes.fieldContainer}>
            <TextField id="outlined-basic" variant="outlined" value={result} size="small" />
          </div>
        </div>
        <div className={classes.formRow}>
          <Button variant="contained" color="primary" onClick={calculate}>
            Calculate
          </Button>
        </div>
      </div>
    </div>
  )
}

export default IntrinsicCalculator
