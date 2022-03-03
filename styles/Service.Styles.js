import { makeStyles } from '@material-ui/core/styles'


export default makeStyles(({ breakpoints, theme }) => ({
    
    
      toolbarTitle: {
        flex: 1
      },
      background: {
        background: 'white',
    
      },
      container:{
        background: 'white',
        margin:60,
      },
      
      overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.7)'
      },
      
      card: {
        display: 'flex'
      },
      cardDetails: {
        flex: 1
      },
      cardMedia: {
        width: 160
      },
      projectContainer: {
        backgroundColor: '#F9F9FC',
      },
      aiLogo: {
        maxWidth: 350,
        paddingLeft: 80
      },
      allign: {
        textAlign: 'center',
        padding: 10
      },
      row: {
        display: 'flex',
        flexDirection: 'row',
        padding: '5vh',
        paddingTop:'10vh',
        paddingBottom:'8vh',
        paddingRight:'10vh',
        paddingLeft:'10vh',
        justifyContent: 'space-between',
        backgroundImage: "linear-gradient(to bottom,  rgba(21, 21, 32, 0), rgba(2, 2, 69, 0.49))"
    
    
      },
      rowColumn: {
        maxWidth: '25vh'
    
      }
    
}))