import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/App.css";

const Postres = () => {
  const [pedido, setPedido] = useState([]);

  const menuPostres = [
    {
      id: 9,
      nombre: "Pay de queso",
      precio: 45,
      imagen: "https://puromaiz.mx/img/menu/sweets_cheesepie.png",
      descripcion:
        "Delicioso pay de queso con una base crujiente y un relleno cremoso y suave, con el equilibrio perfecto de dulzura y sabor.",
    },
    {
      id: 10,
      nombre: "vaso de nieve de nuez",
      precio: 25,
      imagen:
        "https://static.vecteezy.com/system/resources/thumbnails/053/810/532/small_2x/butter-pecan-ice-cream-in-a-glass-sundae-dish-with-caramelized-pecans-and-a-drizzle-png.png",
      descripcion:
        "Cremoso vaso de nieve de nuez, con trocitos de nuez crujiente y un delicioso sabor dulce y suave que se derrite en tu boca.",
    },
    {
      id: 11,
      nombre: "Brownnie de chocolate",
      precio: 25,
      imagen:
        "https://carniceriadepueblo.com/wp-content/uploads/2024/04/Brownie-2.png",
      descripcion:
        "Brownie de chocolate irresistible, con una textura suave y fudgy por dentro, ligeramente crujiente por fuera y un intenso sabor a cacao.",
    },
    {
      id: 12,
      nombre: "Flan",
      precio: 25,
      imagen:
        "https://elcajeton.com/wp-content/uploads/2023/04/cajeton-receta-flan.png",
      descripcion:
        "Suave y cremoso flan, con una textura delicada que se derrite en el paladar, cubierto con un delicioso caramelo líquido que añade el toque perfecto de dulzura.",
    },
  ];
  useEffect(() => {
    const pedidoGuardado = localStorage.getItem("pedido");
    if (pedidoGuardado) {
      setPedido(JSON.parse(pedidoGuardado));
    }
  }, []);

  const agregarAlPedido = (item) => {
    setPedido((prevPedido) => {
      const existe = prevPedido.find((p) => p.id === item.id);
      if (existe) {
        return prevPedido.map((p) =>
          p.id === item.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      const nuevoPedido = [...prevPedido, { ...item, cantidad: 1 }];
      localStorage.setItem("pedido", JSON.stringify(nuevoPedido));
      return nuevoPedido;
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-black">
      <div>
        <img className="d-block mx-auto logo" src={logo} alt="" />
      </div>
      <h1 className="text-center text-light">Postres</h1>
      <div className="grid gap-4">
        {menuPostres.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg d-flex flex-column align-items-center"
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              className="w-50 d-block mx-auto"
            />
            <div>
              <p className="font-semibold text-light text-center fs-3">
                <strong>{item.nombre}</strong>
              </p>
              <p className="text-light text-center">{item.descripcion}</p>
              <p className="text-gray-500 text-light text-center">
                <strong>${item.precio}</strong>
              </p>
              <button
                className="btn-add w-100"
                onClick={() => agregarAlPedido(item)}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/mipedido"}>
        <button className="btn-sendOrder px-4 py-2 rounded mt-2 d-block mx-auto text-light">
          Ver mi pedido
        </button>
      </Link>
    </div>
  );
};

export default Postres;
