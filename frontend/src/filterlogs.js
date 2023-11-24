import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

const FilterLogs = ({ onFilter, onClear }) => {
  const [filters, setFilters] = useState({
    level: '',
    message: '',
    resourceId: '',
    timestamp: '',
    traceId: '',
    spanId: '',
    commit: '',
    parentResourceId: '',
  });

  const handleFilter = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/filter-logs`, {
        params: {
          level: filters.level,
          message: filters.message,
          resourceId: filters.resourceId,
          timestamp: filters.timestamp,
          traceId: filters.traceId,
          spanId: filters.spanId,
          commit: filters.commit,
          'metadata.parentResourceId' : filters.parentResourceId,
        },
      });
      console.log('Response filter :: ',response);
      onFilter(response.data.logs);
     } catch (error) {
      console.error('Error fetching filtered logs:', error);
    } 
  }; 
  const handleClear = async () => {  
    setFilters({
      level: '',
      message: '',
      resourceId: '',
      timestamp: '',
      traceId: '',
      spanId: '',
      commit: '',
      parentResourceId: '',
      });
      onClear();

  };

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        paddingTop: '2px',
        paddingRight:'8px',
        paddingBottom:'10px',
        paddingLeft:'8px',
        borderRadius: '8px',
        width: '190px', 
        margin: '4px',
        marginTop : '-5px',
        height: '395px'
      }}
      >
      <div  style={{ textAlign: 'center'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="search" style={{ width: '15px', height: '15px', marginRight: '2px'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="filter"><path d="m1 10.399 19 20v18.405l10-6.25V30.399l19-20V1H1v9.399zM3 3h44v6.601l-19 20v11.845l-6 3.75V29.601l-19-20V3z"></path></svg>
      </svg><h3 style={{display: 'inline-block', textAlign: 'center', marginTop: '8px'}}>Filter</h3>
      </div>
      <TextField
        label="Level"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filters.level}
        InputProps={{style:{ height: '35px',fontSize: '0.8em'}}}
        InputLabelProps={{ style: { fontSize: '0.8em' }}}
        onChange={(e) => setFilters({ ...filters, level: e.target.value })}
        sx={{ marginTop: '-10px'}}

      />

      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filters.message}
        InputProps={{style:{ height: '35px',fontSize: '0.8em'}}}
        InputLabelProps={{ style: { fontSize: '0.8em' }}}
        onChange={(e) => setFilters({ ...filters, message: e.target.value })}
        sx={{ marginTop: '-2px'}}

      />
      
      <TextField
        label="Resource Id"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filters.resourceId}
        InputProps={{style:{ height: '35px',fontSize: '0.8em'}}}
        InputLabelProps={{ style: { fontSize: '0.8em' }}}
        onChange={(e) => setFilters({ ...filters, resourceId: e.target.value })}
        sx={{marginTop: '-2px'}}

      />
      
      <TextField
        label="timestamp"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filters.timestamp}
        InputProps={{style:{ height: '35px',fontSize: '0.8em'}}}
        InputLabelProps={{ style: { fontSize: '0.8em' }}}
        onChange={(e) => setFilters({ ...filters, timestamp: e.target.value })}
        sx={{marginTop: '-2px'}}

      />      
        
      <TextField
        label="Trace Id"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filters.traceId}
        InputProps={{style:{ height: '35px',fontSize: '0.8em'}}}
        InputLabelProps={{ style: { fontSize: '0.8em' }}}
        onChange={(e) => setFilters({ ...filters, traceId: e.target.value })}
        sx={{marginTop: '-2px'}}

      />

      <TextField
        label="Span Id"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filters.spanId}
        InputProps={{style:{ height: '35px',fontSize: '0.8em'}}}
        InputLabelProps={{ style: { fontSize: '0.8em' }}}
        onChange={(e) => setFilters({ ...filters, spanId: e.target.value })}
        sx={{marginTop: '-2px'}}

      />

      <TextField
        label="Commit"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filters.commit}
        InputProps={{style:{ height: '35px',fontSize: '0.8em'}}}
        InputLabelProps={{ style: { fontSize: '0.8em' }}}
        onChange={(e) => setFilters({ ...filters, commit: e.target.value })}
        sx={{marginTop: '-2px'}}

      />
       <TextField
        label="metadata.parentResourceId"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filters.parentResourceId}
        InputProps={{style:{ height: '35px',fontSize: '0.8em'}}}
        InputLabelProps={{ style: { fontSize: '0.8em' }}}
        onChange={(e) => setFilters({ ...filters, parentResourceId: e.target.value })}
        sx={{marginTop: '-2px'}}

      />

        <div style={{textAlign: 'center'}}>
        <Button variant="contained" onClick={handleFilter} sx={{ width: '28%', height:'25px', marginRight: '5px', fontSize: '11px' }}>
         Search
        </Button>
        <Button variant="contained" onClick={handleClear} sx={{ width: '28%',height:'25px', fontSize: '11px' }}>
         Clear
        </Button>
        </div>    
    </Box>
  );
};

export default FilterLogs;
