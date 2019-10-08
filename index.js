const multipleFaker = require("multiple-faker");

// insert into users(col1,col2,col3) values (val1,val2,val3)

const table = "users";
const numRows = 25;
const fields = ["first_name", "last_name", "job_title", "phone_number", "random_number"];
const attributes = {
  name: ["firstName", "lastName", "jobTitle"],
  phone: ["phoneNumber"],
  random: ["number"]
};
