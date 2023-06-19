console.log(document.title);

document.title = "Modifying the DOM";

console.log(document.title);


const body = document.body;
const secondChild = body.children[1];

for (const child of secondChild.children) {
  console.log(child);
};

document.body.style.backgroundColor = "green"; 