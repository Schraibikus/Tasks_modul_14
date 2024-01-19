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

for (let student of students) {
  const nameStudentNode = student.querySelector("name");
  const firstNameNode = nameStudentNode.querySelector("first");
  const secondNameNode = nameStudentNode.querySelector("second");
  const ageNode = student.querySelector("age");
  const profNode = student.querySelector("prof");

  const nameAttr = nameStudentNode.getAttribute("lang");

  const stud = {
    name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
    age: +ageNode.textContent, //использовал унарный плюс, можно было использовать Number()
    prof: profNode.textContent,
    lang: nameAttr,
  };
  result.list.push(stud);
}

console.log(result);
