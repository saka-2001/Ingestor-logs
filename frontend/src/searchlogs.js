import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';


const SearchLogs = ({ onSearch, onClear}) => {
    const [searchText, setSearchText] = useState('');
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/regex-search?pattern=${searchText}`);
        console.log("Response:: ",response);
        onSearch(response.data.logs);       
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
    const handleClear = async () => {
        setSearchText('');  
        onClear();
      };    

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        paddingTop: '-1px',
        paddingRight:'8px',
        paddingBottom:'10px',
        paddingLeft:'8px',
        borderRadius: '8px',
        width: '190px',
        margin: '4px',
        marginTop : '-5px',
        height: '112px'
      }}
    >
       <div  style={{ textAlign: 'center'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="search" style={{ width: '15px', height: '15px', marginRight: '2px'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
      </svg><h3 style={{display: 'inline-block', textAlign: 'center', marginTop: '8px'}}>Search</h3>
      </div>     
       <TextField
        label="Search"
        variant="outlined"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{ style: { height: '35px', fontSize: '0.8em'}}}
        InputLabelProps={{ style: { fontSize: '0.8em' }}}
        style={{ marginTop: '-10px', marginBottom: '12px', width: '100%'}}
        />
        <div style={{textAlign: 'center'}}>
        <Button variant="contained" onClick={handleSearch} sx={{ width: '28%', height:'25px', marginRight: '5px', fontSize: '11px' }}>
        Search
        </Button>
        <Button variant="contained" onClick={handleClear} sx={{ width: '28%',height:'25px', fontSize: '11px' }}>
        Clear
        </Button>
        </div>
     

    </Box>
  );
};

export default SearchLogs;
