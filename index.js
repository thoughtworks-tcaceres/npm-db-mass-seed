const multipleFaker = require("multiple-faker");

const table = "users";
const numRows = 25;
const fields = ["first_name", "last_name", "job_title", "phone_number", "random_number"];
const attributes = {
  name: ["firstName", "lastName", "jobTitle"],
  phone: ["phoneNumber"],
  random: ["number"]
};

const seedDataSQL = (table, fields, attributes) => {
  const seed = ``;
  seed += `insert into ${table} (`;
  seed += fields.join(", ");
  seed += `) values (`;
  seed += `);`;
};

const generatedData = multipleFaker(numRows, attributes);
