# mass-db-seed

Helps generate seed data for a SQL database using the [faker](https://www.npmjs.com/package/faker) library.

## Installing

---

```
npm install mass-db-seed
```

## Example

---

Note: the attributes variable is a string composed of the [faker](https://www.npmjs.com/package/faker) library's attribute and subattributes.

E.g: if you wanted to use faker.name.firstName as a value, you would include "name.firstName".

```js
const massDbSeed = require("mass-db-seed");

const tableName = "users";
// name of the database table
const numRows = 2;
// number of rows to generate info for
const fields = ["first_name", "last_name", "job_title", "random_number"];
// name of the database fields (columns)
const attributes = ["name.firstName", "name.lastName", "name.jobTitle", "random.number"];
// attribute.subAttribute taken from the faker library

massDbSeed(tableName, numRows, fields, attributes);
// returns the string and console logs the string
```

```sql
//Example output:
INSERT INTO users (first_name, last_name, job_title, random_number) VALUES ('Giovanna', 'Leannon', 'Central Intranet Officer', 76167), ('Brianne', 'Nitzsche', 'Regional Web Executive', 94287)
```

## References

---

### [Faker Library](https://www.npmjs.com/package/faker)
