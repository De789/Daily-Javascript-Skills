
function Class(name,dept){
    this.name=name;
    this.dept=dept;

    Class.prototype.disply=function(){
        console.log(`This is ${this.name} and My department is ,${this.dept}`)
    }
}

x=new Class("Mahesh","Mechanical")
x.disply()