import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
   appBar: {
    backgroundColor: '#444054',
    borderRadius: 5,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  link: {
    alignItems: 'center',
    color: '#444054',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    // height: '10vh',
    justifyContent: 'center',
    // width: '10vw'
  },
  image: {
      height: '100%',
      width: '100%'
  }
}))