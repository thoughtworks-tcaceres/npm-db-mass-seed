const tableName = "users";
const numRows = 2;
const fields = ["first_name", "last_name", "job_title", "random_number"];
const attributes = ["name.firstName", "name.lastName", "name.jobTitle", "random.number"];

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
    const seedInfo = seedStart(tableName, fields) + seedValues(numRows, attributes);
    console.log(seedInfo);
    return seedInfo;
  } else {
    throw new Error("Invalid Data Entered. Cannot generate SQL.");
  }
};

generateSQLsyntax(tableName, numRows, fields, attributes);

module.export = generateSQLsyntax;
