const pedido = () => {
  return (
    <>
      <h3 className="text-xl font-bold mt-6 text-center text-light my-3">
        Pedido Actual
      </h3>
      <ul className="mt-2 text-light">
        {pedido.map((item) => (
          <li key={item.id}>
            {item.nombre} x{item.cantidad}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mt-4 text-light text-center">
        Total: ${calcularTotal()}
      </h3>
      <button
        className=" btn-sendOrder  px-4 py-2 rounded mt-2 d-block mx-auto text-light"
        onClick={enviarPedidoWhatsApp}
        disabled={pedido.length === 0}
      >
        Enviar Pedido por WhatsApp
      </button>
    </>
  );
};
export default pedido;
