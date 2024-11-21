import { AiOutlineX } from "react-icons/ai";
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineAlignCenter } from "react-icons/ai";

const NavBar = () => {
   const [open, setOpen] = useState(false)
   
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About Us', id: 2},
        { path: '/contact', name: 'Contact Us', id: 3 },
        { path: '/blog', name: 'Blog', id: 4 },
        { path: '/products', name: 'Products', id: 5 }
    ];
   
    return (
        <nav>
         <div className="md:hidden" onClick={()=> setOpen(!open)}>
            {
                open === true ? <AiOutlineX></AiOutlineX> :  <AiOutlineAlignCenter className="text-3xl " ></AiOutlineAlignCenter >
            }
        
         </div>
          <ul className="md:flex">
          {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
          </ul>
        </nav>
    );
};

export default NavBar;