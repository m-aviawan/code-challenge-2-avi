import React from 'react'
import Now from '../../components/now'
import ProductsMain from '../../components/products'
import ProductsPhrase from '../../features/products/components/productsPhrase'
import HeroProducts from '../../features/products/components/heroProducts'
import AllCatalogDownloadBanner from '../../features/products/components/allCatalogDownloadBanner'
import Testimonials from '../../components/testimonials'

const ProductsPage = () => {
  return (
    <main className='flex flex-col'>
      <HeroProducts />
      <ProductsPhrase />
      <ProductsMain />
      <Now />
      <Testimonials />
      <AllCatalogDownloadBanner />
    </main>
  )
}

export default ProductsPage
