Crafty.init(960, 600, document.getElementById('game'));

Crafty.defineScene('mainScene', function() {
  Crafty.pixelart(true);
  Crafty.e('2D, Canvas, Image')
    .image('images/background.png');
  Crafty.viewport.scale(3);
});

Crafty.enterScene('mainScene');
