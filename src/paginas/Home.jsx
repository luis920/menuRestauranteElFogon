import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faBottleDroplet,
  faIceCream,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-4 max-w-md mx-auto bg-black vh-100">
      <div>
        <img className="d-block mx-auto logo" src={logo} alt="" />
      </div>
      <h1 className="text-center text-light">Bienvenido</h1>
      <h3 className="text-center text-light">
        Profavor elige los platillos que prefieras de nuestro menú y envíanos tu
        pedido por WhatsApp.{" "}
      </h3>
      <h2 className="text-center text-light">Buen provecho!</h2>
      <div className="d-flex justify-content-around gap-3 mt-4">
        <Link to={"/platillos"}>
          <div className="d-flex flex-column align-items-center bg-primary text-light p-3 w-100 rounded">
            <h3>Platillos</h3>
            <FontAwesomeIcon className="text-light fs-1" icon={faBurger} />
          </div>
        </Link>
        <Link to={"/bebidas"}>
          <div className="d-flex flex-column align-items-center bg-primary text-light p-3 w-100 rounded">
            <h3>Bebidas</h3>
            <FontAwesomeIcon
              className="text-light fs-1"
              icon={faBottleDroplet}
            />
          </div>
        </Link>

        <Link to={"/postres"}>
          <div className="d-flex flex-column align-items-center bg-primary text-light p-3 w-100 rounded">
            <h3>Postres</h3>
            <FontAwesomeIcon className="text-light fs-1" icon={faIceCream} />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Home;
