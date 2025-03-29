import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import PedidoActual from "../components/pedido";
import "../styles/App.css";

const MiPedido = () => {
  const [pedido, setPedido] = useState([]);

  useEffect(() => {
    const pedidoGuardado = localStorage.getItem("pedido");
    if (pedidoGuardado) {
      setPedido(JSON.parse(pedidoGuardado));
    }
  }, []);

  const calcularTotal = () => {
    return pedido.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
  };

  const modificarCantidad = (id, cantidad) => {
    setPedido((prevPedido) => {
      const nuevoPedido = prevPedido
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
        .filter((item) => item.cantidad > 0); // Elimina el producto si la cantidad es 0

      localStorage.setItem("pedido", JSON.stringify(nuevoPedido));
      return nuevoPedido;
    });
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
    <div className="p-4 max-w-md mx-auto bg-black vh-100">
      <div>
        <img className="d-block mx-auto logo" src={logo} alt="" />
      </div>

      <PedidoActual
        pedido={pedido}
        calcularTotal={calcularTotal}
        enviarPedidoWhatsApp={enviarPedidoWhatsApp}
        modificarCantidad={modificarCantidad}
      />
    </div>
  );
};

export default MiPedido;
