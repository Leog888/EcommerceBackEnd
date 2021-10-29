// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'lol',
  // comeback reminder 
})
// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
through: {model: ProductTag, unique: false},
as: 'product_tag'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  through: {model: ProductTag, unique: false},
  as: 'product_info'
});

// Product-Tag belongs to many Products
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'product_id'
});

Tag.belongsTo(ProductTag, {
  foreignKey: 'product_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};