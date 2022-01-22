import React from 'react'
import Link from 'next/link'

const ProductCard = ({
  name,
  image,
  price,
  id,
}: TProduct): React.ReactElement => {
  return (
    <Link href={'/product/[key]'} as={`/product/${id}`} passHref>
      <a>
        <div>
          <h1>{name}</h1>
          <img src={image} alt={name} />
          <p>{price}</p>
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
