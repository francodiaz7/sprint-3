// Ejercicio 1:
let user = {};
user['name'] = 'John';
user['surname'] = 'Smith';
user['name'] = 'Pete';
delete user['name'];

// Ejercicio 2:
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Ejercicio 3:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);

// Ejercicio 4:
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key]*2;
        } 
    }
}