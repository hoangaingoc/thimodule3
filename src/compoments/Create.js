import axios from "axios";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";


function Create() {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    const navigate = useNavigate();

    const submit = () => {
        let product = {
            title: title,
            price: price,
            description: description,
        }

        axios.post("http://localhost:3000/products", product).then(() => {
            alert("Thêm thành công");
            navigate("/");
        })
    }
    return (
        <>
            <div className="col-3 mt-5">
                <div className="card border-dark mb-3">
                    <div className="card-header">Thêm Sản Phẩm</div>
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
                        <button className="btn btn-primary mt-3" onClick={() => {
                            submit()
                        }}>Thêm
                        </button>
                        <Link to={'/'} className="btn btn-primary mt-3 ml-3">Trở lại</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Create;