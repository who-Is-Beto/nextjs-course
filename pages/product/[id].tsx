import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = (): React.ReactElement => {
  const [product, setProduct] = useState<TProduct>({
    id: '',
    name: '',
    sku: '',
    price: 0,
    image: '',
    attributes: {
      description: '',
      shape: '',
      hardiness: '',
      taste: '',
    },
  })
  const BASE_API = 'http://localhost:3000/api/details/'
  const {
    query: { id },
  } = useRouter()

  const getAvocado = async (): Promise<void> => {
    await fetch(`${BASE_API}${id}`)
      .then((res) => res.json())
      .then(({ data }) => setProduct(data))
  }

  useEffect((): void => {
    if (id) {
      getAvocado()
    }
  }, [id])

  return (
    <section>
      <h1>Página producto: {product.name}</h1>
      <p>precio producto: {product.price}</p>
    </section>
  )
}

export default ProductPage
