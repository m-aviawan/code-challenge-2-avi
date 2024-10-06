import React from 'react'
import Now from '../components/now'
import ProductsMain from '../components/products'
import ProductsPhrase from '../features/products/components/productsPhrase'
import HeroProducts from '../features/products/components/heroProducts'
import AllCatalogDownloadBanner from '../features/products/components/allCatalogDownloadBanner'

const ProductsPage = () => {
  return (
    <main className='flex flex-col'>
      <HeroProducts />
      <ProductsPhrase />
      <ProductsMain />
      <Now />
      <AllCatalogDownloadBanner />
    </main>
  )
}

export default ProductsPage
