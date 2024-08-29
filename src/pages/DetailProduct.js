import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function DetailProduct() {
    const [data, setData] = useState([]);
    let {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:3000/products/"+id).then(res => {
            setData(res.data)
        })
    },[])
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Chi tiết sản phẩm
                </div>
                <div className="card-body">
                    <h5 className="card-title">Tên sản phẩm: {data.title}</h5>
                    <p className="card-text">Mô tả: {data.description}</p>
                    <p className="card-text">Giá: {data.price} VND</p>
                    <Link to={'/'} className="btn btn-primary">Trở lại</Link>
                </div>
            </div>
        </>
    )
}