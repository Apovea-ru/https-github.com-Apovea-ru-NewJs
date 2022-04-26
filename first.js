/* 1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6

(по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),

конструктор Product, который принимает параметры name и price, сохраните их как

свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,

который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount

не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип

(как объект transport в уроке).*/

//es5
function Product(name, price) {
    this.name = name;
    this.price = price;
};

let make25PercentDiscount = function(value) {
    value = value*0.75;
    return value;
};

let newProduct = new Product ('monitor', 250);
newProduct.price = make25PercentDiscount(newProduct.price);
console.log(newProduct.price);


//es6
class Product2{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
};

let make25PercentDiscount2 = function(value) {
    value = value*0.75;
    return value;
};


let newProduct2 = new Product2 ('monitor', 250);
newProduct2.price = make25PercentDiscount2(newProduct2.price);
console.log(newProduct2.price);
