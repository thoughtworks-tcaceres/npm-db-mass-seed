const faker = require("faker");

const tableName = "users";
const numRows = 25;
const fields = ["first_name", "last_name", "job_title", "phone_number", "random_number"];
const attributes = [
  "name.firstName",
  "name.lastName",
  "name.jobTitle",
  "phone.phoneNumber",
  "random.number"
];

const seedStart = (tableName, fields) => {
  const numFields = fields.length;
  let SQLstart = `INSERT INTO ${tableName} (`;
  for (let i = 0; i < numFields; i++) {}
};

const seedDataSQL = (numRows, attributes) => {
  let query = "";
  let queryString = "";
  const numAttributes = attributes.length;
  for (let i = 0; i < numRows; i++) {
    queryString += "(";
    for (let j = 0; j < numAttributes; j++) {
      let value = eval(`faker.${attributes[j]}`)();
      console.log("value : ", typeof value);
      let extraChar = typeof value === "number" ? "" : '"';
      queryString += extraChar;
      queryString += value;
      queryString += extraChar;
      queryString += numAttributes - 1 === j ? "" : ", ";
    }
    queryString += "), ";
    query += queryString;
    queryString = "";
  }
  console.log(query);
};

seedDataSQL(numRows, attributes);
