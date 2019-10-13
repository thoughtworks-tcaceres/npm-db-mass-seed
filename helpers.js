const faker = require("faker");

const isValidTableName = (tableName) => {
  return typeof tableName === "string" ? true : false;
};

const isValidNumRows = (numRows) => {
  return Number.isInteger(numRows) && numRows > 0 ? true : false;
};

const isValidFields = (fields) => {
  if (!Array.isArray(fields)) {
    return false;
  }
  for (let i = 0; i < fields.length; i++) {
    if (typeof fields[i] !== "string") {
      return false;
    }
  }
  return true;
};

const isValidAttributes = (attributes) => {
  if (!Array.isArray(attributes)) {
    return false;
  }
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

module.exports = {
  isValidTableName,
  isValidNumRows,
  isValidFields,
  isValidAttributes,
  seedStart,
  seedValues
};
