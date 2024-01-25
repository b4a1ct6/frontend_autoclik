"use client"
import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/slices/productSlice";
import Image from "next/image";
import Markdown from 'react-markdown'

export default function strapi_test(){

    const dispatch = useDispatch<any>()
    const [product_data, setProduct_data] = useState<any>([])

    useEffect(() =>{
        dispatch(fetchProducts()).then((res:any) =>{
            setProduct_data(res.payload.data)
        }) 
    },[dispatch])

    return(
        <React.Fragment>
            <CssBaseline />

            {product_data.map((row:any, index:number) =>(
                <>
                <div>
                    PRODUCT NAME : {row.attributes.product_name}
                </div>
                <Image src={`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}${row.attributes.product_img.data.attributes.url}`} width={500} height={500} alt={""} />
                <div>
                    <Markdown>{row.attributes.product_description}</Markdown>
                    <div>
                    price : {row.attributes.product_price}
                    </div>
                  
                    <div>
                    BRAND : {row.attributes.product_brand.data?.attributes.brand_name}
                    </div>
                    <div>
                    DIAMETER : {row.attributes.product_diameter.data?.attributes.diameter_name}
                    </div>
                    <div>
                    WIDTH : {row.attributes.product_width.data?.attributes.width_name}
                    </div>
                    <div>
                    RATIO : {row.attributes.product_ratio.data?.attributes.ratio_name}
                    </div>
                    <div>
                    ENGINEFLUIDTYPE : {row.attributes.product_enginefluidtype.data?.attributes.enginefluidtype_name}
                    </div>
                    <div>
                    TYPESOFENGINEOIL : {row.attributes.product_typesofengineoil.data?.attributes.typesofengineoil_name}
                    </div>
        
                </div>
                </>
            ))}


        </React.Fragment>
    )
}