import React from 'react';
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const ChocolateData = ({ chocolate,chocolates, setChocolate }) => {
    const { _id, photo, name, company, price } = chocolate

    const deleteHandler = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/chocolates/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            const remaining = chocolates.filter(choco=> choco._id !== id)
                            setChocolate(remaining)
                        }
                    })
            }
        })



    }
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img style={{ width: '100px' }} src={photo} alt="" />
            </th>
            <td className="px-6 py-4">
                {name}
            </td>
            <td className="px-6 py-4">
                {company}
            </td>
            <td className="px-6 py-4">
                {price}
            </td>
            <td className="px-6 py-4 space-x-8">
                <Link to={`/edit/${_id}`} >
                    <button className='bg-red-100 p-4 rounded-lg'>
                        <AiFillEdit size={33}></AiFillEdit>
                    </button>
                </Link>

                <button onClick={() => deleteHandler(_id)} className='bg-red-100 p-4 rounded-lg'>
                    <AiOutlineClose size={33}></AiOutlineClose>
                </button>

            </td>
        </tr>
    );
};

export default ChocolateData;