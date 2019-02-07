const can = {
	a: 1,
	b: 2,
	touchThis() {
		return this;
	},
	whatIsA() {
		// almost equivalent to:
		// return can.a;
		// since `this` refers to the `can` object
		return this.a;
	},
	sumAB() {
		return this.a + this.b;
	},
};

// `this` within a method refers to the object that owns that method
// said another way,
// it refers the whatever comes before the `.` when calling the method
// Because of this, the `this` keyword is special.
// We say that it is dynamic because it gets its value
// not at the time it is defined
// but when it is used!
can === can.touchThis();
can.whatIsA();
can.sumAB();

const cant = {
	phrase: 'Hammer Time!',
	touchThis: can.touchThis,
	sumAB: can.sumAB,
};

cant.touchThis();
cant.sumAB();

// When `this` is used outside of a method,
// it will refer to the global object
// Which, in the browser console is the `window` object
this; // the window object in the browser console
