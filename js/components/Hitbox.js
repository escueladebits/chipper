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
  required: '2D, Canvas, Mouse, hitbox',
  events: {
      'MouseDown': function(mouseEvent) {
        this.removeComponent('hitbox').addComponent('hitbox_hl');
      },
      'MouseUp': function(mouseEvent) {
        this.removeComponent('hitbox_hl').addComponent('hitbox');
     },
    'Change': function(data) {
      if (this._number !== data.number) {
        this._number_sprite.removeComponent('n' + this._number).addComponent('n' + data.number);
      }
      this._number = data.number;
      this.x = data.x;
      this.y = data.y;
    },
  },
  init: function() {
    this._number_sprite = Crafty.e('2D, Canvas, n0');
    this.attach(this._number_sprite);
  },
});
