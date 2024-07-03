import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './assets/data';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="w-[90%] bg-red-100">
        <p className='text-xl'>Realtime Search</p>
      <div className="">
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
      </div>
      <div className="w-[90%]">
        <Table striped bordered hover className="w-full sm:w-1/2 md:w-3/4">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Product</th>
              <th>Movie</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.first_name.toLowerCase().includes(search);
            }).map((ele, index) => {
              return (
                <tr key={index}>
                  <td>{ele.id}</td>
                  <td>{ele.first_name}</td>
                  <td>{ele.last_name}</td>
                  <td>{ele.city}</td>
                  <td>{ele.product}</td>
                  <td>{ele.movie}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
