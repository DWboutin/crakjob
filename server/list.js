var List = function(){
	this.itemsArray = [
		{
			name: 'apple',
			type: 'fruit'
		},
		{
			name: 'beef',
			type: 'meat'
		}
	];
};

List.prototype.getList = function(){
	return this.itemsArray;
};

module.exports = new List();