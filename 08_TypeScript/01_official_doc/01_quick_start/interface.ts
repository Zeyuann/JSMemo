/**
 * Created by jzy on 16/3/31.
 */
interface Person{
    name: string,
    age: number
}

function greeter(person:Person) {
    return "hello, " + person.name+ " .Are you " + person.age + "   years old?"
}

var xiaoming = {name: "xiaoming", age: 20};

console.log(greeter(xiaoming));
