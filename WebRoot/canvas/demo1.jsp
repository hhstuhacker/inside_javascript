<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html>
	<head>
		<base href="<%=basePath%>">

		<title>Canvas Hello World</title>
		
		<style type="text/css">
			* {
				margin:0;
				padding:0;
			}
			
			html,body {
				height:100%;
				width:100%;
			}
			
			#canvasElement {
				display:block;
				background:#eee;
			}
			
		</style>
		
	</head>

	<body>

		<canvas id="canvasElement" height="600" width="800"></canvas>

		<script type="text/javascript" src="js/libary/jquery.js"></script>
		<script type="text/javascript" src="canvas/demo1.js"></script>
	</body>
</html>
