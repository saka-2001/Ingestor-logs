import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';import Box from '@mui/material/Box';

const tableCellStyle = {
    padding: '12px',
    fontSize: '11px',
  };
const Output = ({logs}) => {
    return(<Box
    sx={{
      border: '1px solid #ccc',
      padding: '15px',
      borderRadius: '8px',
      width: '795px',
      marginLeft:'8px',
      marginTop : '-5px'
    }}
    >        
    <h3 style={{ textAlign: 'center', marginBottom: '16px' , marginTop: '-8px'}}>Result</h3>
    
    <TableContainer component={Paper}  style={{maxHeight: '373px', overflowY: 'auto', marginTop: '8px'}}>
    <Table>
    <TableHead style={{fontWeight: 'bold', textAlign: 'center'}}>
      <TableRow>
        <TableCell style={{tableCellStyle, fontWeight: 'bold',padding:'1px'}}>Level</TableCell>
        <TableCell style={{tableCellStyle, fontWeight: 'bold',padding:'1px'}}>Message</TableCell>
        <TableCell style={{tableCellStyle, fontWeight: 'bold',padding:'1px'}}>Resource ID</TableCell>
        <TableCell style={{tableCellStyle, fontWeight: 'bold',padding:'1px'}}>Timestamp</TableCell>
        <TableCell style={{tableCellStyle, fontWeight: 'bold',padding:'1px'}}>Trace Id</TableCell>
        <TableCell style={{tableCellStyle, fontWeight: 'bold',padding:'1px'}}>Span Id</TableCell>
        <TableCell style={{tableCellStyle, fontWeight: 'bold',padding:'1px'}}>Commit</TableCell>
        <TableCell style={{tableCellStyle, fontWeight: 'bold',padding: '1px'}}>ParentResourceId</TableCell>
      </TableRow>
    </TableHead>
     <TableBody>
            {logs.length > 0 ? (
              logs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell style={tableCellStyle}>{log.level}</TableCell>
                  <TableCell style={tableCellStyle}>{log.message}</TableCell>
                  <TableCell style={tableCellStyle}>{log.resourceId}</TableCell>
                  <TableCell style={tableCellStyle}>{log.timestamp}</TableCell>
                  <TableCell style={tableCellStyle}>{log.traceId}</TableCell>
                  <TableCell style={tableCellStyle}>{log.spanId}</TableCell>
                  <TableCell style={tableCellStyle}>{log.commit}</TableCell>
                  <TableCell style={tableCellStyle}>
                    {log.metadata.parentResourceId}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} style={{ textAlign: 'center', fontSize: '13px' }}>
                  No results to display.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Output;