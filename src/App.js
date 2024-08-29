import {Route, Routes} from "react-router-dom";
import List from "./pages/List";
import Create from "./compoments/Create";
import Update from "./compoments/Update";
import "./App.css"
import DetailProduct from "./pages/DetailProduct";

function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<List/>}></Route>
                <Route path="detail/:id" element={<DetailProduct/>}/>
                <Route path="create" element={<Create/>}/>
                <Route path="update/:id" element={<Update/>}/>
            </Routes>
        </>
    );
}

export default App;