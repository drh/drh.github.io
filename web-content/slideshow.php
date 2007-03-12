<?php
$id = $_GET['id'];
$doc = $_GET['doc'];
$title = $_GET['title'] ? $_GET['title'] : "";
?>
<html>
<head>
<title><?= $title ?></title>
<style>
body { margin: 0 0 0 0; padding: 0 0 0 0; }
object { width: 600px; height: 492px; }
</style>
</head>
<body>
<object type="application/x-shockwave-flash"
 data="https://s3.amazonaws.com:443/slideshare/ssplayer.swf?id=<?= $id ?>&doc=<?= $doc ?>">
 <param name="movie"
 value="https://s3.amazonaws.com:443/slideshare/ssplayer.swf?id=<?= $id ?>&doc=<?= $doc ?>" />
</object>
</body>
</html>
