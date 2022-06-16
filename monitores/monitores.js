class Producto {
  constructor(id, nombre, precioReal, precioDescuento, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precioReal = precioReal;
    this.precioDescuento = precioDescuento;
    this.stock = stock;
  }
  descontarStock(cantidad) {
    this.stock -= cantidad;
  }

  incrementarStock(cantidad) {
    this.stock += cantidad;
  }
}

let productos = [];

function generadorAutomatico() {
  productos.push(
    new Producto(
      "LG27GL650F-B",
      "LG 27GL650F-B Monitor de Juegos Compatible con G-Sync Full HD",
      8199,
      5022,
      8
    )
  );
  productos.push(
    new Producto(
      "VG27AQ",
      "Asus Monitor IPS TUF Gaming VG27AQ, 27', WQHD (2560 x 1440)",
      8888,
      7200,
      15
    )
  );
  productos.push(
    new Producto(
      "34GL750-B",
      "LG 34GL750-B, Monitor 34' Gaming UltraGear, UltraWide 21:9",
      14999,
      10699,
      5
    )
  );
  productos.push(
    new Producto(
      "27GP750-B",
      "LG 27GP750-B 27” Ultragear FHD (1920 x 1080) IPS Gaming Monitor",
      6277.71,
      5987.84,
      1
    )
  );
  productos.push(
    new Producto(
      "34GN850-B",
      "LG 34GN850-B UltraWide Gaming Monitor 34' Nano IPS Curved WQHD",
      27999,
      22679.10,
      1
    )
  );
  productos.push(
    new Producto(
      "NE63060019K9-190AD",
      "LG Ultragear - Monitor para Videojuegos, 27 Pulgadas, QHD Nano IPS 1ms, ",
      9529,
      8577,
      7
    )
  );
  productos.push(
    new Producto(
      "AW2521H",
      "Alienware AW2521H - Monitor de juegos de 360 Hz FHD de 24.5 pulgadas",
      18189,
      11557.29,
      18
    )
  );
  productos.push(
    new Producto(
      "PG259QNR",
      "Asus Monitor ROG Swift 360Hz PG259QNR Esports NVIDIA G-Sync ",
      16529,
      12200,
      2
    )
  );
}

generadorAutomatico();

function agregarProducto() {
  id = prompt("Ingrese el ID del producto: ");
  nombre = prompt("Ingrese el nombre del producto: ");
  precioReal = parseInt(prompt("Ingrese el precio real del producto"));
  precioDescuento = parseInt(prompt("Ingrese el precio final con descuento"));
  stock = parseInt(prompt("Ingrese la cantidad de inventario disponible"));

  productos.push(new Producto(id, nombre, precioReal, precioDescuento, stock));
}

// function buscarProducto() {
//   let aBuscar = prompt(
//     "Escribe la marca del PRODUCTO: \n" +
//       "1 - Acer \n" +
//       "2 - Lenovo \n" +
//       "3 - Aorus \n" +
//       "4 - MSI \n" +
//       "5 - Gigabyte"
//   );
//   let resultado = productos.find((producto) =>
//     producto.nombre.includes(aBuscar)
//   );
//   console.clear;
//   console.table(resultado);
// }

function filtrarProductos() {
  let aBuscar = prompt(
    "Escribe la marca que deseas buscar: \n" +
      "1 - LG \n" +
      "2 - ALIENWARE \n" +
      "3 - ASUS \n"
  )
  let resultado = productos.filter((producto) =>
    producto.nombre.includes(aBuscar)
  );

  if (resultado !== undefined) {
    console.clear();
    console.table(resultado);
  }
}

let respuesta, opc, nUsuario, cantidad, numID;

do {
  opc = parseInt(
    prompt(
      "*** Bienvenido a NVIDIA ***\n" +
        "Por favor ingresa el número del tipo de usuario que eres: \n" +
        "1 - Usuario Administrador | Administrador de la Página \n" +
        "2 - Usuario Final | Comprador"
    )
  );

  nUsuario = prompt("Ingresa tu nombre: ").toUpperCase();

  switch (opc) {
    case 1:
      do {
        opc = parseInt(
          prompt(
            "*** Bienvenido " +
              nUsuario +
              " ***\n" +
              "Por favor ingresa el tipo de operacion que deseas realizar: \n" +
              "1 - Mostrar lista de productos disponibles \n" +
              "2 - Incrementar Stock de algún producto \n" +
              "3 - Agregar un nuevo producto \n" +
              "4 - Eliminar Producto "
          )
        );
        switch (opc) {
          case 1:
            console.table(productos);
            alert("La lista de Productos disponibles la podras ver en consola");
            break;
          case 2:
            console.table(productos); // Se mostraran los productos disponibles en consola
            alert("La lista de Productos disponibles la podras ver en consola");
            numID = prompt(
              "Ingrese el numero de INDICE del Producto donde se desea incrementar el Stock: "
            );
            cantidad = parseInt(
              prompt("Ingrese el numero numero de copias que desea agregar: ")
            );
            productos[numID].incrementarStock(cantidad);
            console.table(productos);
            alert(
              "*** Felicidades el incremento se realizo con exito *** \n" +
                "Consulta en consola el nuevo stock actualizado"
            );
            break;
          case 3:
            agregarProducto();
            console.table(productos);
            alert(
              "*** Felicidades el producto se agrego de manera exitosa *** \n" +
                "Consulta en consola la lista de productos actualizada"
            );
            break;
          case 4:
            console.table(productos); // Se mostraran los juegos disponibles en consola
            let numIndice = parseInt(
              prompt(
                "Ingrese el numero de INDICE del producto que desea eliminar: "
              )
            );
            productos.splice(numIndice, 1); //El uno a la derecha se refiere a la cantidad de productos siguientes que se eliminaran adicionalmente
            console.table(productos); // Se mostraran los juegos disponibles en consola
            alert(
              "*** Felicidades el PRODUCTO se elimino de manera exitosa *** \n" +
                "Consulta en consola la nueva lista de PRODUCTOS actualizada"
            );
            break;
          default:
            alert(
              "No contamos con ese número de operación, intentelo de nuevo!!"
            );
            break;
        }
        respuesta = parseInt(
          prompt(
            "¿Desea realizar otra operación?: \n" + "1 - Si \n" + "2 - No \n"
          )
        );
      } while (respuesta < 2);
      break;
    case 2:
      do {
        opc = parseInt(
          prompt(
            "*** Bienvenido " +
              nUsuario +
              " a NVIDIA tu tienda de tecnología favorita ***\n" +
              "Por favor ingresa el numero de operación que deseas realizar: \n" +
              "1 - Mostrar lista de productos disponibles \n" +
              "2 - Filtrar producto por marca \n" +
              "3 - Comprar un PRODUCTO"
          )
        );

        switch (opc) {
          case 1:
            console.table(productos);
            alert("La lista de PRODUCTOS disponibles la podras ver en consola");
            break;
          case 2:
            filtrarProductos();
            alert(
              "Podrás ver en consola la lista de PRODUCTOS filtrada por marca"
            );
            break;
          case 3:
            console.table(productos); // Se mostraran los juegos disponibles en consola
            alert(
              "Los PRODUCTOS disponibles para Comprar los puedes visualizar en Consola"
            );
            let id = parseInt(
              prompt(
                "Ingrese el numero de indice del producto que desea comprar: "
              )
            );
            cantidad = parseInt(
              prompt("Ingrese el numero de copias que desea comprar: ")
            );
            //   Juegos[id].descontarStock(cantidad);
            //       console.log(Juegos);
            if (productos[id].stock > 0 && productos[id].stock >= cantidad) {
              productos[id].descontarStock(cantidad);
              console.table(productos);
              alert(
                "Felicidades su compra se realizo con exito, en breve nos pondremos en contacto con usted"
              );
            } else if (productos[id].stock == 0) {
              alert("No tenemos el producto disponible por el momento");
            } else {
              alert("No tenemos el numero de copias solicitado");
            }
            break;
          default:
            console.warn("No contamos con esa operación, intentelo de nuevo!!");
            break;
        }
        respuesta = parseInt(
          prompt(
            "¿Desea realizar otra operación?: \n" + "1 - Si \n" + "2 - No \n"
          )
        );
      } while (respuesta < 2);
      break;
    default:
      alert("No contamos con esa operación, intentelo de nuevo!!");
      break;
  }
  respuesta = parseInt(
    prompt(
      "¿Desea ingresar como un usuario diferente?: \n" +
        "1 - Si \n" +
        "2 - No \n"
    )
  );
} while (respuesta < 2);
