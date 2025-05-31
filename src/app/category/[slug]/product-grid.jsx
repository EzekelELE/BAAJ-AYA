import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Heart } from 'lucide-react';

import { Button } from '@/components/atom/button';
import { Badge } from '@/components/atom/badge';

export default function ProductGrid({ products }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
      {products.map((product) => (
        <div key={product.id || product._id} className='group relative'>
          {/* Product Image */}
          <div className='relative aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100'>
            <Link href={`/product/${product.id || product._id}`}>
              <Image
                src={product.imagePath}
                alt={product.name || 'Product'}
                fill
                className='object-cover transition-transform group-hover:scale-105'
              />
            </Link>
          </div>

          {/* Product Info */}
          <div>
            <Link href={`/product/${product.id || product._id}`}>
              <h3 className='font-medium text-gray-900 hover:underline'>
                {product.name}
              </h3>
            </Link>
            <p className='text-sm text-gray-600 mt-1'>{product.category}</p>
            <div className='flex items-center justify-between mt-2'>
              <span className='font-bold'>
                ${parseFloat(product.price || 0).toFixed(2)}
              </span>
              <span className='text-xs text-gray-500'>
                Stock: {product.stock}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
