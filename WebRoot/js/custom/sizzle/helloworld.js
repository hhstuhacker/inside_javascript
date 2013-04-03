var c = function()
{

	var i = 0, len = arguments.length;

	for( ; i < len; i++ )
	{
		console.log(arguments[i]);
	}
};

c(Sizzle(' '));
c(Sizzle('*').length);
var all = Sizzle('*');
for( var i = 0; i < all.length; i++ )
{
	c(all[i].nodeType); //不选择注释节点 
}

var s = function (ele) {
	c(Sizzle(ele));
};

s('html');
s('body');
s('#qunit-fixture p');