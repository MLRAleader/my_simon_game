<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Simon</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
</head>
<body>
  <h1 id="level-title">Press A Key to Start</h1>
  <div class="container">
    <div lass="row">
      <div type="button" id="green" class="btn green">
      </div>
      <div type="button" id="red" class="btn red">
      </div>
    </div>
    <div class="row">
      <div type="button" id="yellow" class="btn yellow">
      </div>
      <div type="button" id="blue" class="btn blue">
      </div>
    </div>
  </div>
  <!--Adding jQuery-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-touch-events/2.0.3/jquery.mobile-events.js"></script>
  <script src="game.js"></script>
</body>
</html>
