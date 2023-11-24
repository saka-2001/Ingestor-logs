import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios'

const FilterDateLogs = ({ onFilter, onClear }) => {
  const [filters, setFilters] = useState({  
    startDate: '',
    endDate: '',
  });

  const handleFilter = async () => {
    try {
      console.log("start date ",filters.startDate)
      const response = await axios.get(`http://127.0.0.1:3000/filter-logs-by-date`, {
        params: {
          start_date: filters.startDate,
          end_date: filters.endDate,
        },
      });
      console.log('Response filter by Date :: ', response);
      onFilter(response.data.logs);
    } catch (error) {
      console.error('Error fetching date filter results:', error);
    } 
  };
  const handleClear = async () => {   
    setFilters({
      startDate: '',
      endDate: '',
    });
    onClear();
      console.log('Error fetching search results:');    
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
        marginTop: '15px'           
       }}
    >
      <h4 style={{ textAlign: 'center', marginBottom: '16px', marginTop: '8px' }}>Filter By Date Range</h4>

      <TextField
        id="startDate"
        label="Start Date"
        type="datetime-local"
        value={filters.startDate}
        InputProps={{ style: { height: '35px', fontSize: '0.8em' } }}
        InputLabelProps={{ style: { fontSize: '0.8em'}, shrink: true}}
        onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
        required
        sx={{ marginTop: '-3px', marginBottom: '16px', width: '100%'}}     
      />

    <TextField
      id="endDate"
      label="End Date"
      type="datetime-local"
      value={filters.endDate}
      InputProps={{ style: { height: '35px', fontSize: '0.8em' } }}
      InputLabelProps={{ style: {fontSize: '0.8em'}, shrink: true}}
      onChange={(e) => {
      const endDateValue = e.target.value;
      const startDateValue = filters.startDate;

      if (!endDateValue) {
        setFilters({ ...filters, endDate: endDateValue });
        return;
      }  
      const startDate = new Date(startDateValue);
      const endDate = new Date(endDateValue);

      if (endDate >= startDate) {
        setFilters({ ...filters, endDate: endDateValue });
      } else {
        console.error('End date must be greater than or equal to start date.');
      }
      }}
      required
      sx={{ marginBottom: '11px', width: '100%' }}

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

export default FilterDateLogs;
