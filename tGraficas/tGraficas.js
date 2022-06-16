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
      "ZT-A30610E-10MLHR",
      "Tarjeta de Video ZOTAC NVIDIA GeForce RTX 3060 Ti",
      16069,
      14779,
      1
    )
  );
  productos.push(
    new Producto(
      "ZT-A30800D-10PLHR",
      "Tarjeta de Video Zotac NVIDIA GeForce RTX 3080",
      34439,
      28039,
      8
    )
  );
  productos.push(
    new Producto(
      "DUAL-RTX3050-O8G",
      "Tarjeta de Video ASUS NVIDIA Dual GeForce RTX 3050",
      12279,
      9209,
      30
    )
  );
  productos.push(
    new Producto(
      "ZT-A30810D-10P",
      "Tarjeta de Video Zotac NVIDIA GeForce RTX 3080 Ti ",
      36989,
      28649,
      1
    )
  );
  productos.push(
    new Producto(
      "TUF-RTX3070TI-O8G-GAMING",
      "Tarjeta de Video ASUS TUF Gaming NVIDIA GeForce RTX 3070 Ti OC ",
      22099,
      20489,
      2
    )
  );
  productos.push(
    new Producto(
      "NE63060019K9-190AD",
      "Tarjeta de Video Palit NVIDIA GeForce RTX 3060",
      12729,
      11989,
      17
    )
  );
  productos.push(
    new Producto(
      "NE63070019P2-1041A",
      "Tarjeta de Video Palit NVIDIA GeForce RTX 3070 ",
      18189,
      17209,
      3
    )
  );
  productos.push(
    new Producto(
      "ZT-A30900D-10P",
      "Tarjeta de Video Zotac NVIDIA GeForce RTX 3090 ",
      67689,
      45479,
      20
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

function buscarProducto() {
  let aBuscar = prompt(
    "Escribe la marca del PRODUCTO: \n" +
      "1 - Acer \n" +
      "2 - Lenovo \n" +
      "3 - Aorus \n" +
      "4 - MSI \n" +
      "5 - Gigabyte"
  );
  let resultado = productos.find((producto) =>
    producto.nombre.includes(aBuscar)
  );
  console.clear;
  console.table(resultado);
}

function filtrarProductos() {
  let aBuscar = prompt(
    "Escribe el numero de serie que deseas buscar: \n" +
      "1 - 3060 Ti \n" +
      "2 - 3070 \n" +
      "3 - 3080 Ti \n" +
      "4 - 3090 \n"
  );
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
              "2 - Filtrar producto por serie \n" +
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
