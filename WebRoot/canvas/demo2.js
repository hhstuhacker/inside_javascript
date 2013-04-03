var canvasElement = $('#canvasElement');

exec();

function exec()
{
	canvasElement.attr('width', $(window).get(0).innerWidth);
	canvasElement.attr('height', $(window).get(0).innerHeight);

	var context = canvasElement.get(0).getContext('2d');

	context.fillStyle = '#aaa';
	context.fillRect(0, 0, $(window).get(0).innerWidth, $(window).get(0).innerHeight);

	// 移动原点坐标
	// context.translate(100, 100);

	context.strokeStyle = '#f60';
	context.save();
	context.strokeRect(10, 10, 100, 30);
	context.strokeStyle = 'red';
	context.save();
	context.strokeRect(50, 50, 100, 30);

	context.strokeStyle = 'blue';
	context.save();
	context.strokeRect(100, 100, 100, 30);

	// context.restore();
	context.restore();
	context.strokeRect(150, 150, 100, 30);

	context.restore();
	context.strokeRect(250, 250, 100, 30);

	context.restore();
	context.strokeRect(350, 350, 100, 30);

	// 缩放
	context.save();
	context.scale(2, 2);

	context.fillStyle = '#f60';
	context.fillRect(320, 120, 100, 30);

	context.restore();

	// 旋转
	context.translate(670, 135);
	context.rotate(Math.PI / 4);
	context.fillStyle = '#f60';
	context.fillRect(-50, -15, 100, 30);

	context.translate(0, 0);

	context.transform(2, 0, 0, 2, 150, 150);
	context.fillRect(0, 0, 100, 100);

	context.setTransform(1, 0, 0, 1, 0, 0);
	var xScale = Math.cos(0.7854);
	var yScale = -Math.sin(0.7854);
	var xSkew = Math.sin(0.7854);
	var ySkew = Math.cos(0.7854);
	var xTrans = 200;
	var yTrans = 200;

	context.transform(xScale, ySkew, xSkew, yScale, xTrans, yTrans);
	context.fillRect(-50, -50, 100, 100);

	context.setTransform(1, 0, 0, 1, 0, 0);
	
	
	context.fillStyle = 'blue';
	context.fillRect(460, 90, 100, 30);
	
	
	context.globalAlpha = 0.5;
	context.fillStyle = 'rgb(255, 123, 172)';
	context.fillRect(500, 100, 100, 30);

};

$(window).resize(exec);
