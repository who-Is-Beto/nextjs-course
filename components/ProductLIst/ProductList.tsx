import React, { useContext, useEffect } from 'react'
import { ActionTypes } from 'store/ActionTypes'
import { StoreContext } from 'store/StoreProvider'
import Link from 'next/link'
import ProductCard from '@components/ProductCard/ProductCard'

const ProductList: React.FC = (): React.ReactElement => {
  const [store, dispatch] = useContext(StoreContext)
  const { products } = store

  const getAvocado = async (): Promise<void> => {
    fetch('/api/avo')
      .then((res: Response) => res.json())
      .then(({ data }): void =>
        dispatch({ type: ActionTypes.FETCH_ALL_DATA, payload: data })
      )
      .catch((): void => alert('Error fetching data :c'))
  }

  useEffect((): void => {
    getAvocado()
  }, [])
  return (
    <>
      {products.map(
        (product: TProduct): JSX.Element => (
          <ProductCard key={product.id} {...product} />
        )
      )}
    </>
  )
}

export default ProductList
