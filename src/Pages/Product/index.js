import React, { useEffect, useState } from 'react'
import {
    Main,
    HeroSection,
    TextCont,
    TextHead,
    TextPara,
    ProductSection,
    Sidebar,
    Search,
    SidebarUl,
    SidebarLi,
    ProductCont,
    ProductList,
    ProductListCont,
    ImgCont,
    ProductImg,
    ProductTitle,
    ProductDetails,
    ProductPrice,
    ProductNavigate,
    SearchCont,
} from './productElements'
import Pencil from './Images/pencil.jpg'
import ProductDetail from '../../Components/Products/ProductDetail'
import axios from 'axios'
import Cookies from 'js-cookie';


const Products = () => {


    const [products, setProducts] = useState()
    const [detailCont, setDetailCont] = useState(false)
    const [itemData, setItemData] = useState()

    const handleProduct = async () => {
        axios.get("http://localhost:8080/api/v1/jobs/all", {
            headers: {
                "auth-token": Cookies.get("accessToken")
            }
        })
            .then((res) => {
                setProducts(res.data)
            })
    }

    useEffect(() => {
        handleProduct();
    }, [])

    const handleItem = (prop) =>{
        setDetailCont(true)
        setItemData(prop)
    }

    return (
        <Main>
            <HeroSection>
                <TextCont>
                    <TextHead>
                        FIND, CHOOSE AND MAKE IT YOURS
                    </TextHead>
                    <TextPara>
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Sapiente velit ipsa consequuntur
                        cupiditate distinctio deserunt culpa sequi maiores
                        aliquid, officia nemo magni eligendi dolorum sint
                        aperiam quaerat cum facere? Dolorum!
                    </TextPara>
                </TextCont>
            </HeroSection>
            <ProductSection>
                <Sidebar>
                    <SearchCont>
                        <Search type="text" />
                    </SearchCont>
                    <SidebarUl>
                        <SidebarLi>
                            ALL CATEGORIES
                        </SidebarLi>
                        <SidebarLi>
                            HOMEGARDEN AND TOOLS
                        </SidebarLi>
                        <SidebarLi>
                            PET SUPPLIES
                        </SidebarLi>
                        <SidebarLi>
                            FOOD AND GROCERY
                        </SidebarLi>
                        <SidebarLi>
                            BEAUTY AND HEALTH
                        </SidebarLi>
                        <SidebarLi>
                            KID TOYS
                        </SidebarLi>
                    </SidebarUl>
                </Sidebar>

                <ProductCont>
                    <ProductList>
                        {products?.map((item) => {
                            return (
                                <ProductListCont key={item._id}>
                                    <ImgCont>
                                        <ProductImg src={Pencil} onClick={() => handleItem(item)} />
                                    </ImgCont>
                                    <ProductTitle>{item.title}</ProductTitle>
                                    <ProductDetails>
                                        <ProductPrice>${item.price}</ProductPrice>
                                        <ProductNavigate onClick={() => handleItem(item)}>Get now</ProductNavigate>
                                    </ProductDetails>
                                </ProductListCont>
                            )
                        })
                        }
                    </ProductList>
                </ProductCont>
                {detailCont ?
                    <ProductDetail details={setDetailCont} item={itemData} />
                    :
                    null

                }
            </ProductSection>
        </Main>
    )
}

export default Products
