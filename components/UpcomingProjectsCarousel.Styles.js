import { makeStyles } from '@material-ui/core/styles'


export default makeStyles(({ breakpoints }) => ({
    
    mainFeatureBox:{
      marginTop:10,
      borderColor:'black',
      borderWidth: 1,
    },
    image: {
        maxHeight: 221,
        maxWidth: 221
    },
    row:{
        display: 'flex',
        flexDirection:'row',
    }
    
}))