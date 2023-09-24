import React from 'react';
import { useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

type RootState = {
    user: {
      value: {
        id: string | null;
        name: string | null;
        email: string | null;
        phone: string | null;
        times:[] ;
        message:[] ;
        access_token: string;
      };
    };
  };
  

function Tables() {
    const userdata = useSelector((state: RootState) => state.user.value);

  if (!userdata) {
    return null; 
  }

  const usertimes = userdata.times;
  const usermessages = userdata.message;

 

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usertimes.map((timestamp, index) => (
            <TableRow key={index}>
              <TableCell>{new Date(timestamp).toLocaleString()}</TableCell>
              <TableCell>{usermessages[index]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tables;
