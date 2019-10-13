const faker = require("faker");

const tableName = "users";
const numRows = 100;
const fields = ["first_name", "last_name", "job_title", "phone_number", "random_number"];
const attributes = [
  "name.firstName",
  "name.lastName",
  "name.jobTitle",
  "phone.phoneNumber",
  "random.number"
];

const isValidTableName = (tableName) => {
  return typeof tableName === "string" ? true : false;
};

const isValidNumRows = (numRows) => {
  return Number.isInteger(numRows) ? true : false;
};

const isValidFields = (fields) => {
  for (let i = 0; i < fields.length; i++) {
    if (typeof fields[i] !== "string") {
      return false;
    }
  }
  return true;
};

const isValidAttributes = (attributes) => {
  for (let i = 0; i < attributes.length; i++) {
    if (!eval(`faker.${attributes[i]}`)) {
      return false;
    }
  }
  return true;
};

const seedStart = (tableName, fields) => {
  let SQLstart = `INSERT INTO ${tableName} (${fields.join(", ").replace('"', "")}) VALUES `;
  return SQLstart;
};

const seedValues = (numRows, attributes) => {
  let query = "";
  let queryString = "";
  const numAttributes = attributes.length;
  for (let i = 0; i < numRows; i++) {
    queryString += "(";
    for (let j = 0; j < numAttributes; j++) {
      let value = eval(`faker.${attributes[j]}`)();
      let extraChar = typeof value === "number" ? "" : '"';
      queryString += extraChar;
      queryString += value;
      queryString += extraChar;
      queryString += numAttributes - 1 === j ? "" : ", ";
    }
    queryString += numRows - 1 === i ? ")" : "), ";
    query += queryString;
    queryString = "";
  }
  return query;
};

const generateSQLsyntax = (tableName, numRows, fields, attributes) => {
  const validAttribute = isValidAttributes(attributes);
  const validFields = isValidFields(fields);
  const validNumRows = isValidNumRows(numRows);
  const validTableName = isValidTableName(tableName);

  if (validAttribute && validFields && validNumRows && validTableName) {
    return seedStart(tableName, fields) + seedValues(numRows, attributes);
  } else {
    throw new Error("Invalid Data Entered. Cannot generate SQL.");
  }
};

console.log(generateSQLsyntax(tableName, numRows, fields, attributes));
