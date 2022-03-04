import { makeStyles } from '@material-ui/core/styles'


export default makeStyles(({ breakpoints }) => ({
    
    mainFeatureBox:{
      marginTop:10,
      borderColor:'black',
      borderWidth: 1,
    },
    card: {
        minWidth:220,
        
    },
    cardImage: {
        height: 50,
        width: 50,
        paddingLeft: 20,
        paddingTop:20,
        margin: 20
    },
    spacing: {
        marginTop:30,
    },
    bottomContainer:{
        backgroundColor: '#F9F9FC',
        padding: 80
    }
    
}))