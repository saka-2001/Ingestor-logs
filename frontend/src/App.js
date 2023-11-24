import React, { useState } from 'react';
import SearchLogs from './searchlogs';
import FilterLogs from './filterlogs';
import FilterDateLogs from './filterDate';
import Output from './Output';

const App = () => {
  const [logs, setLogs] = useState([]);
  const [searchLogs, setSearchLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [dateFilteredLogs, setDateFilteredLogs] = useState([]);
  const handleSearch = async (logs) => {
    setSearchLogs(logs);    
  };

  const handleFilter = (logs) => {
    setFilteredLogs(logs);
  };

  const handleFilterByDate = (logs) => {
    setDateFilteredLogs(logs);
  };

  const handleClear = () => {
    setSearchLogs([]);
    setFilteredLogs([]);
    setDateFilteredLogs([]);
  };

  return (
    <div>      
    <div style={{ textAlign: 'center',border: '3px solid #333', background: '#f0f0f0', margin: 0, height: '80px', }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="search" style={{ width: '35px', height: '25px', position: 'relative', top: '2px'}}><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="search"><rect width="497" height="497" x="7.5" y="7.503" fill="#fff" rx="30"></rect><path fill="#676e87" d="M504.5 37.503v60H7.5v-60a29.998 29.998 0 0 1 30-30h437a29.998 29.998 0 0 1 30 30Z"></path><rect width="45" height="45" x="52.5" y="142.5" fill="#dedede" rx="7"></rect><rect width="45" height="45" x="52.5" y="232.5" fill="#dedede" rx="7"></rect><path fill="#dedede" d="m335.525 299.32 23.794-23.794 52.82 52.821-23.793 23.794z"></path><path fill="#dedede" d="M481.616 421.616a26.919 26.919 0 0 1-38.07 0l-67.096-67.097a3.365 3.365 0 0 1 0-4.759l33.31-33.31a3.365 3.365 0 0 1 4.759 0l67.097 67.097a26.919 26.919 0 0 1 0 38.069Z"></path><circle cx="297.082" cy="237.082" r="108.271" fill="#dedede"></circle><rect width="45" height="45" x="52.5" y="322.5" fill="#dedede" rx="7"></rect><rect width="45" height="45" x="52.5" y="412.5" fill="#dedede" rx="7"></rect><path fill="#595f74" d="m320.525 299.32 23.794-23.794 52.82 52.821-23.793 23.794z"></path><path fill="#4a4f60" d="m344.319 275.526-7.5 7.5 25.573 25.573a19.069 19.069 0 0 1 0 26.968l-2.809 2.81 13.763 13.762 23.794-23.793Z"></path><path fill="#ffcd85" d="M466.616 421.616a26.919 26.919 0 0 1-38.07 0l-67.096-67.097a3.365 3.365 0 0 1 0-4.759l33.31-33.31a3.365 3.365 0 0 1 4.759 0l67.097 67.097a26.919 26.919 0 0 1 0 38.069Z"></path><path fill="#ffc166" d="m466.616 383.547-67.097-67.097a3.365 3.365 0 0 0-4.759 0l-5.12 5.12 61.976 61.977a26.919 26.919 0 0 1 0 38.069 26.794 26.794 0 0 1-11.535 6.82 26.91 26.91 0 0 0 26.535-6.82 26.919 26.919 0 0 0 0-38.07Z"></path><circle cx="282.082" cy="237.082" r="108.271" fill="#676e87"></circle><path fill="#595f74" d="M358.641 160.523a108.015 108.015 0 0 0-84.059-31.45 108.27 108.27 0 0 1 0 216.019 108.27 108.27 0 0 0 84.06-184.57Z"></path><path fill="#d9f0ff" d="M337.59 292.593a78.503 78.503 0 1 1 0-111.02 78.589 78.589 0 0 1 0 111.02Z"></path><path fill="#272a33" d="M59.5 375h31a14.517 14.517 0 0 0 14.5-14.5v-31A14.517 14.517 0 0 0 90.5 315h-31A14.517 14.517 0 0 0 45 329.5v31A14.517 14.517 0 0 0 59.5 375Zm.5-45h30v30H60Zm222.082-6.953a85.965 85.965 0 1 0-60.815-25.15 85.736 85.736 0 0 0 60.815 25.15Zm-.844-90.547h-69.963a70.925 70.925 0 0 1 8.808-30h61.155a7.5 7.5 0 0 0 0-15h-49.96c.202-.207.391-.422.596-.627A71.006 71.006 0 0 1 332.291 287.29h-.001a70.966 70.966 0 0 1-120.413-39.79h69.361a7.5 7.5 0 0 0 0-15ZM114.627 46.927a7.5 7.5 0 1 0 7.5 7.5 7.5 7.5 0 0 0-7.5-7.5ZM137.127 255a7.5 7.5 0 0 0 7.5 7.5h24.545a115.834 115.834 0 0 0 175.75 71.82l10.707 10.709a10.872 10.872 0 0 0 .518 14.794l67.096 67.095a34.419 34.419 0 1 0 48.676-48.676l-67.097-67.096a10.873 10.873 0 0 0-14.792-.517l-10.708-10.708a115.775 115.775 0 0 0-179.103-144.702q-1.129 1.128-2.217 2.281h-53.375a7.5 7.5 0 0 0 0 15h41.365a115.853 115.853 0 0 0-19.156 75h-22.209a7.5 7.5 0 0 0-7.5 7.5Zm258.169 71.521.01-.009.009-.01 1.825-1.825 64.172 64.173a19.439 19.439 0 0 1 0 27.462 19.416 19.416 0 0 1-27.461 0l-64.173-64.173Zm-15.901-5.313-13.187 13.187-9.122-9.123q3.524-3.002 6.86-6.326 3.329-3.33 6.326-6.86Zm-168.57-155.382a100.772 100.772 0 1 1 .001 142.513 100.458 100.458 0 0 1 0-142.513ZM474.5 0h-437A37.542 37.542 0 0 0 0 37.5v437A37.542 37.542 0 0 0 37.5 512h437a37.542 37.542 0 0 0 37.5-37.5v-437A37.542 37.542 0 0 0 474.5 0ZM497 474.5a22.526 22.526 0 0 1-22.5 22.5h-437A22.526 22.526 0 0 1 15 474.5V105h482ZM497 90H15V37.5A22.526 22.526 0 0 1 37.5 15h437A22.526 22.526 0 0 1 497 37.5ZM84.627 46.927a7.5 7.5 0 1 0 7.5 7.5 7.5 7.5 0 0 0-7.5-7.5ZM59.5 285h31a14.517 14.517 0 0 0 14.5-14.5v-31A14.517 14.517 0 0 0 90.5 225h-31A14.517 14.517 0 0 0 45 239.5v31A14.517 14.517 0 0 0 59.5 285Zm.5-45h30v30H60Zm-.5 225h31a14.517 14.517 0 0 0 14.5-14.5v-31A14.517 14.517 0 0 0 90.5 405h-31A14.517 14.517 0 0 0 45 419.5v31A14.517 14.517 0 0 0 59.5 465Zm.5-45h30v30H60Zm-.5-225h31a14.517 14.517 0 0 0 14.5-14.5v-31A14.517 14.517 0 0 0 90.5 135h-31A14.517 14.517 0 0 0 45 149.5v31A14.517 14.517 0 0 0 59.5 195Zm.5-45h30v30H60Zm84.627 292.5H399.5a7.5 7.5 0 0 0 0-15H144.627a7.5 7.5 0 0 0 0 15Zm-90-395.573a7.5 7.5 0 1 0 7.5 7.5 7.5 7.5 0 0 0-7.5-7.5Zm90 305.573h46.611a7.5 7.5 0 0 0 0-15h-46.611a7.5 7.5 0 0 0 0 15Z"></path></svg></svg>
    <h1 style={{ display: 'inline-block',paddingBottom: '15px' }}>
     Log Search Application
    </h1>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row',marginLeft: '7px',marginTop:'27px'}}>

    <div style={{ flexGrow: 0, flexShrink: 1, flexBasis: '15%' }}>
      <SearchLogs onSearch={handleSearch} onClear={handleClear}/>
      <FilterDateLogs onFilter={handleFilterByDate} onClear={handleClear} />
    </div> 

    <div style={{ flexGrow: 0, flexShrink: 1, flexBasis: '11.5%' }}>
      <FilterLogs onFilter={handleFilter} onClear={handleClear} />
    </div>

    <div>
      <Output logs={(searchLogs && searchLogs.length > 0) ? searchLogs : ((filteredLogs && filteredLogs.length > 0) ? filteredLogs : (dateFilteredLogs && dateFilteredLogs.length > 0 ? dateFilteredLogs : []))} />
    </div>

  </div>
  </div>

  );
};

export default App;
