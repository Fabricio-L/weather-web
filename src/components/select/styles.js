import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down('md')]: {
      top: '60px',
      left: '0',
      right: '0',
      width: '100%',
    },
  },
  cardContainer: {
    textAlign: 'center',
    margin: 'auto',
    width: '100%',
  },
}))

export default useStyles
