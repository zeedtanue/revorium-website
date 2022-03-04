import { makeStyles } from '@material-ui/core/styles'


export default makeStyles(({ breakpoints, theme }) => ({
    
      background: {
        background: 'white',
    
      },
      container:{
        background: 'white',
        margin:60,
      },  
      card:{
        maxWidth:320,
        margin: 20
      },
      blogContainer:{
        justifyContent:'center',

      },
      bold: {
        fontWeight:'bold',
        color: 'black'
      },
      normal: {
        color: 'black'
      },
      category: {
        display: 'flex',
        padding: 20,

      },
      row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',

      },
      rowColumn: {
        maxWidth: '25vh'
    
      },
      trendingBlogsContainer: {
        backgroundColor: '#F9F9FC',
        padding: 20

      }
    
}))