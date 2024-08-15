import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import './css/product.css'


const AllProducts = () => {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [uniqueStatus, setUniqueStatus] = useState({})
    const [selectedBrand, setSelectedBrand] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.searchValue.value)
    }


    useEffect(() => {
        fetch(`http://localhost:5000/products?name=${search}&brandName=${selectedBrand}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data)
            })
    }, [search])

    useEffect(() => {
        fetch(`http://localhost:5000/unique-values`)
            .then(res => res.json())
            .then(data => setUniqueStatus(data))
    }, [])

    const handleBrandChange = (event) => {
        const brand = event.target.value;
        setSelectedBrand(brand)

    };

    console.log(uniqueStatus)

    return (
        <div className='container mx-auto'>
            {/* search box div */}
            <div className='p-4 max-w-[300px] mx-auto'>
                <label className="input input-bordered flex items-center gap-2">
                    <form onSubmit={handleSearch}>
                        <input type="text" name='searchValue' className="grow" placeholder="Search" />
                        <button type='submit'></button>
                    </form>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-5 w-5 opacity-80">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>

            {/* product area div */}

            {/* if no products available */}
            {
                products.length === 0 && <div>
                    no products found
                </div>
            }
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='lg:w-1/5 '>
                    <h1>Brand Name</h1>
                    <div className='flex border overflow-y-auto flex-col gap-2 max-h-[140px] p-4'>
                        {
                            uniqueStatus?.uniqueBrands?.map((brand, index) => (
                                <div className='text-start hover:bg-base-300 py-1 pl-4' key={index}>
                                    <div className="form-control">
                                        <label className="cursor-pointer flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="brand"
                                                className="radio radio-success"
                                                value={brand}
                                                onChange={(e) => handleBrandChange(e)}
                                            />
                                            <span className="text-start">{brand}</span>
                                        </label>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className='grid lg:w-4/5 grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        // single product card
                        products.map((product) => <div className='productCard relative border rounded-md hover:shadow-md space-y-2 p-4 max-w-[300px] mx-auto' key={product._id}>
                            <img className='productImage h-[300px] w-[300px] object-cover object-center' src={product.productImage} alt={product.productName} />
                            <p className='absolute bg-green-500 rounded-full px-2 flex gap-1 items-center top-4 right-6 text-white'><FaStar className='text-yellow-300' />{product?.ratings}</p>
                            <h2 className='font-bold text-gray-500'>{product?.productName}</h2>
                            <p className='text-green-500 font-semibold'>${product?.price}</p>
                            <p className='text-gray-700'>{product?.category}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;