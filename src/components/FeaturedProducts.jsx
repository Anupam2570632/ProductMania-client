import { Spinner } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { TbCalendarCog } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://product-mania-server-1.vercel.app/products?sortByRating=${'des'}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <div className='flex items-center justify-center py-10'>
            <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>

    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-600 py-6'>Featured Product</h1>
            <div className='grid lg:w-4/5 grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    // single product card
                    products?.map((product) => <Link to={`/productDetails/${product._id}`} className='productCard max-h-[450px] relative border rounded-md hover:shadow-md space-y-2 p-4 max-w-[300px] mx-auto' key={product._id}>
                        <img className='productImage h-[200px] w-[200px] object-cover object-center' src={product.productImage} alt={product.productName} />
                        <p className='absolute bg-green-500 rounded-full px-2 flex gap-1 items-center top-4 right-6 text-white'><FaStar className='text-yellow-300' />{product?.ratings}</p>
                        <p className='absolute bg-green-500 rounded-full px-2 top-12 right-6 text-white'>{product?.brandName}</p>
                        <h2 className='font-bold text-gray-500'>{product?.productName}</h2>
                        <p className='text-green-500 font-semibold'>${product?.price}</p>
                        <p className='text-gray-700'>{product?.category}</p>
                        <p className='flex items-center gap-2 justify-center'><TbCalendarCog /><span>{product?.creationDateTime.slice(0, 10)}</span><span> {product?.creationDateTime.slice(11, 16)}</span></p>
                    </Link>)
                }
            </div>

            <Link to={'/products'}>
                <button className='px-4 py-2 my-10 rounded-md bg-blue-500 text-white font-bold'>
                    See All
                </button>
            </Link>

        </div>
    );
};

export default FeaturedProducts;