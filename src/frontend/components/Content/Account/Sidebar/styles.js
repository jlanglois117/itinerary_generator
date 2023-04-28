import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    button: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        textAlign: 'left'
    },
    button2: {
        textAlign: 'left',
        paddingLeft: '10px'
    },
    container: {
        height: '100%',
        borderRightColor: 'black',
        padding: '20px',
        backgroundColor: '#eeeeee'
    }
}))