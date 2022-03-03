import { makeStyles } from '@material-ui/core/styles'


export default makeStyles(({ breakpoints }) => ({
    
    mainFeatureBox:{
      marginTop:10,
      borderColor:'black',
      borderWidth: 1,
    },
    topContainer:{
        backgroundColor: '#324a9f',
        width: '100%',
        position: 'absolute',
        padding: 80,
        color: 'white'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        padding: 50
    },
    text: {
        textAlign: 'center'
    },
    card: {
        maxWidth:280,
        padding:20,
        margin:30
    },
    image: {
        paddingRight: 20,
        height: 40,
    },
    spacing: {
        marginTop:30,
    },
    paragraphWidth: {
        maxWidth: 500
    },
    valuesContainer:{
        backgroundColor: '#F9F9FC',
        minHeight: 90,
        paddingTop: 80,
        paddingLeft:220,
        paddingRight:220
    },
    valueContainerRow: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',

        
    },
    valueBox: {
        alignItems: 'center',
        display: 'flex',
        margin:20,
        paddingTop:15,
        paddingRight:25,
        paddingLeft: 25,
        paddingBottom: 15,
        background: 'white',
        flexDirection: 'row',
        minWidth: 210,
    },
    valueImg: {
        paddingLeft: 10,
        paddingRight:20
    },
    goalCardContainer: {
        alignSelf:'center',
        margnin:30,
        alignItems: 'center',
        alignContent: 'center',

    }
    
}))