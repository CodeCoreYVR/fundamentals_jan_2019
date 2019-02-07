const counter = {
	set(num) {
		this.count = num;
	},
	inc() {
		this.count += 1;
	},
	dec() {
		this.count -= 1;
	},
	now() {
		return this.count;
	},
};
counter.set(10);
// // add a property to our counter named count whose value is 10
counter.inc();
counter.inc();
counter.inc();
counter.now();

const user = {
	username: 'max_rox_a_lot',
	totalNumberOfFriends: 0,
	addFriend() {
		// `this` refers to the user object
		// so when user.addFriend() is called below
		// we update the `totalNumberOfFriends` property
		// of that spcific user
		this.totalNumberOfFriends += 1;
	},
};

user.addFriend();
user.addFriend();
user.addFriend();
user;
