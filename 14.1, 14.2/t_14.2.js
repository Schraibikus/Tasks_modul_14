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

//Решение через map()
const data = JSON.parse(jsonString);
const list = data.list;

const listMap = list.map((item) => {
  const resultMap = {
    name: item.name,
    age: Number(item.age),
    prof: item.prof,
  };
  return resultMap;
});

const result = {
  list: listMap,
};

console.log("result", result);

//решение через push()
// jsonStrinобратить внимание на переменные, везде ***2
const jsonString2 = `
{
	"list2": [
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

const data2 = JSON.parse(jsonString2);
const list2 = data2.list2;

const result2 = {
  list2: [],
};

//чезез цикл for...of

/* for (let item of list2) {
  result2.list2.push({
    name: item.name,
    age: Number(item.age),
    prof: item.prof,
  });
} */

//через цикл forEach

list2.forEach((item) => {
  result2.list2.push({
    name: item.name,
    age: Number(item.age),
    prof: item.prof,
  });
});

console.log("result2", result2);
