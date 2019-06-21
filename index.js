let user = {};
user.name = 'John';
user.surname = 'Mike';
console.log(user);
user.name = 'Peter';
console.log(user);
delete user.name;
console.log(user);

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
var total = 0;
for(e in fruit) {
    total += fruit[e];
}
console.log(total);