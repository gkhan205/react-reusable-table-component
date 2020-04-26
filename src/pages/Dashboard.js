import React from 'react';

import Table from '../components/Table';
import { data } from './mockData';
import { tableConstants } from './tableConstant';


const Dashboard = () => {

  const handleEdit = (item) => () => {
    // write your logic
    alert(JSON.stringify(item))
  }

  return (
    <div className='row'>
      <div className='col-sm-6'>
        <h4>Default Table</h4>
        <Table cols={tableConstants(handleEdit)} data={data} />
      </div>


      <div className='col-sm-6'>

        <h4>Dark Table</h4>
        <Table cols={tableConstants(handleEdit)} data={data} isDark />
      </div>

      <div className='col-sm-6'>
        <h4>Borderless Table</h4>
        <Table cols={tableConstants(handleEdit)} data={data} bordered={false} />
      </div>

      <div className='col-sm-6'>
        <h4>Striped Table</h4>
        <Table cols={tableConstants(handleEdit)} data={data} striped />
      </div>

      <div className='col-sm-6'>
        <h4>Hoverable Table</h4>
        <Table cols={tableConstants(handleEdit)} data={data} hoverable />
      </div>
    </div >

  )
}

export default Dashboard;