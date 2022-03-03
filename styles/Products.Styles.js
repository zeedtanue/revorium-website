import { makeStyles } from '@material-ui/core/styles'


export default makeStyles(({ breakpoints }) => ({
    
    mainFeatureBox:{
      marginTop:10,
      borderColor:'black',
      borderWidth: 1,
    },
    card: {
        minWidth:250
    },
    cardImage: {
        paddingLeft: 20,
        paddingTop:20,
    },
    spacing: {
        marginTop:30,
    }
    
}))