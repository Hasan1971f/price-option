import Link from "../Link/Link";


const NavBar = () => {
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About Us', id: 2},
        { path: '/contact', name: 'Contact Us', id: 3 },
        { path: '/blog', name: 'Blog', id: 4 },
        { path: '/products', name: 'Products', id: 5 }
    ];
   
    return (
        <nav>
          <ul className="md:flex">
          {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
          </ul>
        </nav>
    );
};

export default NavBar;