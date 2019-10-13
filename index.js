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

module.exports = generateSQLsyntax;
