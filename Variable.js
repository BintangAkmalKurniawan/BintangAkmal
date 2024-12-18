var name = `Bintang`;
let age = 20;
const handsome = true;
let data = [`bintang`, `akmal`, `kurniawan`];

console.log(name);
console.log(age);
console.log(handsome);
console.log(data);
console.log(data[0], data[1], data[2]);

let orangGanteng = {
  name: `Bintang`,
  age: 20,
  handsome: true,
  data: [`bintang`, `akmal`, `kurniawan`],
};

console.log(orangGanteng);
console.log(orangGanteng.name);
console.log(orangGanteng.age);
console.log(orangGanteng.handsome);
console.log(orangGanteng.data);

console.log(`hallo nama saya ${orangGanteng.name} umur saya ${orangGanteng.age}`);
data.forEach((item) => {
  console.log(item);
});
