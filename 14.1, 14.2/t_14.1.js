const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const result = {
  list: [],
};

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const students = listNode.querySelectorAll("student");

//решение через метод push()
//forEach()
students.forEach((student) => {
  const nameStudentNode = student.querySelector("name");
  const firstNameNode = nameStudentNode.querySelector("first");
  const secondNameNode = nameStudentNode.querySelector("second");
  const ageNode = student.querySelector("age");
  const profNode = student.querySelector("prof");
  const nameAttr = nameStudentNode.getAttribute("lang");

  const stud = {
    name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: nameAttr,
  };
  result.list.push(stud);
});

//for...of
// for (let student of students) {
//   const nameStudentNode = student.querySelector("name");
//   const firstNameNode = nameStudentNode.querySelector("first");
//   const secondNameNode = nameStudentNode.querySelector("second");
//   const ageNode = student.querySelector("age");
//   const profNode = student.querySelector("prof");
//   const nameAttr = nameStudentNode.getAttribute("lang");

//   const stud = {
//     name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
//     age: Number(ageNode.textContent),
//     prof: profNode.textContent,
//     lang: nameAttr,
//   };
//   result.list.push(stud);
// }

//решение через метод map()
const studentsMap = Array.from(students).map((elem) => {
  const nameStudentNode = elem.querySelector("name");
  const firstNameNode = nameStudentNode.querySelector("first");
  const secondNameNode = nameStudentNode.querySelector("second");
  const ageNode = elem.querySelector("age");
  const profNode = elem.querySelector("prof");
  const nameAttr = nameStudentNode.getAttribute("lang");
  const studMap = {
    name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: nameAttr,
  };
  return studMap;
});

const resultMap = {
  list: studentsMap,
};

console.log("result", result);
console.log("resultMap", resultMap);
