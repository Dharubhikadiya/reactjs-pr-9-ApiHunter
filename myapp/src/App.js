import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios, { all } from 'axios';

function App() {

  const [record, setRecord] = useState([]);
  const [alldata,setAlldata] = useState([]);

  useEffect(() => {

    axios.get(`https://dummyjson.com/products`).then((res)=>{
      setAlldata(res.data.products)
    }).catch((err)=>{
      console.log(err);
      return false
    })

    fetch(`https://dummyjson.com/users`)
      .then(res => res.json())
      .then(data => setRecord(data.users))
      .catch(err => console.log(err));
  }, [])

  console.log(record);
console.log(alldata);
  return (
   <body>
     <div className="App">
      <h1 className='p-4 fw-bold'>API Hunter(Fetch API)</h1>
      <div className='container'>
        <table class="table table-striped table-hover">
          <thead className='table-dark'>
            <tr className='p-4'>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>id</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>FirstName</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>MiddleName</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>LastName</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>Age</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>Gender</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>Email</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              record.map((val) => {
                return (
                  <tr>
                    <td className='py-3 px-3 border'>{val.id}</td>
                    <td className='py-3 px-3 border'>{val.firstName}</td>
                    <td className='py-3 px-3 border'>{val.maidenName}</td>
                    <td className='py-3 px-3 border'>{val.lastName}</td>
                    <td className='py-3 px-3 border'>{val.age}</td>
                    <td className='py-3 px-3 border'>{val.gender}</td>
                    <td className='py-3 px-3 border'>{val.email}</td>
                    <td className='py-3 px-3 border'>{val.phone}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <h1 className='p-4 fw-bold'>API Hunter(Axios Uses)</h1>
      <div className='container'> 
      <table className='table table-striped table-hover px-3'>
      <thead className='table-dark'>
            <tr className='p-4'>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>id</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>title</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>description</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>price</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>discountPercentage</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>rating</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>stock</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>brand</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>category</th>
              <th scope="col" className='py-4 px-3 fs-5 text-capitalize border'>thumbnail</th>
            </tr>
          </thead>
          <tbody>
            {
              alldata.map((val) => {
                return (
                  <tr className='text-dark'>
                    <td className='py-3 px-3 text-center border'>{val.id}</td>
                    <td className='py-3 px-3 text-center border'>{val.title}</td>
                    <td className='py-3 px-3 text-center border'>{val.description}</td>
                    <td className='py-3 px-3 text-center border'>{val.price}</td>
                    <td className='py-3 px-3 text-center border'>{val.discountPercentage}</td>
                    <td className='py-3 px-3 text-center border'>{val.rating}</td>
                    <td className='py-3 px-3 text-center border'>{val.stock}</td>
                    <td className='py-3 px-3 text-center border'>{val.brand}</td>
                    <td className='py-3 px-3 text-center border'>{val.category}</td>
                    <td>
                      <img src={val.thumbnail} width={170}></img>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
      </table>
      </div>
    </div>
   </body>
  );
}

export default App;
