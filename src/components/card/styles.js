import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    width: '300px',
    height: '540px',
    top: '160px',
    left: '50px',
    backdropFilter: 'blur(5px)',
    boxShadow: '1px 1px 10px #1a1a1a',
    borderRadius: '15px',
  },
  cardContainer: {
    textAlign: 'center',
    margin: 'auto',
  },
  description: {
    textTransform: 'capitalize',
    marginRight: '5px',
    marginLeft: '5px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  dailyContainer: {
    overflowY: 'scroll',
    margin: '0px 5px 10px 0px',
  },
  dailyItem: {
    background: '#7f7f7f24',
    margin: '10px',
    borderRadius: '6px',
    padding: '5px 20px',
  },
  dailyPart: {
    display: 'flex',
    alignItems: 'center',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.5em',
    },
    '*::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 5px grey',
      borderRadius: '10px',
    },
    '*::-webkit-scrollbar-thumb': {
      background: '#263346',
      borderRadius: '10px',
    },
  },
})

export default useStyles
