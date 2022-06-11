import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'

import Helmet from '../../components/Helmet'
import ProductView from '../../components/productview/ProductView'
import Section, {SectionBody, SectionTitle} from '../../components/section/Section'
import ProductCard from '../../components/productCard/ProductCard'
import Grid from '../../components/Grid'

import productData from '../../assets/fake-data/products'
const Product = () => {
  
  const {slug} = useParams()

  const product = productData.getProductBySlug(slug)
 
  useEffect( () => {
    window.scroll(0,0)
  }, [product])



  return (
    <Helmet title= {product.title}>
      <Section>
        <SectionBody>
          <ProductView
            product = {product}
          />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>
          Khám Phá Thêm
        </SectionTitle>
          
        <SectionBody>
            <Grid 
              col = {4}
              mdCol = {2}
              smCol = {1}
              gap = {20}
            >
            {
              productData.getProducts(4).map( (item, index) => (
                <ProductCard
                  key={index}
                  img01 = {item.image01}
                  img02 = {item.image02}
                  title = {item.title}
                  price = {Number(item.price)}
                  slug = {item.slug}
                />
              ))
            }

            </Grid>

        </SectionBody>
      </Section>

      

    </Helmet>
  )
}

export default Product
