const initialNodes = [
  {
    id: "6",
    type: "SEO",
    sourcePosition: "top", // Punto de conexión de salida a la derecha del nodo
    targetPosition: "bottom",
    metodos: [
      {
        type: "seochildren",
        sourcePosition: "top", // Punto de conexión de salida a la derecha del nodo
        targetPosition: "bottom",
        metoName: "Crear Reporte",
        descripcion:
          "Crear un reporte de un dominio con los siguientes apartados, SEO, performance, seguridad y varios",
      },
      {
        type: "seochildren",
        sourcePosition: "top", // Punto de conexión de salida a la derecha del nodo
        targetPosition: "bottom",
        metoName: "Crear Proyecto",
        descripcion: "Crea un proyecto agregando un dominio",
      },
      {
        type: "seochildren",
        sourcePosition: "top", // Punto de conexión de salida a la derecha del nodo
        targetPosition: "bottom",
        metoName: "Minimizador JS",
        descripcion:
          "Minimiza el contenido de un codigo JavaScript quitando los espacios",
      },
      {
        type: "seochildren",
        sourcePosition: "top", // Punto de conexión de salida a la derecha del nodo
        targetPosition: "bottom",
        metoName: "Minimizador CSS",
        descripcion:
          "Minimiza el contenido de un codigo CSS quitando los espacios",
      },
      {
        type: "seochildren",
        sourcePosition: "top", // Punto de conexión de salida a la derecha del nodo
        targetPosition: "bottom",
        metoName: "Minimizador HTML",
        descripcion:
          "Minimiza el contenido de un codigo HTML, quitando tags, espacios o saltos de lineas",
      },
      {
        type: "seochildren",
        sourcePosition: "top", // Punto de conexión de salida a la derecha del nodo
        targetPosition: "bottom",
        metoName: "Validador JSON",
        descripcion: "Valida si un JSON tiene un formato valido",
      },
      {
        type: "seochildren",
        sourcePosition: "top", // Punto de conexión de salida a la derecha del nodo
        targetPosition: "bottom",
        metoName: "Generador de Contraseña",
        descripcion:
          "Crea una contraseña aleatoria con un minimo de caracteres",
      },
      {
        type: "seochildren",
        sourcePosition: "top", // Punto de conexión de salida a la derecha del nodo
        targetPosition: "bottom",
        metoName: "Generador de QR",
        descripcion: "Crea un codigo QR a partir de un contenido",
      },
      {
        type: "seochildren",
        sourcePosition: "top", // Punto de conexión de salida a la derecha del nodo
        targetPosition: "bottom",
        metoName: "Analizador de Agente de Usuario",
        descripcion:
          "Obten información acerca del navegador y sistema operativo del usuario",
      },
      {
        type: "seochildren",
        sourcePosition: "top", // Punto de conexión de salida a la derecha del nodo
        targetPosition: "bottom",
        metoName: "Generador MD5",
        descripcion: "Obten un hash MD5 de un contenido proporcionado",
      },
      {
        type: "seochildren",
        sourcePosition: "top", // Punto de conexión de salida a la derecha del nodo
        targetPosition: "bottom",
        metoName: "Convertidor de Color",
        descripcion: "Cambia el tipo de formato de un color determinado",
      },
    ],
    data: {
      // label: <Node imagen={logoGmail} titulo={'Gmail'}></Node>
    },
    position: { x: 1000, y: 0 },
  },
];
console.log(initialNodes);
function Nodes() {
  return <div>Nodes</div>;
}

export default Nodes;
