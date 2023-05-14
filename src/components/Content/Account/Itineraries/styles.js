import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        display: "flex"
      },
      sidebar: {
        flex: "0 0 auto",
      },
      itineraries: {
        flex: "1 1 auto", 
        paddingLeft: theme.spacing(3), 
      },
      columns: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr', 
        gridTemplateAreas: ` "first second third"`,
        justifyContent: 'center',
      },
      first: {
        gridArea: 'first'
      },
      second: {
        gridArea: 'second'
      },
      third: {
        gridArea: 'third'
      }
}))