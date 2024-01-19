const jsonString = `
{
	"list": [
	 {
		"name": "Petr",
		"age": "20",
		"prof": "mechanic"
	 },
	 {
		"name": "Vova",
		"age": "60",
		"prof": "pilot"
	 }
	]
 }
`;

const result = {
  list: [],
};

const data = JSON.parse(jsonString);
const list = data.list;

// console.log(data);

for (let item of list) {
  result.list.push({
    name: item.name,
    age: +item.age, //использовал унарный плюс, можно было использовать Number()
    prof: item.prof,
  });
}

console.log(result);
