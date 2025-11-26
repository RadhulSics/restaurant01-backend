const mongoose = require("mongoose");
const customer = require("./Customerschema");
const menu = require("./Foodschema");

mongoose.connect('mongodb+srv://psprashanth18_db_user:f7Hf9wztzflncVG2@cluster0.d2eia7z.mongodb.net/CustomerRegistration?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas for seeding'))
.catch(err => console.error(err));

const seedData = async () => {
  try {
    // Seed customers
    const customers = [
      { firstname: "Alice", lastname: "Smith", password: "123", confirmpassword: "123", email: "alice@example.com", gender: "female" },
      { firstname: "Bob", lastname: "Johnson", password: "123", confirmpassword: "123", email: "bob@example.com", gender: "male" },
    ];
    await customer.insertMany(customers);
    console.log("Customers seeded");

    // Seed menu items
    const menus = [
      { foodname: "Pizza", image: "pizza.jpg", price: 10, category: "Main Course" },
      { foodname: "Burger", image: "burger.jpg", price: 8, category: "Main Course" },
      { foodname: "Salad", image: "salad.jpg", price: 5, category: "Appetizer" },
    ];
    await menu.insertMany(menus);
    console.log("Menu items seeded");

    console.log("Seeding completed");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
