import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const HomePage = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  const getAvocado = async (): Promise<void> => {
    fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data }) => setProducts(data))
  }

  useEffect((): void => {
    getAvocado()
  }, [])
  return (
    <div>
      <div>Platzi and Next.js!</div>
      {products.map((product: TProduct) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <p>{product.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default HomePage
