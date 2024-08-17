import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import './css/product.css'
import { MdPlayArrow } from 'react-icons/md';
import { TbCalendarCog } from "react-icons/tb";
import { FaTimesCircle } from 'react-icons/fa';
import { IoTime } from 'react-icons/io5';
import { SimplePagination } from '../components/Pagination';
import { AuthContext } from '../Provider/AuthProvider';



const AllProducts = () => {

    const {search, setSearch, setSearchType, searchType}= useContext(AuthContext)

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [uniqueStatus, setUniqueStatus] = useState({})
    const [selectedBrand, setSelectedBrand] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(100000)
    const [sort, setSort] = useState('')
    const [recent, setRecent] = useState('')
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)


   

    const handleReset = () => {
        setSearch('')
        setSelectedBrand('')
        setSelectedCategory('')
        setSearchType('')
        setMinPrice(0)
        setMaxValue(0)
        setMaxPrice(100000)
        setMinValue(0)
        setRecent('')
        setSort('')
    }

    console.log(currentPage)
    useEffect(() => {
        try {
            fetch(`http://localhost:5000/products?name=${search}&brandName=${selectedBrand}&categoryName=${selectedCategory}&maxPrice=${maxPrice}&minPrice=${minPrice}&sort=${sort}&sortByDate=${recent}&page=${currentPage}&limit=8`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data.products)
                    setCurrentPage(data.currentPage)
                    setTotalPages(data.totalPages)
                    setLoading(false)
                })
        }
        catch (error) {
            return <>
                {error}
            </>

        }
    }, [search, selectedBrand, selectedCategory, maxPrice, minPrice, sort, recent, currentPage])

    useEffect(() => {
        fetch(`http://localhost:5000/unique-values`)
            .then(res => res.json())
            .then(data => setUniqueStatus(data))
    }, [])

    const handleBrandChange = (event) => {
        const brand = event.target.value;
        setSelectedBrand(brand)
    };
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category)
    }


    const handleSet = () => {
        setMinPrice(minValue)
        setMaxPrice(maxValue)
    };


    const handleSortChange = (e) => {
        setSort(e.target.value)
    }

    //if data is loading return loading spinner

    if (loading) {
        return <div>
            loading....
        </div>
    }


    return (
        <div className='container mx-auto py-10'>

            {/* product area div */}

            {/* if no products available */}
            {
                products?.length === 0 && <div>
                    no products found
                </div>
            }

            <div className='flex flex-col lg:flex-row gap-10'>
                {/* Categorization item div */}
                <div className='lg:w-1/5 space-y-6'>
                   

                    {/* sorting div */}
                    <div className='flex items-center gap-2'>
                        <select onChange={handleSortChange} value={sort} name='sort' className="select select-bordered w-full max-w-xs">
                            <option value={''} disabled>Sort by price</option>
                            <option value={'asc'}>Low to High</option>
                            <option value={'des'}>High to Low</option>
                        </select>
                        <button onClick={() => setRecent("recent")} className='px-3 py-2 text-[12px] text-nowrap rounded-md bg-blue-500  text-white font-bold'>Newest first</button>
                    </div>

                    {/* price range customization div */}
                    <div>
                        <h1 className='text-[16px]  font-medium text-start text-gray-500'>Price Range</h1>
                        <div className=" flex flex-col justify-center items-start space-y-4">
                            <div className="flex space-x-4">
                                <div>
                                    <input
                                        type="number"
                                        value={minValue == 0 ? 'Min' : minValue}
                                        name='minValue'
                                        placeholder='Min'
                                        onChange={(e) => setMinValue(parseInt(e.target.value))}
                                        className="px-4 max-w-[90px] py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        min={0}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        value={maxValue !== 0 ? maxValue : 'Max'}
                                        name='maxValue'
                                        placeholder='Max'
                                        onChange={(e) => setMaxValue(parseInt(e.target.value))}
                                        className="px-4 max-w-[90px] py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        min={minValue}
                                    />
                                </div>
                                <button
                                    onClick={handleSet}
                                    className="text-xl p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    <MdPlayArrow />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* product brand name customization div */}
                    <div>
                        <h1 className='text-[16px]  font-medium text-start text-gray-500'>Brand Name</h1>
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
                                                    checked={selectedBrand === brand}
                                                    onChange={handleBrandChange}
                                                />
                                                <span className="text-start">{brand}</span>
                                            </label>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* category customization */}
                    <div>
                        <h1 className='text-[16px]  font-medium text-start text-gray-500'>Category</h1>
                        <div className='flex border overflow-y-auto flex-col gap-2 max-h-[140px] p-4'>
                            {
                                uniqueStatus?.uniqueCategories?.map((category, index) => (
                                    <div className='text-start hover:bg-base-300 py-1 pl-4' key={index}>
                                        <div className="form-control">
                                            <label className="cursor-pointer flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    className="radio radio-success"
                                                    value={category}
                                                    checked={selectedCategory === category}
                                                    onChange={handleCategoryChange}
                                                />
                                                <span className="text-start">{category}</span>
                                            </label>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={handleReset} className='px-4 py-2 bg-blue-500 rounded-md text-white font-bold'>Reset</button>

                </div>
                <div className='grid lg:w-4/5 grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        // single product card
                        products?.map((product) => <div className='productCard max-h-[380px] relative border rounded-md hover:shadow-md space-y-2 p-4 max-w-[300px] mx-auto' key={product._id}>
                            <img className='productImage h-[200px] w-[200px] object-cover object-center' src={product.productImage} alt={product.productName} />
                            <p className='absolute bg-green-500 rounded-full px-2 flex gap-1 items-center top-4 right-6 text-white'><FaStar className='text-yellow-300' />{product?.ratings}</p>
                            <h2 className='font-bold text-gray-500'>{product?.productName}</h2>
                            <p className='text-green-500 font-semibold'>${product?.price}</p>
                            <p className='text-gray-700'>{product?.category}</p>
                            <p className='flex items-center gap-2 justify-center'><TbCalendarCog /><span>{product?.creationDateTime.slice(0, 10)}</span><span> {product?.creationDateTime.slice(11, 16)}</span></p>
                        </div>)
                    }
                </div>

            </div>
            <div className='flex items-center justify-center pt-10'>
                <SimplePagination currentPage={currentPage} totalPages={totalPages} setTotalPages={setTotalPages} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
};

export default AllProducts;