import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    width: '300px',
    top: '80px',
    left: '50px',
    backdropFilter: 'blur(5px)',
    boxShadow: '1px 1px 10px #1a1a1a',
    borderRadius: '15px',
    padding: '7px',
  },
  cardContainer: {
    textAlign: 'center',
    margin: 'auto',
    width: '100%',
  },
})

export default useStyles
