/**
 * Created by jzy on 16/4/11.
 */
"use strict";
require("should");
const mylib = require("../index");

describe("My first test", () => {
    it("should get 'hello world!' ", ()=>{
        mylib().should.be.eql("helloworld!");
    })
});