import React from 'react'

import {Link} from 'react-router-dom'

import Helmet from '../../components/Helmet'
import HeroSlider from '../../components/heroSlider/HeroSlider'
import Section, {SectionTitle, SectionBody} from '../../components/section/Section'
import PolicyCard from '../../components/policyCard/PolicyCard'
import Grid from '../../components/Grid'

import heroSliderData from '../../assets/fake-data/hero-slider'
import policy from '../../assets/fake-data/policy'
import productData from '../../assets/fake-data/products'
import ProductCard from '../../components/productCard/ProductCard'
import banner from '../../assets/images/banner.png'
const Home = () => {
  return (
    <Helmet title = "Trang chủ">
      <HeroSlider
        data = {heroSliderData}
        control = {true}
      />

      <Section>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              policy.map((item, index) => (
                <Link to='/policy' key={index}>
                  <PolicyCard 
                    name = {item.name}
                    description = {item.description}
                    icon = {item.icon}
                  />
                </Link>
              ))
            }

          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>
          Top sản phẩm bán chạy trong tuần
        </SectionTitle>

        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          > 
              {productData.getProducts(8).map( (item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  title={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))}
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>
          Sản phẩm mới
        </SectionTitle>

        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          > 
              {productData.getProducts(8).map( (item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  title={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))}
          </Grid>
        </SectionBody>
      </Section>


      <Section>
        <SectionBody>
          <Link to='/catalog'>
            <img src={banner} alt="" style={{width: '100%'}} />
          
          </Link>
        </SectionBody>
      </Section>


      <Section>
        <SectionTitle>
          Sản phẩm phổ biến nhất
        </SectionTitle>

        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          > 
              {productData.getProducts(8).map( (item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  title={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))}
          </Grid>
        </SectionBody>
      </Section>



    </Helmet>
  )
}

export default Home
