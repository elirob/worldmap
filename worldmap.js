<!DOCTYPE html>
<html>
<head>
  <title>jVectorMap demo</title>
  <link rel="stylesheet" href="jquery-jvectormap.css" type="text/css" media="screen"/>
  <script src="jquery.js"></script>
  <script src="jquery-jvectormap-js"></script>
  <script src="jquery-jvectormap-world.js"></script>
</head>
<body>
  <div id="world-map" style="width: 600px; height: 400px"></div>
  <script>
    $(function(){
      $('#world-map').vectorMap({map: 'world_mill'});
    });
  </script>
</body>
</html>
