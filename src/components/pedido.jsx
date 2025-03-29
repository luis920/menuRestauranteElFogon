const PedidoActual = ({
  pedido,
  calcularTotal,
  enviarPedidoWhatsApp,
  modificarCantidad,
}) => {
  if (!pedido || pedido.length === 0) {
    return (
      <p className="text-center text-light">No hay productos en el pedido.</p>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-bold mt-6 text-center text-light my-3">
        Pedido Actual
      </h3>
      <ul className="mt-2 text-light">
        {pedido.map((item) => (
          <li
            key={item.id}
            className="d-flex justify-content-between align-items-center my-2"
          >
            <span>
              {item.nombre} x{item.cantidad}
            </span>
            <div>
              <button
                className="btn btn-light mx-1"
                onClick={() => modificarCantidad(item.id, -1)}
              >
                ➖
              </button>
              <button
                className="btn btn-light mx-1"
                onClick={() => modificarCantidad(item.id, 1)}
              >
                ➕
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mt-4 text-light text-center">
        Total: ${calcularTotal()}
      </h3>
      <button
        className="btn-sendOrder px-4 py-2 rounded mt-2 d-block mx-auto text-light"
        onClick={enviarPedidoWhatsApp}
        disabled={pedido.length === 0}
      >
        Enviar Pedido por WhatsApp
      </button>
    </div>
  );
};

export default PedidoActual;
