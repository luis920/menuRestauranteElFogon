import React, { useState } from "react";
import logo from "../img/logo.png";

const MenuDemo = () => {
  const [pedido, setPedido] = useState([]);

  const menuItems = [
    {
      id: 1,
      nombre: "Tacos al Pastor",
      precio: 30,
      imagen: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      nombre: "Burrito de Carne Asada",
      precio: 50,
      imagen: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      nombre: "Agua de Horchata",
      precio: 20,
      imagen: "https://via.placeholder.com/100",
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
    <div className="p-4 max-w-md mx-auto">
      <div>
        <img className="d-block mx-auto logo" src={logo} alt="" />
      </div>
      <div className="grid gap-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg flex items-center"
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              className="w-16 h-16 mr-4"
            />
            <div>
              <p className="font-semibold">{item.nombre}</p>
              <p className="text-gray-500">${item.precio}</p>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
                onClick={() => agregarAlPedido(item)}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mt-6">Pedido Actual</h3>
      <ul className="mt-2">
        {pedido.map((item) => (
          <li key={item.id}>
            {item.nombre} x{item.cantidad}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mt-4">Total: ${calcularTotal()}</h3>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        onClick={enviarPedidoWhatsApp}
        disabled={pedido.length === 0}
      >
        Enviar Pedido por WhatsApp
      </button>
    </div>
  );
};

export default MenuDemo;
