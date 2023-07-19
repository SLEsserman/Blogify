const categoryModel = require('../models/category');

const seedCategory = async (req, res) => {
  const dummyCategories = [
    {name: 'Technology'},
    {name: 'Entertainment'},
    {name: 'Religion'},
    {name: 'Sports'},
    {name: 'Movies'},
    {name: 'Cars'},
  ]
  try {
    await categoryModel.insertMany(dummyCategories);
    res.status(200).json({
      message: 'Categories seeded successfully'
    })
  } catch (err) {
    res.status(500).json({
      message: 'Unable to seed caegory data'
    })
  }
}

const fetchCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.status(200).json({
      message: 'Categories fetched successfully',
      categories,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Unable to fetch all categories'
    })
  }
}

module.exports = {
  seedCategory,
  fetchCategories,
}