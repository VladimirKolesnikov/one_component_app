fetch("http://localhost:3005", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John",
    age: 25,
  }),
});
// .then(res => res.json())
// .then(data => {
//     console.log('Відповідь:', data);
// })
// .catch(err => {
//     console.error('Помилка:', err);
// });

console.log("from sandbox");
