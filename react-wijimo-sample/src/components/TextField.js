import React from 'react'
import {TextField} from '@material-ui/core'

const tf = props => {
  return(
    <div>
      <form noValidate autoComplete="off">
        <TextField id="NameOfFile" label="Name of File" />
        <TextField id="Keywords" label="Keywords" variant="filled" />
        <TextField id="Qprime" label="Qprime" variant="outlined" />
      </form>
    </div>
  )
}

export default tf
