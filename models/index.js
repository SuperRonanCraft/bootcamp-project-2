// Importing the User model from './User'
const User = require('./User');
// Importing the Order model from './Order'
const Order = require('./Order');
// Importing the Inventory model from './Inventory'
const Inventory = require('./Inventory');
// Importing the OrderItem model from './OrderItem'
const OrderItem = require('./OrderItem');
// Importing the Category model from './Category'
const Category = require('./Category');
// Importing the Allergen model from './Allergen'
const Allergen = require('./Allergen');
const AllergenInventory = require('./AllergenInventory');
// Importing the CategoryInventory model from './CategoryInventory'
const CategoryInventory = require('./CategoryInventory');

// USER and ORDER
Order.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Order, {
  foreignKey: 'user_id',
});

// ORDERITEM and ORDER
OrderItem.belongsTo(Order, {
  foreignKey: 'order_id',
  onDelete: 'CASCADE',
});

Order.hasMany(OrderItem, {
  foreignKey: 'order_id',
});

// INVENTORY and ORDERITEM
OrderItem.belongsTo(Inventory, {
  foreignKey: 'inventory_id',
});

Inventory.hasOne(OrderItem, {
  foreignKey: 'inventory_id',
});

// INVENTORY and CATEGORY
Inventory.belongsToMany(Category, {
  through: {
    model: CategoryInventory,
    unique: false,
  },
});

Category.belongsToMany(Inventory, {
  through: {
    model: CategoryInventory,
    unique: false,
  },
});

// INVENTORY and ALLERGEN
Inventory.belongsToMany(Allergen, {
  through: {
    model: AllergenInventory,
    unique: false,
  },
});

Allergen.belongsToMany(Inventory, {
  through: {
    model: AllergenInventory,
    unique: false,
  },
});

module.exports = {
  User,
  Order,
  Inventory,
  OrderItem,
  Category,
  Allergen,
  AllergenInventory,
  CategoryInventory,
};
