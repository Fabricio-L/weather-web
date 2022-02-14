import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    width: '300px',
    height: '500px',
    top: '120px',
    left: '50px',
    backdropFilter: 'blur(5px)',
    boxShadow: '1px 1px 10px #1a1a1a',
    borderRadius: '30px',
  },
  cardContainer: {
    textAlign: 'center',
    margin: 'auto',
  },
  description: {
    textTransform: 'capitalize',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
})

export default useStyles
