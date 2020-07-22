import React, { useState, useEffect } from 'react';
import './App.css';
import CalendarMore from './CalendarMore'
import SexChart from './SexChart/SexChart'
function App() {

  return (
    <div className='container' >
      <h1>下载</h1>
      <SexChart />
      <h2>多选日期组件</h2>
      <CalendarMore />
    </div>

  );
}

export default App;
