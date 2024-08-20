import React from 'react'
interface Params{
    product:string;
}
interface Props{
    params:Params
}

export default function ProductDetail(props:Props) {
    console.log("props:", props);
    const {params} = props;
  return (
    <div>trang chi tiet san pham : {params.product}</div>
  )
}
