import React from 'react'
import ProductList from '@components/ProductLIst/ProductList'

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage: React.ReactNode = ({
  productList,
}: any): React.ReactElement => {
  return (
    <>
      <ProductList productList={productList} />
    </>
  )
}

export default HomePage
