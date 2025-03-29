import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="menu-container d-flex justify-content-between bg-dark text-light w-100">
      <div>
        <Link to={"/platillos"} className="text-decoration-none text-light">
          <h3 className="fs-3 p-1 ">Platillos</h3>
        </Link>
      </div>
      <div>
        <Link to={"/bebidas"} className="text-decoration-none text-light">
          <h3 className="fs-3 p-1">Bebidas</h3>
        </Link>
      </div>
      <div>
        <Link to={"/postres"} className="text-decoration-none text-light">
          <h3 className="fs-3 p-1">Postres</h3>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
