let arr = ["уроки", "магазин", "уборка"];
console.log(arr);

// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// arr[1] = "JS";
// console.log(arr);

// //Добавить в конец
// arr.push("шоколад")
// console.log(arr);

// //Добавить в начало
// arr.unshift("Спать")
// console.log(arr);

// //Удаление последнего э-та
// arr.pop();
// console.log(arr);

// //Удаление первого э-та
// arr.shift();
// console.log(arr);

// function showName(message)
// {
//     name1 = prompt("Как тебя зовут?")
//     alert("Привет " + name1 + "!" + message);
// }

// showName("Как сам?");
// showName("Что по жизни делаешь?");

// function calc(a, b)
// {
//     return a * b;
// }

// var res = calc(1,2);

// console.log(res);

let trash_money = prompt("Введите вашу З/П", 25000);
let clear_money;
if(trash_money < 100000)
{
    clear_money = trash_money - trash_money * 0.35;
    alert("Чистая З/П: " + clear_money);
}
else
{
    clear_money = trash_money - trash_money * 0.45;
    alert("Чистая З/П: " + clear_money);
}