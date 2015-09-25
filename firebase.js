var data=require('./datatest');
var Firebase = require('firebase');
var ref = new Firebase('https://demomovie.firebaseio.com/');
ref.remove();
data(function(list){
	if(list){
	for(var i=0;i<list.length;i++){
		ref.push(list[i]);
	}
}
});