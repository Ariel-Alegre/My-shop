'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      name: "Bsaic Tee",
      highlights:"caxas",
      description:"dsdas",  
      imageSrc:
       [ "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"],
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
      genre: "Masculino"
      
    },
    {
      name: "Adidas oversized t-shirt",
      highlights:`Material: Cotton

      Clothing Style: With Logo
      
      Composition: 100% cotton single jersey
      
      Round neck
      
      Short sleeve
      
      Fit: Loose
      
      Warranty: Against manufacturing defect
      
      Origin: Imported
      
      Country of Manufacturer: NA
      
      Brand: adidas`,
      description:"The adidas Oversize T-shirt is your wardrobe must-have if you're a laid-back girl who loves life and feeling alive. Made of 100% cotton jersey, it has a loose fit that makes it a versatile option that you will never want to take off.",  
      imageSrc:[
"https://http2.mlstatic.com/D_NQ_NP_719717-MLA54267080681_032023-O.webp",
"https://http2.mlstatic.com/D_NQ_NP_835775-MLA54267080677_032023-O.webp",
"https://http2.mlstatic.com/D_NQ_NP_893909-MLA54267080683_032023-O.webp",
"https://http2.mlstatic.com/D_NQ_NP_798136-MLA54267080679_032023-O.webp"
    ],
      imageAlt: "the oversized jersey from adidas..",
      price: "$99",
      color: "Black",
      genre: "Female"

    },
    {
      name: "Hand-printed arty t-shirt",
      highlights:`Round neck
      artistic impression
      Mini print on the front, extreme left, drawing of an eye with gummed relief. Large art print on the back and embossed text at the bottom.
      slightly oversized
      Sustainable fibers: BCI Cotton
      Short sleeve`,
      description:"With an urban and artistic vibe, this short-sleeved T-shirt is made with more sustainable cotton. Colorful prints and embossed messages on the back.",  
      imageSrc:
       [ 
        "https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw2fd211e4/images/B2C/22SMTK49_2000_8.jpg?sfrm=jpg&v=webp10&sw=2000",
        "https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw36e89769/images/B2C/22SMTK49_2000_1.jpg?sfrm=jpg&v=webp10&sw=2000",
        "https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw328267fb/images/B2C/22SMTK49_2000_4.jpg?sfrm=jpg&v=webp10&sw=2000",
        "https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw9c2953e6/images/B2C/22SMTK49_2000_3.jpg?sfrm=jpg&v=webp10&sw=375"
       ],
      imageAlt: "arty short sleeve t-shirt.",
      price: "$54",
      color: "Black",
      genre: "Male"

    },
    {
      name: "Nike Sportswear T-shirt",
      highlights:`Material: Cotton

      Clothing style: Print
      
      Composition: 100% cotton
      
      Round neck
      
      Short sleeve
      
      Fit: Regular
      
      Warranty: Against manufacturing defect
      
      Origin: National
      
      Country of manufacturer: Argentina
      
      Brand: Nike`,
      description:"Add energy and style to your days in the Nike Sportswear Top. Made of 100% cotton to give you comfort in everything you have to do and with a print on the front that makes you feel the air of the beach. Its regular cut combines very well with your shorts, jeans or whatever you want to wear it with. Have it in your pile of pick-it-all tees.",  
      imageSrc:
        [
"https://http2.mlstatic.com/D_NQ_NP_2X_777834-MLA53570884735_022023-F.webp",     
"https://http2.mlstatic.com/D_NQ_NP_2X_970441-MLA53570884736_022023-F.webp",
"https://http2.mlstatic.com/D_NQ_NP_2X_996499-MLA53570884737_022023-F.webp"
],
      imageAlt: "nike Sportswear T-shirt.",
      price: "$50",
      color: "White",
      genre: "Male"

    },
    {
      name: "Fila Etio Shirt",
      highlights:`Material: Cotton

      Clothing Style: With Logo
      
      Composition: 100% Cotton
      
      Round neck
      
      Short sleeve
      
      Fit: Regular
      
      Warranty: Against manufacturing defect
      
      Origin: National
      
      Country of manufacturer: Argentina
      
      Brand: Fila`,
      description:"If you are looking for a garment with a relaxed style that makes you look cool, the FILA ETIO t-shirt is perfect to wear on any occasion in which you enjoy every minute of being comfortable and light thanks to the softness of its fabric, its regular fit gives you freedom of movement; In addition, the print gives it a unique and characteristic urban look of the brand.",  
      imageSrc:
        [
        "https://filaar.vtexassets.com/arquivos/ids/6651458-1600-auto?v=638134495172870000&width=1600&height=auto&aspect=true",
        "https://filaar.vtexassets.com/arquivos/ids/6652387-1600-auto?v=638134495205500000&width=1600&height=auto&aspect=true",
        "https://filaar.vtexassets.com/arquivos/ids/6652463-1600-auto?v=638134495208130000&width=1600&height=auto&aspect=true",
        "https://filaar.vtexassets.com/arquivos/ids/6654243-1600-auto?v=638134495283170000&width=1600&height=auto&aspect=true"
        ],
      imageAlt: "Fila Etio T-Shirt",
      price: "$45",
      color: "Black",
      genre: "Female"

    },
    {
      name: "Vans Raging Out T-shirt",
      highlights:`Material: Cotton

      Clothing style: Print
      
      Composition: 100% Cotton
      
      Round neck
      
      Short sleeve
      
      Fit: regular
      
      Warranty: Against manufacturing defect
      
      Origin: National
      
      Country of Manufacturer: NA
      
      Brand: Vans`,
      description:"The Vans Raging Out T-shirt is made of cotton. Its regular cut style, with a round neckline and short sleeves, merges with a classic design that has the VANS logo on the chest and a print on the back that denotes the inner strength you have. Inspired by skate culture to give big cement cities a refreshing and relaxed style.",  
      imageSrc:
        [
"https://http2.mlstatic.com/D_NQ_NP_2X_663253-MLA52252461525_112022-F.webp",
"https://http2.mlstatic.com/D_NQ_NP_2X_798440-MLA52252380888_112022-F.webp",
"https://http2.mlstatic.com/D_NQ_NP_2X_612308-MLA52252403939_112022-F.webp",
"https://http2.mlstatic.com/D_NQ_NP_2X_612308-MLA52252403939_112022-F.webp"
        ],
      imageAlt: "Front of the basic t-shirt for men in black.",
      price: "$43",
      color: "White",
      genre: "Male"

    },
    {
      name: "Nike Dri-Fit Swoosh Run T-Shirt",
      highlights:`Material: Polyester

      Composition: 100% polyester
      
      Round neck
      
      Short sleeve
      
      Fit: Regular
      
      Warranty: Against manufacturing defect
      
      Origin: National
      
      Country of manufacturer: Argentina
      
      Nike brand`,
      description:"The Nike Df Trophy Swoosh T-Shirt features Dri-FIT technology that wicks moisture and wicks sweat away from the skin, to keep you cool for longer. Its lightweight fabric is ideal for increasing comfort in your daily routine and its fit allows you to move freely throughout the day.",  
      imageSrc:
       [ 
      "https://http2.mlstatic.com/D_NQ_NP_2X_654830-MLA53570880059_022023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_940788-MLA53570880060_022023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_782496-MLA53570880062_022023-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_2X_718430-MLA53570880061_022023-F.webp",
      ],
      imageAlt: "Nike Dri-Fit Swoosh Run T-Shirt",
      price: "$64",
      color: "Pink",
      genre: "Female"

    },
    
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
