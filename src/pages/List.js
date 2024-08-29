import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';


function List() {
  let [product, setProduct] = useState([]);
    let [showModal, setShowModal] = useState(false);
    let [currentId, setCurrentId] = useState(null);
  const getList = () => {
    axios.get("http://localhost:3000/products").then((res) => {
      let data = res.data;
      setProduct(data);
    })
  }
  useEffect(() => {
    getList();
  }, []);


    const handleDelete = () => {
        axios.delete(`http://localhost:3000/products/${currentId}`).then(() => {
            alert("Deleted");
            getList();
            setShowModal(false);
        });
    };

    const handleShowModal = (id) => {
        setCurrentId(id);
        setShowModal(true);
    };

  return (
      <>
          <div className={"container-fuild"}>
              <h2 align={"center"}>DANH SÁCH SẢN PHẨM</h2>
              <div className="row mb-2">
                  <button className="btn btn-outline-success"><Link to={'create'}>Thêm mới</Link></button>
                  <br/>
              </div>
              <table className={'tableStyle'}>
                  <tr>
                      <th className={'thTdStyle'} align={"center"}>#</th>
                      <th className={'thTdStyle'} align={"center"}>Tên sản phẩm</th>
                      <th className={'thTdStyle'} align={"center"}>Mô tả</th>
                      <th className={'thTdStyle'} align={"center"}>Giá</th>
                      <th className={'thTdStyle'} align={"center"} colSpan={2}></th>
                  </tr>
                  {
                      product.map((item) => (
                          <>
                              <tr>
                                  <td className={'thTdStyle'}>{item.id}</td>
                                  <td className={'thTdStyle'}><Link to={'/detail/'+item.id}>{item.title}</Link></td>
                                  <td className={'thTdStyle'}>{item.description}</td>
                                  <td className={'thTdStyle'}>{item.price}</td>
                                  <td className={'thTdStyle'} align={"center"}>
                                      <button
                                          onClick={() => handleShowModal(item.id)}
                                          className="btn btn-primary"
                                      >Delete
                                      </button>
                                  </td>
                                  <td className={'thTdStyle'} align={"center"}><Link
                                      to={`/update/${item.id}`}>Update</Link></td>
                              </tr>

                          </>
                      ))
                  }
              </table>
          </div>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Body>Bạn chắc chắn muốn xóa sản phẩm này?</Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                      Cancel
                  </Button>
                  <Button variant="primary" onClick={handleDelete}>
                      OK
                  </Button>
              </Modal.Footer>
          </Modal>
      </>
  );
}

export default List;