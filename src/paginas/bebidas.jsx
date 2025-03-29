import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import "../styles/App.css";
import PedidoActual from "../components/pedido";

const Bebidas = () => {
  const [pedido, setPedido] = useState([]);

  const menuBebidas = [
    {
      id: 1,
      nombre: "Agua de horchata",
      precio: 35,
      imagen:
        "https://tofuu.getjusto.com/buckets-prod%2FewaaPT99adsvqsq7F-BEBIDASs.png",
      descripcion:
        "Refrescante agua de horchata elaborada con arroz, canela y un toque de vainilla, servida bien fría para disfrutar su dulzura y cremosidad en cada sorbo",
    },
    {
      id: 2,
      nombre: "Agua de Jamaica",
      precio: 35,
      imagen: "https://vips.com.mx/menu/img/platos/bebidas-agua-fresca.png",
      descripcion:
        "Bebida natural de flor de jamaica con un equilibrio perfecto entre dulzura y acidez, servida bien fría para un toque refrescante y revitalizante.",
    },
    {
      id: 3,
      nombre: "Botella de agua",
      precio: 20,
      imagen:
        "https://lossillares.com/cdn/shop/files/Untitleddesign_70.png?v=1695754233",
      descripcion:
        "Agua purificada en botella, ideal para refrescarte e hidratarte en cualquier momento del día.",
    },
    {
      id: 4,
      nombre: "Coca cola",
      precio: 25,
      imagen: "https://alsuper.online/products/455625_p.webp",
      descripcion:
        "Refrescante botella de Coca-Cola, con su inconfundible sabor burbujeante y el balance perfecto de dulzura y frescura.",
    },
  ];

  useEffect(() => {
    // Al cargar el componente, intentamos cargar el pedido desde localStorage
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
      localStorage.setItem("pedido", JSON.stringify(nuevoPedido)); // Guardamos el pedido en localStorage
      return nuevoPedido;
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
      <h1 className="text-center text-light">Bebidas</h1>
      <div className="grid gap-4">
        {menuBebidas.map((item) => (
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

export default Bebidas;
