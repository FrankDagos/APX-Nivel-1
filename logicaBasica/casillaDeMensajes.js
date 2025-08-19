const inbox = [
  {
    messageId: 1,
    asunto: "Oferta especial",
    preview: "Aprovechá este descuento exclusivo por tiempo limitado...",
  },
];

const count = inbox.length;
/* Mi codigo
const message =
  count === 1
    ? "Tienes un(1) mensaje nuevo"
    : count > 1
    ? `Tienes ${count} mensajes nuevos `
    : count === 0
    ? "No tenes mensajes nuevos"
    : "Error";
*/

// Codigo correcto
const message =
  count === 0
    ? "No tenés mensajes"
    : `Tenés ${count} ${count === 1 ? "mensaje" : "mensajes"} nuevos`;

console.log(message);
