import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1), minWidth: 120, marginBottom: '30px', position:'relative', 
        
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    loading: {
        height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    container: {
        padding: '25px',
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '75vh', overflow: 'auto',
    },    
    buttons:{
        backgroundColor: '#228B22',
        float: 'right',
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        marginRight:'5px',
        position: 'relative',
    }
}));