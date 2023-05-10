import { useEffect, useState } from 'react'
import {AiFillEdit,AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ChocolateData from './components/ChocolateData'
function App() {
  const [chocolates, setChocolate]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/chocolates')
    .then(res=>res.json())
    .then(data=>setChocolate(data))
  },[])

  return (
      <div className="relative overflow-x-auto mx-7 className=">
        <Link   className='bg-red-100 px-4 py-2' to='/add_new_chocolate'>Add New chocolate</Link>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  mt-44">
          <thead className="text-xs  uppercase my-20 py-56 ">
            <tr className="">
              <th  scope="col" className="">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              chocolates.map(chocolate=> <ChocolateData 
                key={chocolate._id} 
                chocolate={chocolate}
                chocolates={chocolates}
                setChocolate={setChocolate}
                ></ChocolateData>)
            }
          </tbody>
        </table>
      </div>

  )
}

export default App
