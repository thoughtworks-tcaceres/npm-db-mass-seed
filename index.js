const tableName = "users";
const numRows = 2;
const fields = ["first_name", "last_name", "job_title", "phone_number", "random_number"];
const attributes = [
  "name.firstName",
  "name.lastName",
  "name.jobTitle",
  "phone.phoneNumber",
  "random.number"
];

const {
  isValidTableName,
  isValidNumRows,
  isValidFields,
  isValidAttributes,
  seedStart,
  seedValues
} = require("./helpers");

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

module.export = generateSQLsyntax;
