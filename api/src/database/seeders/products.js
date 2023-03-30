'use strict';
const axios = require('axios');




/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        highlights:"",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        genre: "men's clothing",
       imageSrc: ["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"],
        price: "109.95",
        imageAlt: "ASDASD",
        color: "aa",
      
      },
      {
        
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        highlights:"",
        price: "22.3",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        genre: "men's clothing",
       imageSrc: ["https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"],
        imageAlt: "ASDASD",
        color: "aa",
       
      },
      {
      
        name: "Mens Cotton Jacket",
        highlights:"",
        price: "55.99",
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        genre: "men's clothing",
       imageSrc: ["https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"],
        imageAlt: "ASDASD",
        color: "aa",
       
      },
      {
     
        name: "Mens Casual Slim Fit",
        highlights:"",
        price: "15.99",
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        genre: "men's clothing",
       imageSrc: ["https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"],
        imageAlt: "ASDASD",
        color: "aa",
       
      },
      {
        
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        highlights:"",
        price: "695",
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        genre: "jewelery",
       imageSrc: ["https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"],
        imageAlt: "ASDASD",
        color: "aa",
       
      },
      {
     
        name: "Solid Gold Petite Micropave ",
        highlights:"",
        price: "168",
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        genre: "jewelery",
       imageSrc: ["https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"],
        imageAlt: "ASDASD",
        color: "aa",
       
      },
      {
      
        name: "White Gold Plated Princess",
        highlights:"",
        price: "9.99",
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        genre: "jewelery",
       imageSrc: ["https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"],
        imageAlt: "ASDASD",
        color: "aa",
       
   
      },
      {
        name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        highlights:"",
        price: "10.99",
        description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        genre: "jewelery",
       imageSrc: ["https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"],
        imageAlt: "ASDASD",
        color: "aa",
       
      },
      {
        name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        highlights:"",
        price: "64",
        description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        genre: "electronics",
       imageSrc: ["https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"],
       imageAlt: "ASDASD",
        imageAlt: "ASDASD",
        color: "aa",
       
      },
      {
        name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        highlights:"",
        price: "109",
        description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        genre: "electronics",
       imageSrc: ["https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"],
        imageAlt: "ASDASD",
        color: "aa",
      },
      {
        name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        highlights:"",
        price: "109",
        description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        genre: "electronics",
       imageSrc: ["https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"],
        imageAlt: "ASDASD",
        color: "aa",
        imageAlt: "ASDASD",
        
      },
      {
        name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        highlights:"",
        price: "114",
        description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        genre: "electronics",
       imageSrc: ["https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"],
       imageAlt: "ASDASD",
       imageAlt: "ASDASD",
        color: "aa",
       
      },
      {
        name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        highlights:"",
        price: "599",
        description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        genre: "electronics",
       imageSrc: ["https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"],
       imageAlt: "ASDASD",
        color: "aa",
       
      },
      {
        name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        highlights:"",
        price: "999.99",
        description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        genre: "electronics",
       imageSrc: ["https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"],
        imageAlt: "ASDASD",
        color: "aa",
       
      },
      {
        name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        highlights:"",
        price: "56.99",
        description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        genre: "women's clothing",
       imageSrc: ["https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"],
        imageAlt: "ASDASD",
        color: "aa",
       
      },
      {
        name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        highlights:"",
        price: "29.95",
        description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        genre: "women's clothing",
       imageSrc: ["https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"],
        imageAlt: "ASDASD",
        color: "aa",
       
      },
      {
        name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        highlights:"",
        price: "39.99",
        description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        genre: "women's clothing",
       imageSrc: ["https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"],
       imageAlt: "ASDASD",
       color: "aa",

      },
      {
        name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        highlights:"",
        description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        imageSrc: ["https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"],
        imageAlt: "ASDASD",
        price: "9.85",
        color: "aa",
        genre: "women's clothing",
      },
      {
      
        name: "Opna Women's Short Sleeve Moisture",
        highlights:"",
        description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        imageSrc:[ "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"],
        imageAlt: "ASDASD",
        price: "7.95",
        color: "aa",
        genre: "women's clothing",
      },
      {
        name: "DANVOUY Womens T Shirt Casual Cotton Short",
        highlights:"",
        description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        imageSrc:[ "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"],
        imageAlt: "ASDASD",
        price: "12.99",
        genre: "women's clothing",
       color: "aa",
      }, 
      
      
      
      {
        name: "Bsaic Tee",
        highlights: `
      Main Material: Flame Cotton
      Sleeve Type: Short
      Neck Type: Round
      Units per container: 1
      Is it oversized: yes`,
        description: `
      Oversize flame cotton t-shirt.
      Sizes M - L - XL
      
      ZAGLAV is a brand that has QUALITY BASICS, we look for a minimalist style, colors that can be combined with any fashion and without prints.`,
       imageSrc:
          [
            "https://http2.mlstatic.com/D_NQ_NP_2X_697910-MLA52043600595_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_798360-MLA54004553773_022023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_727399-MLA54025735656_022023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_952218-MLA44621821154_012021-F.webp"
          ],
       imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
        genre: "Masculino"

      },
      {
        name: "Adidas oversized t-shirt",
        highlights: `Material: Cotton

      Clothing Style: With Logo
      
      Composition: 100% cotton single jersey
      
      Round neck
      
      Short sleeve
      
      Fit: Loose
      
      Warranty: Against manufacturing defect
      
      Origin: Imported
      
      Country of Manufacturer: NA
      
      Brand: adidas`,
        description: "The adidas Oversize T-shirt is your wardrobe must-have if you're a laid-back girl who loves life and feeling alive. Made of 100% cotton jersey, it has a loose fit that makes it a versatile option that you will never want to take off.",
       imageSrc: [
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
        highlights: `Round neck
      artistic impression
      Mini print on the front, extreme left, drawing of an eye with gummed relief. Large art print on the back and embossed text at the bottom.
      slightly oversized
      Sustainable fibers: BCI Cotton
      Short sleeve`,
        description: "With an urban and artistic vibe, this short-sleeved T-shirt is made with more sustainable cotton. Colorful prints and embossed messages on the back.",
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
        highlights: `Material: Cotton

      Clothing style: Print
      
      Composition: 100% cotton
      
      Round neck
      
      Short sleeve
      
      Fit: Regular
      
      Warranty: Against manufacturing defect
      
      Origin: National
      
      Country of manufacturer: Argentina
      
      Brand: Nike`,
        description: "Add energy and style to your days in the Nike Sportswear Top. Made of 100% cotton to give you comfort in everything you have to do and with a print on the front that makes you feel the air of the beach. Its regular cut combines very well with your shorts, jeans or whatever you want to wear it with. Have it in your pile of pick-it-all tees.",
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
        highlights: `Material: Cotton

      Clothing Style: With Logo
      
      Composition: 100% Cotton
      
      Round neck
      
      Short sleeve
      
      Fit: Regular
      
      Warranty: Against manufacturing defect
      
      Origin: National
      
      Country of manufacturer: Argentina
      
      Brand: Fila`,
        description: "If you are looking for a garment with a relaxed style that makes you look cool, the FILA ETIO t-shirt is perfect to wear on any occasion in which you enjoy every minute of being comfortable and light thanks to the softness of its fabric, its regular fit gives you freedom of movement; In addition, the print gives it a unique and characteristic urban look of the brand.",
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
        highlights: `Material: Cotton

      Clothing style: Print
      
      Composition: 100% Cotton
      
      Round neck
      
      Short sleeve
      
      Fit: regular
      
      Warranty: Against manufacturing defect
      
      Origin: National
      
      Country of Manufacturer: NA
      
      Brand: Vans`,
        description: "The Vans Raging Out T-shirt is made of cotton. Its regular cut style, with a round neckline and short sleeves, merges with a classic design that has the VANS logo on the chest and a print on the back that denotes the inner strength you have. Inspired by skate culture to give big cement cities a refreshing and relaxed style.",
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
        highlights: `Material: Polyester

      Composition: 100% polyester
      
      Round neck
      
      Short sleeve
      
      Fit: Regular
      
      Warranty: Against manufacturing defect
      
      Origin: National
      
      Country of manufacturer: Argentina
      
      Nike brand`,
        description: "The Nike Df Trophy Swoosh T-Shirt features Dri-FIT technology that wicks moisture and wicks sweat away from the skin, to keep you cool for longer. Its lightweight fabric is ideal for increasing comfort in your daily routine and its fit allows you to move freely throughout the day.",
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
