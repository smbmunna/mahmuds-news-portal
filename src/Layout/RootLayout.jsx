import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";


const RootLayout= ()=>{

    return (
        <div className="max-w-5xl mx-auto flex flex-col items-center">
            <Navbar/>
            <Outlet/>
        </div>
    )

}


export default RootLayout; 