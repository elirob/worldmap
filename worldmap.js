<!DOCTYPE html>
<html>
<head>
  <title>jVectorMap demo</title>
  <link rel="stylesheet" href="jquery-jvectormap.css" type="text/css" media="screen"/>
  <script src="jquery.js"></script>
  <script src="https://github.com/bjornd/jvectormap/blob/master/jquery-jvectormap.js"></script>
  <script src="http://jvectormap.com/js/jquery-jvectormap-continents-mill.js"></script>
</head>
<body>
  <div id="world-map" style="width: 600px; height: 400px"></div>
  <script>
    $(function(){
      $('#world-map').vectorMap({map: 'continents-mill'});
    });
  </script>
</body>
</html>
