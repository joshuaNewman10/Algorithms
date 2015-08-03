function Vector(x,y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.add = function(v2) {
  return new Vector(this.x + v2.x, this.y + v2.y);
};

function Book(title, numPages, cost) {
  this.title = title;
  this.numPages = numPages;
  this.cost = cost;
}

Book.prototype.valueOf = function() {
  return this.cost;
};

v1 = new Vector(10, 20);
v2 = new Vector(20, 30);

v3 = v1.add(v2);

myBook = new Book('Hello', 1, 1000);
mySecondBook = new Book('World', 2, 99);

console.log(myBook + mySecondBook);


