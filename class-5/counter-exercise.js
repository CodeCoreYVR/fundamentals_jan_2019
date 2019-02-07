const counter = {
	count: 0,
	step: 1,
	set(newCount) {
		// the line below does not update the count property
		// instead it creates a global variable which is not what we want
		// count = newCount;
		// `this.count` accesses the count property of the counter
		this.count = newCount;
	},
	setStep(newStep) {
		this.step = newStep;
	},
	inc() {
		this.count += this.step;
	},
	dec() {
		this.count -= this.step;
	},
	now() {
		return this.count;
	},
	reset() {
		this.count = 0;
	},
};
counter.setStep(2);
counter.inc();
counter.inc();
counter.now();
