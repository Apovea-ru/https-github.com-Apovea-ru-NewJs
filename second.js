/* 1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по

аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),

а) конструктор Post, который принимает параметры author, text, date и сохраняет

их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет

принимать текст и записывать его в свойство text объекта.

б) конструктор AttachedPost, который принимает параметры author, text, date.

Проинициализируйте эти свойства с помощью конструктора Post, чтобы не

дублировать код. Также в конструкторе AttachedPost должно создаваться свойство

highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.

Объекты типа AttachedPost должны иметь метод makeTextHighlighted,

который будет назначать свойству highlighted значение true.*/
//1a
function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
};

Post.prototype.edit = function (words){
    this.text = words; 
};

//1б
function AttachedPost(author, text, date, highlighted = false) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
};

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.constructor = AttachedPost; 

AttachedPost.prototype.makeTextHighlighted = function (){
    this.highlighted=true;
}


//2а
class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit2(words) {
        this.text = words;
    }
};
//2б
class AttachedPost2 extends Post2{
    constructor(author, text, date, highlighted = false) {
        super(author, text, date);
        this.highlighted = highlighted;
    }
    makeTextHighlighted2() {
        this.highlighted=true;        
    }
};

//Объекты

let postNew = new Post ('User', 'Parabellum', '26-04-22');
let postNew2 = new AttachedPost('User2', 'Parabellum2','26-07-22');
postNew2.makeTextHighlighted();
console.log(postNew2.highlighted);

let postNew3 = new Post2 ('User', 'Parabellum', '26-04-22');
let postNew4 = new AttachedPost2('User2', 'Parabellum2','26-07-22');
postNew4.makeTextHighlighted2();
console.log(postNew4.highlighted);
