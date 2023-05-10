const AddNew = () => {
    const addItemHandler =(e)=>{
        e.preventDefault()
        const form = e.target
        const photo = form.photo.value;
        const name = form.name.value;
        const company = form.company.value
        const price = form.price.value
        const newChocolate = {photo,name,company,price}
        console.log(newChocolate);
        fetch('http://localhost:5000/chocolates',{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newChocolate)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <form onSubmit={addItemHandler}>
            <div className="mb-6">
                <label   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
                <input name="photo" type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo_url"/>
            </div>
            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input name="name" type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
            </div>
            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country/Company</label>
                <input name="company" type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
            </div>
            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input name="price" type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
            </div>
          
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    );
};

export default AddNew;