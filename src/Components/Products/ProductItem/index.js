import React from 'react'
import { 
  Main,
  ImgCont,
  ProductImg,
  ProductTitle,
  ProductDetails,
  ProductPrice,
  ProductNavigate,
} from './productItemElements'
import Pencil from './pencil.jpg'
import { useNavigate } from 'react-router-dom'

const ProductItem = () => {
  
  const navigate = useNavigate()
  return (
    <Main>
      <ImgCont>
        <ProductImg onClick={()=>navigate("/products")} src={Pencil}/>
      </ImgCont>
      <ProductTitle>Ticonderoga Wood case Pencil</ProductTitle>
      <ProductDetails>
        <ProductPrice>$23</ProductPrice>
        <ProductNavigate onClick={()=>navigate("/products")}>Get now</ProductNavigate>
      </ProductDetails>
    </Main>
  )
}

export default ProductItem
