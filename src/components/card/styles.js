import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    position: 'fixed',
    width: '300px',
    height: '500px',
    top: '120px',
    left: '50px',
    backdropFilter: 'blur(5px)',
    boxShadow: '3px 3px 4px #3f3f3f',
    borderRadius: '30px',
  },
})

export default useStyles
