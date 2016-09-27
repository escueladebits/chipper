Crafty.init(320, 200, document.getElementById('game'));

Crafty.defineScene('mainScene', function() {
  Crafty.pixelart(true);
  Crafty.e('2D, Canvas, Image')
    .image('images/background.png');
});

Crafty.enterScene('mainScene');
