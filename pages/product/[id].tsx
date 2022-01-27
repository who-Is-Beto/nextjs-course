import React from 'react'
import { GetStaticProps } from 'next'

export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => ({
    params: {
      id,
    },
  }))

  return {
    paths,
    // Incremental static generation
    // 404 for everything else
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(`http://localhost:3000/api/details/${id}`)
  type Response = {
    data: TProduct
  }
  const product: Response = await response.json()
  const { data } = product
  return {
    props: {
      product: data,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <section>
      <h1>Página producto: {product.name}</h1>
      <p>precio producto: {product.price}</p>
    </section>
  )
}

export default ProductPage
