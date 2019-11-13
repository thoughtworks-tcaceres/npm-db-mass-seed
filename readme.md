# mass-db-seed

Helps generate seed data for a SQL database using the [faker](https://www.npmjs.com/package/faker) library.

## Installing

---

```
npm install mass-db-seed
yarn add mass-db-seed
```

## Example

---

Note: the attributes variable is a string composed of the [faker](https://www.npmjs.com/package/faker) library's attribute and subattributes.

E.g: if you wanted to use faker.name.firstName as a value, you would include "name.firstName".

```js
const massDbSeed = require("mass-db-seed");

// name of the database table
const tableName = "users";
// number of rows to generate info for
const numRows = 2;
// name of the database fields (columns)
const fields = ["first_name", "last_name", "job_title", "random_number"];
// attribute.subAttribute taken from the faker library
const attributes = ["name.firstName", "name.lastName", "name.jobTitle", "random.number"];

// returns the string and console logs the string
massDbSeed(tableName, numRows, fields, attributes);
```

```sql
//Example output:
INSERT INTO users (first_name, last_name, job_title, random_number) VALUES ('Giovanna', 'Leannon', 'Central Intranet Officer', 76167), ('Brianne', 'Nitzsche', 'Regional Web Executive', 94287)
```

## References

---

### [Faker Library](https://www.npmjs.com/package/faker)





## TO DO
---
* create CI/CD
* more examples
* create table of contents