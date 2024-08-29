import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function Update() {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const idUpdate = params.id;

    useEffect(() => {
        if (idUpdate) {
            axios.get(`http://localhost:3000/products/${idUpdate}`)
                .then((res) => {
                    const data = res.data;
                    setTitle(data.title);
                    setPrice(data.price);
                    setDescription(data.description);
                })
                .catch((error) => alert("Error fetching product data: ", error));
        }
    }, [idUpdate]);

    const submit = () => {
        // Create the product object with updated information and URLs for images
        let product = {
            title,
            price,
            description,
        };


        axios.put(`http://localhost:3000/products/${idUpdate}`, product)
            .then(() => {
                alert("Update Success");
                navigate("/");
            })
            .catch((error) => {
                alert("Update error: ", error);
            });
    };

    return (
        <>
            <div className="col-3 mt-3">
            <div className="card border-dark mb-3">
                <div className="card-header">Sửa Sản Phẩm</div>
                <div className="card-body text-dark">

                    <label>Tên sản phẩm</label><br/>
                    <input
                        value={title}
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                    /><br/>
                    <label>Giá</label><br/>
                    <input
                        value={price}
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                    /><br/>
                    <label>Mô tả</label><br/>
                    <textarea
                        rows="4"
                        value={description}
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                    /><br/>
                    <button className="btn btn-primary mt-3" onClick={submit}>Sửa</button>
                    <Link to={'/'} className="btn btn-primary mt-3 ml-3">Trở lại</Link>
                </div>
            </div>
            </div>
        </>
    );
}

