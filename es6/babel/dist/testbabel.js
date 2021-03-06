"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = 10;

var Foo = function () {
    function Foo(age) {
        _classCallCheck(this, Foo);

        this.age = age;
    }

    _createClass(Foo, [{
        key: "showAge",
        value: function showAge() {
            console.log(this.age);
        }
    }]);

    return Foo;
}();

var foo = new Foo(18);
foo.showAge();