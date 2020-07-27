import React, { useState, useEffect } from 'react';
import './App.css';
import CalendarMore from './CalendarMore'
import SexChart from './SexChart/SexChart'
import FeatureDay from './FeatureDay'
import FeatureDayTwo from './FeatureDayTwo/demo'
import Copy from 'react-copy';
import './styles/main.less'
import './AppLess.less'
import { Button } from 'antd';
import numeral from 'numeral'
function App() {

  return (
    <div className='container' >
      <div className='test-less'>xxx</div>
      <Copy textToBeCopied={`1231.23`}>
        <Button type='primary'>
          Copy the text please please
        </Button>
      </Copy>
      {numeral(2123123 / 10000).format('0,0.00')}
      <h3> 多选日期组件, 输出为数组, 支持antd的form表单</h3>
      <h4>多选月份</h4>
      <p>支持传入可选月份参数,</p>
      <CalendarMore />
      <h4>多选日期</h4>
      <p></p>
      <FeatureDayTwo />
      <FeatureDay />
      <h3>支持div下载为图片</h3>
      <SexChart />

    </div >

  );
}

export default App;
