var assets = {
  "sprites" : {
    "images/hitboxnumbers.png": {
      tile: 16,
      tileh: 16,
      map: {
        hitbox: [0, 0],
        hitbox_hl: [0, 1],
        n0: [0, 2],
      },
    },
  },
};

for (var i = 1; i < 10; i++) {
  assets.sprites['images/hitboxnumbers.png'].map['n' + i] = [0, 12 - i];
}

Crafty.load(assets);

Crafty.c('Hitbox', {
  _number: 0,
  events: {
    'Change': function(data) {
      if (this._number !== data.number) {
        this._setNumber(data.number);
      }
      this._base.attr({x: data.x, y: data.y});
      this._number_sprite.attr({x: data.x, y: data.y});
    },
  },
  init: function() {
    this._base = Crafty.e('2D, Canvas, Mouse, hitbox')
      .bind('MouseDown', function(mouseEvent) {
        this.removeComponent('hitbox').addComponent('hitbox_hl');})
      .bind('MouseUp', function(mouseEvent) {
        this.removeComponent('hitbox_hl').addComponent('hitbox');});
    this._number_sprite = Crafty.e('2D, Canvas, n0');
  },
  _setNumber: function(n) {
    this._number_sprite.removeComponent('n' + this._number);
    this._number_sprite.addComponent('n' + n);
    this._number = n;
  },
});
