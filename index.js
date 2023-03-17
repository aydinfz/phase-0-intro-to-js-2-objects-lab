// Write your solution in this file!
const employee = {
  name: "Z",
  streetAddress: "the unemployed",
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  return { ...employee, [key]: value };
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};

const deleteFromEmployeeByKey = (employee, key) => {
  const newObj = { ...employee };
  delete newObj[key];
  return newObj;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
};
