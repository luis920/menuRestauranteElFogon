import React, { useState } from "react";
import logo from "../img/logo.png";
import "../styles/App.css";
import PedidoActual from "./pedido";

const MenuDemo = () => {
  const [pedido, setPedido] = useState([]);

  const menuItems = [
    {
      id: 1,
      nombre: "Tacos de asada",
      precio: 100,
      imagen:
        "https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/carna-asada-street-tacos.jpg",
      descripcion: "Orden con 6 tacos de asada con doble tortilla",
    },
    {
      id: 2,
      nombre: "Burrito de Carne Asada",
      precio: 50,
      imagen: "https://museodeltaco.com/img/menu/spb_burrote_asada.png",
      descripcion:
        "Burrito de tortilla de harina con carne asada (incluye aguacate, frijoles, verdura y salsa)",
    },
    {
      id: 3,
      nombre: "Agua de Horchata",
      precio: 20,
      imagen:
        "https://png.pngtree.com/png-clipart/20240828/original/pngtree-horchata-isolated-on-transparent-background-png-image_15875019.png",
      descripcion: "Vaso de agua de horchata de 500 ml",
    },
  ];

  const agregarAlPedido = (item) => {
    setPedido((prevPedido) => {
      const existe = prevPedido.find((p) => p.id === item.id);
      if (existe) {
        return prevPedido.map((p) =>
          p.id === item.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prevPedido, { ...item, cantidad: 1 }];
    });
  };

  const calcularTotal = () => {
    return pedido.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
  };

  const enviarPedidoWhatsApp = () => {
    const telefonoRestaurante = "528662785898";
    const mensaje = encodeURIComponent(
      `Hola, quiero hacer un pedido:\n` +
        pedido.map((item) => `- ${item.nombre} x${item.cantidad}`).join("\n") +
        `\nTotal: $${calcularTotal()}`
    );
    window.open(
      `https://wa.me/${telefonoRestaurante}?text=${mensaje}`,
      "_blank"
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-black">
      <div>
        <img className="d-block mx-auto logo" src={logo} alt="" />
      </div>
      <div className="grid gap-4">
        {menuItems.map((item) => (
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
                ${item.precio}
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

      <PedidoActual
        pedido={pedido}
        calcularTotal={calcularTotal}
        enviarPedidoWhatsApp={enviarPedidoWhatsApp}
      />
    </div>
  );
};

export default MenuDemo;
