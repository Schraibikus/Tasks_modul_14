Задание № 1

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

Заготовка:

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

Результат:

JS-объект
{
list: [
{ name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
{ name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
]
}

Задание 2

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

Заготовка:

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

Результат:

JS-объект

{
list: [
{ name: 'Petr', age: 20, prof: 'mechanic' },
{ name: 'Vova', age: 60, prof: 'pilot' },
]
}
