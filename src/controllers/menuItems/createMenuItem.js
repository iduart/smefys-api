const MenuItem = require('../../models/menuItem');

const createMenuItem = (req, res) => {
  const menuItem = new MenuItem({
    createdAt: new Date(),
    name: 'Arroz Blanco',
    price: 1000,
    category: '5d216834314af7d3fd7b950c',
    imageUrl: null
  })

  menuItem.save();

  res.json(menuItem);
};

module.exports = createMenuItem;
