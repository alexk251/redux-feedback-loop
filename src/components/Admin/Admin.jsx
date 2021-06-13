import axios from "axios";
import { useState, useEffect } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AdminInfo from './AdminInfo'


function Admin() {
    //set states for variables
    const [feedback,setFeedback] = useState([])

        // get feedback from DB on load
        useEffect(() => {
            getFeedback();
            console.log('Navigated to Admin');
        }, [])

            // GET feedback data from DB
    const getFeedback = () => {
        axios.get('/feedback')
            .then(response => {
                setFeedback(response.data)
            })
            .catch(err => {
                alert('Problem getting feedback');
                console.log(err);
            })
    }

    return (
        <div>
            <TableContainer className='card admin'>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Feeling</TableCell>
                  <TableCell align="right">Comprehension</TableCell>
                  <TableCell align="right">Support</TableCell>
                  <TableCell align="right">Comments</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feedback.map((info) => (
                    <TableRow key={info.id}>
                    <AdminInfo  getFeedback={getFeedback} key={info.id} info={info}/>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    )
}

export default Admin;