var canvasElement = $('#canvasElement');

exec();

function exec()
{
	canvasElement.attr('width', $(window).get(0).innerWidth);
	canvasElement.attr('height', $(window).get(0).innerHeight);

	var context = canvasElement.get(0).getContext('2d');
	
	

	context.fillStyle = '#ff6600';
	context.lineWidth = 1;
	context.fillRect(40, 12, 100, 30); // 填充矩形
	context.strokeRect(200, 45, 100, 30);

	// 绘制路径
	context.beginPath();
	context.moveTo(40, 340);
	context.lineTo(240, 340);
	context.closePath();
	context.stroke();

	// 绘制圆形
	context.lineWidth = 3;
	context.strokeStyle = 'blue';
	context.beginPath();
	context.arc(430, 190, 150, 0, Math.PI, false);
	context.closePath();
	context.fill();
	context.stroke();

	// 填充文字
	context.font = '60px 微软雅黑';
	context.strokeStyle = '#aaa';
	context.fillStyle = '#000';
	// context.fillText('钓鱼岛是中国的，苍井空才是世界的！',10,440);
	context.strokeText('钓鱼岛是中国的', 10, 440);

	// 擦除
	// context.clearRect(0, 0, 800, 600);

	/*
	 * //other //这样会消除一切！！！ canvasElement.height = 600; canvasElement.width = 800; context.fillRect(40, 12, 100, 30); // 填充矩形
	 */

};

$(window).resize(exec);
