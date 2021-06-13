import axios from "axios";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


function AdminInfo({info, getFeedback}) {

    const deleteItem = () => {
        console.log(info)
        console.log(info.id)
        axios.delete(`/feedback/${info.id}`)
        .then(response => {
            getFeedback();
        }).catch(err => {
            console.log(err)
        })
    }

    return (
                  <>
                    <TableCell align="right">{info.feeling}</TableCell>
                    <TableCell align="right">{info.understanding}</TableCell>
                    <TableCell align="right">{info.support}</TableCell>
                    <TableCell align="right">{info.comments}</TableCell>
                    <TableCell align="right">
                    <Button 
                    onClick={deleteItem}
                    variant="contained" 
                    color="primary">Delete</Button>
                    </TableCell>
                  </>
                  
    )
}

export default AdminInfo;