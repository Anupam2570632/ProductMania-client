import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/product/${params?.id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                console.log(data)
            })
    }, [params])

    const handleAddToCart = () => {
        // Logic to add the product to the cart
        console.log(`${product.productName} added to cart`);
    };

    const handleBuyNow = () => {
        // Logic to initiate the purchase process
        console.log(`Buying ${product.productName}`);
    };

    return (
        <div className="max-w-[1000px] mx-auto py-10 mt-10 bg-white rounded-xl shadow-md overflow-hidden ">
            <div className="md:flex items-center justify-center">
                <div className="md:shrink-0">
                    <img
                        className="h-[300px] w-[300px] object-cover object-center md:h-full md:w-48"
                        src={product?.productImage}
                        alt={product?.productName}
                    />
                </div>
                <div className="p-8 text-start">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {product?.brandName}
                    </div>
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                        {product?.productName}
                    </h2>
                    <p className="mt-2 text-gray-500">
                        {product?.description}
                    </p>
                    <div className="mt-4">
                        <span className="text-xl font-bold text-red-600">${product?.price}</span>
                        <span className="ml-2 text-sm text-gray-500">
                            Rating: {product?.ratings} ⭐
                        </span>
                    </div>
                    <div className="mt-6 flex space-x-4">
                        <button
                            onClick={handleAddToCart}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={handleBuyNow}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
