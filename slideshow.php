<?php
$id = $_GET['id'];
$doc = $_GET['doc'];
$title = $_GET['title'] ? $_GET['title'] : "";
?>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><?= $title ?></title>
<style type="text/css">
body { margin: 0 0 0 0; padding: 0 0 0 0; }
object { width: 100%; height: 100%; }
</style>
</head>
<body>
<object type="application/x-shockwave-flash"
 data="https://s3.amazonaws.com:443/slideshare/ssplayer.swf?id=<?= $id ?>&amp;doc=<?= $doc ?>">
 <param name="movie"
 value="https://s3.amazonaws.com:443/slideshare/ssplayer.swf?id=<?= $id ?>&amp;doc=<?= $doc ?>">
</object>
</body>
</html>
