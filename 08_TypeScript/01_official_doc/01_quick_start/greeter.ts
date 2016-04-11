/**
 * Created by jzy on 16/3/31.
 */
function greeter(person : string) {
    return "hello" + person;
}


var user = "jzy"
//var user = [0,1,2];

document.body.innerHTML = greeter(user);
//document.body.innerHTML = greeter();
