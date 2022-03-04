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
        minWidth:280,
        padding:20,
        margin:65,
        minHeight:300,
        marginBottom:90,
        marginTop:50
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
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F9F9FC',
        minHeight: 90,
        paddingTop: 80,

    },
    valuePara: {
        display: 'flex',
        minWidth: 250,
        maxWidth:750,
        alignSelf: 'center',
        justifyContent:'center'
    },
    valueContainerRow: {
        display: 'flex',
        justifyContent: 'center'

        
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
        maxWidth: 200
    },
    valueImg: {
        paddingLeft: 10,
        paddingRight:20
    },
    goalCardContainer: {
        marginBottom:100,

    }
    
}))