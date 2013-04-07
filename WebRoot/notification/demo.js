function DesktopNotification( notificationStyle, options, displayTime )
{
	/**
	 * @param {Number}
	 *          notificationStyle 设定创建消息框方式，可取值1（纯文本方式）, 2（HTML方式） 默认为1
	 * @param {Object}
	 *          options 设定消息体参数，包含三个属性（url, title, body),如果notificationStyle值为2，只需定义url属性
	 * @param {Number}
	 *          displayTime 设定消息显示时间，单位ms, 默认为2000
	 */
	this.isSupport = undefined, this.permissionStatue = 1, // PERMISSION_ALLOWED: 0, PERMISSION_NOT_ALLOWED: 1, PERMISSION_DENIED: 2
	this.notificationStyle = notificationStyle || 1, this.options = options ||
	{
		url: "",
		title: "",
		body: ""
	}, this.displayTime = displayTime || 2000, this.content = undefined
}

DesktopNotification.prototype =
{
	constructor: DesktopNotification,

	checkSupport: function()
	{
		if( window.webkitNotifications )
		{
			this.isSupport = true;
		}
		else
		{
			this.isSupport = false;
		}
	},

	requestPermission: function()
	{
		window.webkitNotifications.requestPermission();
		this.permissionStatue = window.webkitNotifications.checkPermission();
	},

	checkPermissionStatue: function()
	{
		if( this.permissionStatue == 0 )
		{
			this.notificationContent();
		}
	},

	notificationContent: function()
	{
		var self = this;
		switch( this.notificationStyle )
		{
		case 1:
			this.content = window.webkitNotifications.createNotification(this.options.url, this.options.title, this.options.body);
			break;
		case 2:
			this.content = window.webkitNotifications.createHTMLNotification(this.options.url);
			break;
		default :
			alert('Sorry, you have not defined the notificationStyle.');
		};

		this.content.onshow = function()
		{
			setTimeout(function()
			{
				self.content.cancel();
			}, self.displayTime)
		}
		this.content.show();
	},

	init: function()
	{
		this.checkSupport();
		if( this.isSupport )
		{
			this.requestPermission();
			this.checkPermissionStatue();
		}
	}

}


var options = {
    // url : "../IMAGE/mediaICON/pause.png",
     title : "hupeng",
     body : "Hello World!"
 }
 var message = new DesktopNotification(1,options,4000);
 message.init();
