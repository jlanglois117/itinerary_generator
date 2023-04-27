import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        display: 'flex'
    },
    textbox: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        padding: '30px',
        fontSize: 'large'
    },
    text: {
        margin: '15px',
        width: '350px'
    },
    button: {
        backgroundColor: 'green',
        margin: '50px',
        marginLeft: '-15px',
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        borderRadius: '50%',
        alignContent: 'center',
        marginBottom: '50px',
        marginTop: '50px'
    },
    all: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))