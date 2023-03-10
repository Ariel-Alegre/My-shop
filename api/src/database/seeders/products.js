'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      name: "Bsaic Tee",
      highlights:"caxas",
      descriptoion:"dsdas",  
      imageSrc:
       [ "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"],
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      genre: "Masculino"
      
    },
    {
      name: "Remera adidas Oversized",
      highlights:`Material: Algodón

      Estilo de indumentaria: Con Logo
      
      Composición: Jersey sencillo 100% algodón
      
      Cuello: Redondo
      
      Manga: Corta
      
      Calce: Holgado
      
      Garantía: Contra defecto de fabricación
      
      Origen: Importado
      
      País del fabricante: NA
      
      Marca: adidas`,
      descriptoion:"La Remera adidas Oversized es tu must en el closet si sos una chica relajada, que ama la vida y sentirse vivo. Confeccionada en tejido de punto jersey 100 % algodón, presenta un corte holgado que la convierte en una opción versátil que no vas a querer sacarte nunca.",  
      imageSrc:[
"https://http2.mlstatic.com/D_NQ_NP_719717-MLA54267080681_032023-O.webp",
"https://http2.mlstatic.com/D_NQ_NP_835775-MLA54267080677_032023-O.webp",
"https://http2.mlstatic.com/D_NQ_NP_893909-MLA54267080683_032023-O.webp",
"https://http2.mlstatic.com/D_NQ_NP_798136-MLA54267080679_032023-O.webp"
    ],
      imageAlt: "La Remera adidas Oversized.",
      price: "$19.999",
      color: "Negro",
      genre: "Femenino"

    },
    {
      name: "Camiseta manga corta arty estampado a mano",
      highlights:`Cuello redondo
      Estampado arty
      Estampa mini en el frente, extremo izquierdo, dibujo de ojo con relieve engomado. Estampa arty grande en espalda y texto con relieve engomado en la parte inferior
      Ligeramente oversize
      Fibras sostenibles: Algodón BCI
      Manga corta`,
      descriptoion:"Con rollo urbana y artístico, esta camiseta de manga corta está confeccionada con algodón más sostenible. Estampados de colores y mensajes con relieve engomado en la espalda.",  
      imageSrc:
       [ 
        "https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw2fd211e4/images/B2C/22SMTK49_2000_8.jpg?sfrm=jpg&v=webp10&sw=2000",
        "https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw36e89769/images/B2C/22SMTK49_2000_1.jpg?sfrm=jpg&v=webp10&sw=2000",
        "https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw328267fb/images/B2C/22SMTK49_2000_4.jpg?sfrm=jpg&v=webp10&sw=2000",
        "https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw9c2953e6/images/B2C/22SMTK49_2000_3.jpg?sfrm=jpg&v=webp10&sw=375"
       ],
      imageAlt: "Camiseta manga corta arty.",
      price: "$10.900",
      color: "Negro",
      genre: "Masculino"

    },
    {
      name: "Remera Nike Sportswear",
      highlights:`Material: Algodón

      Estilo de indumentaria: Estampado
      
      Composición: 100% algodón
      
      Cuello: Redondo
      
      Manga: Corta
      
      Calce: Regular
      
      Garantía: Contra defecto de fabricación
      
      Origen: Nacional
      
      País del fabricante: Argentina
      
      Marca: Nike`,
      descriptoion:"Sumá energía y estilo a tus días con la Remera Nike Sportswear. Confeccionada en un 100% de algodón para darte comodidad en cada cosa que tengas que hacer y con una estampa en el frente que te hace sentir el aire de la playa. Su corte regular combina muy bien con tus shorts, jeans o con lo que quieras usarla. Tenela en tu pila de remeras elegidas para todo.",  
      imageSrc:
        [
"https://http2.mlstatic.com/D_NQ_NP_2X_777834-MLA53570884735_022023-F.webp",     
"https://http2.mlstatic.com/D_NQ_NP_2X_970441-MLA53570884736_022023-F.webp",
"https://http2.mlstatic.com/D_NQ_NP_2X_996499-MLA53570884737_022023-F.webp"
],
      imageAlt: "Remera Nike Sportswear.",
      price: "$10.199",
      color: "Blanco",
      genre: "Masculino"

    },
    {
      name: "REMERA FILA ETIO",
      highlights:`Material: Algodón

      Estilo de indumentaria: Con Logo
      
      Composición: 100% Algodón
      
      Cuello: Redondo
      
      Manga: Corta
      
      Calce: Regular
      
      Garantía: Contra defecto de fabricación
      
      Origen: Nacional
      
      País del fabricante: Argentina
      
      Marca: Topper`,
      descriptoion:"Si buscás una prenda con estilo relajado que te haga ver con toda la onda, la Remera FILA ETIO es perfecta para lucir en cualquier ocasión en que disfrutás de cada minuto estando cómodo y ligero gracias a la suavidad de su tela, su calce regular te brinda libertad de movimientos; además el estampado te da un look urbano único y característico de la marca.",  
      imageSrc:
        [
        "https://filaar.vtexassets.com/arquivos/ids/6651458-1600-auto?v=638134495172870000&width=1600&height=auto&aspect=true",
        "https://filaar.vtexassets.com/arquivos/ids/6652387-1600-auto?v=638134495205500000&width=1600&height=auto&aspect=true",
        "https://filaar.vtexassets.com/arquivos/ids/6652463-1600-auto?v=638134495208130000&width=1600&height=auto&aspect=true",
        "https://filaar.vtexassets.com/arquivos/ids/6654243-1600-auto?v=638134495283170000&width=1600&height=auto&aspect=true"
        ],
      imageAlt: "REMERA FILA ETIO",
      price: "$8.820",
      color: "Negro",
      genre: "Femenino"

    },
    {
      name: "Remera Vans Raging Out",
      highlights:`Material: Algodón

      Estilo de indumentaria: Estampado
      
      Composición: 100% Algodón
      
      Cuello: Redondo
      
      Manga: Corta
      
      Calce: Regular
      
      Garantía: Contra defecto de fabricación
      
      Origen: Nacional
      
      País del fabricante: NA
      
      Marca: Vans`,
      descriptoion:"La Remera Vans Raging Out está confeccionada en algodón. Su estilo de corte regular, con cuello redondo y mangas cortas, se fusiona con un diseño clásico que posee el logo de VANS en el pecho y en la espalda un estampado que denota la fuerza interior que tenés. Inspirada en la cultura skate para darle un estilo refrescante y descontracturado a las grandes ciudades de cemento.",  
      imageSrc:
        [
"https://http2.mlstatic.com/D_NQ_NP_2X_663253-MLA52252461525_112022-F.webp",
"https://http2.mlstatic.com/D_NQ_NP_2X_798440-MLA52252380888_112022-F.webp",
"https://http2.mlstatic.com/D_NQ_NP_2X_612308-MLA52252403939_112022-F.webp",
"https://http2.mlstatic.com/D_NQ_NP_2X_612308-MLA52252403939_112022-F.webp"
        ],
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$8.799",
      color: "Blanco",
      genre: "Masculino"

    },
    {
      name: "Remera Nike Dri-Fit Swoosh Run",
      highlights:`Material: Poliéster

      Composición: 100% poliéster
      
      Cuello: Redondo
      
      Manga: Corta
      
      Calce: Regular
      
      Garantía: Contra defecto de fabricación
      
      Origen: Nacional
      
      País del fabricante: Argentina
      
      Marca: Nike`,
      descriptoion:"La Remera Nike Df Trophy Swoosh cuenta con tecnología Dri-FIT que absorbe la humedad y expulsa el sudor de la piel, para mantenerte fresco durante más tiempo. Su tela liviana es ideal para aumentar la comodidad en tu rutina diaria y su calce te permite moverte libremente durante todo el día.",  
      imageSrc:
       [ 
      "https://http2.mlstatic.com/D_NQ_NP_2X_654830-MLA53570880059_022023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_940788-MLA53570880060_022023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_782496-MLA53570880062_022023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_718430-MLA53570880061_022023-F.webp",
      ],
      imageAlt: "Remera Nike Dri-Fit Swoosh Run",
      price: "$12.899",
      color: "Rosa",
      genre: "Femenino"

    },
    
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
