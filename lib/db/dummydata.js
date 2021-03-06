'use strict';

var mongoose = require('mongoose'),
		ObjectId = mongoose.Types.ObjectId,
    Cat = mongoose.model('Cat'),
    Owner = mongoose.model('Owner'),
    Photo = mongoose.model('Photo');

// Generate dummy object ids
var id = { cat: 3, owner: 2, photo: 8 };
['cat', 'owner', 'photo'].forEach(function(v) {
	var c = id[v]; id[v] = [];
	while (c--) { id[v].push(ObjectId()); }
});

// Add dummy cats
Cat.find({}).remove(function() {
	Cat.create(

	// Cat: Katy
	{
		_id: id.cat[0],
		owner: id.owner[0],

		info: {
			name: 'Katy',
			description: 'Our youngest family member, we love her so much!',
			breed: 'Persian Gray',
			gender: 'f',
			born: new Date(2012, 2, 8)
		},

		favorites: {
			food: 'Whiskers Cans',
			color: 'orange'
		},

		photos: [id.photo[0], id.photo[1]]
	},

	// Cat: Ronald
	{
		_id: id.cat[1],
		owner: id.owner[1],

		info: {
			name: 'Ronald',
			description: 'Ronald is the perfect companion pet, always calm and *purrr*, so loveful. We sometimes call him Mr. Ronald, as it\'s way funnier!',
			breed: 'British Shorthair',
			gender: 'm',
			born: new Date(2011, 9, 4)
		},

		favorites: {
			food: 'Home-Baked Cookies',
			color: 'blue'
		},

		photos: [id.photo[2], id.photo[3]]
	},

	// Cat: Bernie
	{
		_id: id.cat[2],
		owner: id.owner[1],

		info: {
			name: 'Bernie',
			description: 'Our little tiger!',
			breed: 'Bernie',
			gender: 'm',
			born: new Date(2012, 2, 9)
		},

		favorites: {
			food: 'Cooked Mice',
			color: 'yellow'
		},

		photos: [id.photo[4], id.photo[5]]
	},

	function(err) {
			console.log(err, 'Finished inserting dummy cats');
		}
	);
});

// Add dummy owners
Owner.find({}).remove(function() {
	Owner.create(

	// Owner: Tanya Rottfield
	{
		_id: id.owner[0],
		cats: [id.cat[0]],

		info: {
			name: 'Tanya Rottfield',
			description: 'I\'ve always loved animals, especially cats. I\'d love to meet other owners with the same hobbies as me!',
			gender: 'f',
			born: new Date(1977, 11, 10),
			avatar: id.photo[6]
		},

		meta: {
			followers: [id.owner[1]]
		}
	},

	// Owner: Mike Wedgers
	{
		_id: id.owner[1],
		cats: [id.cat[1], id.cat[2]],

		info: {
			name: 'Mike Wedgers',
			description: 'I\'m passionate about photography and felines. I\'d love to become a better pet owner and also find other cat photography enthusiasts!',
			gender: 'm',
			born: new Date(1982, 4, 7),
			avatar: id.photo[7]
		},

		meta: {
			followers: [id.owner[0]]
		}
	},

	function(err) {
			console.log(err, 'Finished inserting dummy owners');
		}
	);
});

// Add dummy photos
Photo.find({}).remove(function() {
	Photo.create(

	// Photo: 1
	{
		_id: id.photo[0],
		owner: { cat: id.cat[0] },
		ownerType: 'Cat',
		url: 'http://lorempixel.com/1700/1700/cats/1',
		hearts: 55,
		description: 'Katy\'s first bath. That was a disaster, but we survived!'
	},

	// Photo: 2
	{
		_id: id.photo[1],
		owner: { cat: id.cat[0] },
		ownerType: 'Cat',
		url: 'http://lorempixel.com/1700/1700/cats/2',
		hearts: 109,
		description: 'This is her first photo. Smile, Katy!'
	},

	// Photo: 3
	{
		_id: id.photo[2],
		owner: { cat: id.cat[1] },
		ownerType: 'Cat',
		url: 'http://lorempixel.com/1700/1700/cats/3',
		hearts: 22,
		description: 'Katy\'s first bath. That was a disaster, but we survived!'
	},

	// Photo: 4
	{
		_id: id.photo[3],
		owner: { cat: id.cat[1] },
		ownerType: 'Cat',
		url: 'http://lorempixel.com/1700/1700/cats/4',
		hearts: 331,
		description: 'This is her first photo. Smile, Katy!'
	},

	// Photo: 5
	{
		_id: id.photo[4],
		owner: { cat: id.cat[2] },
		ownerType: 'Cat',
		url: 'http://lorempixel.com/1700/1700/cats/5',
		hearts: 200,
		description: 'Katy\'s first bath. That was a disaster, but we survived!'
	},

	// Photo: 6
	{
		_id: id.photo[5],
		owner: { cat: id.cat[2] },
		ownerType: 'Cat',
		url: 'http://lorempixel.com/1700/1700/cats/6',
		hearts: 50,
		description: 'This is her first photo. Smile, Katy!'
	},

	// Photo: 7
	{
		_id: id.photo[6],
		owner: { owner: id.owner[0] },
		ownerType: 'Owner',
		url: 'http://lorempixel.com/400/400/people/1'
	},

	// Photo: 8
	{
		_id: id.photo[7],
		owner: { owner: id.owner[1] },
		ownerType: 'Owner',
		url: 'http://lorempixel.com/400/400/people/6'
	},

	function(err) {
			console.log(err, 'Finished inserting dummy photos');
		}
	);
});
