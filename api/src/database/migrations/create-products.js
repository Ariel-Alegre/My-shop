'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        
        type: Sequelize.STRING
      },
      highlights: {
        
        type: Sequelize.TEXT
      },
      description: {
        
        type: Sequelize.TEXT
      },
      imageSrc: {
       
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      imageAlt: {
        
        type: Sequelize.STRING
      },
      price: {
        
        type: Sequelize.STRING
      },
      color: {
        
        type: Sequelize.STRING
      },
      genre: {
        
        type: Sequelize.STRING
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};