import React, { useEffect, useState } from 'react'
import {
  Main,
  DetailClose,
  Close,
  CloseStyle,
  DetailSection,
  DetailImageCont,
  DetailImage,
  FuncCont,
  DetailCont,
  DetailHead,
  DetailBreadcrumb,
  BreadcrumbItem,
  DetailPara,
  DetailUl,
  DetailLi,
  Cont,
  Input,
  PricingCont,
  Price,
  ContinueButton,
} from './productDetailElements'
import { IoMdClose, IoMdArrowDropdown } from 'react-icons/io'
import ProductImg from '../ProductItem/pencil.jpg'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { ImTruck } from 'react-icons/im'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductDetail = (props) => {

  const [itemData, setItemData] = useState({
    userId: Cookies.get("uId"),
    jobId: props.item._id
  })
  const [fav, setFav] = useState()
  const [products, setProducts] = useState()
  const [quantity, setQuantity] = useState(1)

  const navigate = useNavigate()

  const handleProduct = async () => {
    axios.get("http://localhost:8080/api/v1/jobs/all", {
      headers: {
        "auth-token": Cookies.get("accessToken")
      }
    })
      .then((res) => {
        setProducts(res.data)
        console.log(saved)
      })
  }

  const username = Cookies.get("uId")

  const {saved} = username;

  useEffect(() => {
    handleProduct();
  }, [])

  const handleSave = async () => {
    axios.post("http://localhost:8080/api/v1/users/saveJob",
    itemData
    )
      .then((res) => {
        if (res.status === 200) {
          setFav(true)
        } else {
          return res
        }
      })
  }

  const handleNavigate = () => {
    navigate('/shipping', {
      state: props.item
    })
  }



  return (
    <Main>
      <DetailClose>
        <Close><IoMdClose style={CloseStyle} onClick={() => props.details(false)} /></Close>
      </DetailClose>
      <DetailSection>
        <DetailImageCont>
          <FuncCont>
            {/* {products.saved === true ?
              <MdFavorite style={{ cursor: 'pointer' }} onClick={handleSave} />
              :
              <MdFavoriteBorder style={{ cursor: 'pointer' }} onClick={handleSave} />
            } */}
          </FuncCont>
          <DetailImage src={ProductImg} />
        </DetailImageCont>
        <DetailCont>
          <DetailHead>{props.item.title}</DetailHead>
          <DetailBreadcrumb>
            <BreadcrumbItem style={{ color: "rgb(255, 153, 0)" }}>Description</BreadcrumbItem>
            <BreadcrumbItem>More Info</BreadcrumbItem>
          </DetailBreadcrumb>
          <DetailPara>
            {props.item.desc}
          </DetailPara>
          <Cont>
          <DetailUl>
            <DetailLi>Size <IoMdArrowDropdown /></DetailLi>
            <DetailLi>Color <IoMdArrowDropdown /></DetailLi>
          </DetailUl>
          
            <DetailPara>Quantity : <Input sm type='number' defaultValue={1} min={1} onChange={(e) =>setQuantity(e.target.value)}/></DetailPara>
          </Cont>
          <PricingCont>
            <Price>${props.item.price * quantity  }.00</Price>
            <ContinueButton onClick={handleNavigate}>
              Continue Shipping
            </ContinueButton>
          </PricingCont>
        </DetailCont>

      </DetailSection>
    </Main>
  )
}

export default ProductDetail
