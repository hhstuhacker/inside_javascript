var canvasElement = $('#canvasElement');

exec();

function exec()
{
	canvasElement.attr('width', $(window).get(0).innerWidth);
	canvasElement.attr('height', $(window).get(0).innerHeight);

	var context = canvasElement.get(0).getContext('2d');
	
	context.shadowBlur = 20;
	context.shadowColor = '#000';

	var img = new Image();
	img.src = 'images/bg-1.jpg';

	$(img).load(function()
	{
		context.drawImage(img, 0, 0,1000,600);
		//context.drawImage(img, 0,0,1000,1000,0, 0,$(window).get(0).innerWidth,$(window).get(0).innerHeight);
	});

};

$(window).resize(exec);
