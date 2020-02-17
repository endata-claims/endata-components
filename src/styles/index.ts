import { makeStyles } from '@material-ui/core'

export const overrideStyles = makeStyles({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
})

// @ts-ignore
export const MuiFormLabelStyles = makeStyles({
  root: {
    color: 'rgba(0, 0, 0, 0.84) !important',
    fontWeight: '600 !important'
  }
}, { name: 'MuiFormLabel' })