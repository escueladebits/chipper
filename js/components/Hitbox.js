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
  required: '2D, Canvas, Mouse, Keyboard, hitbox',
  events: {
      'KeyDown': function(keyboardEvent) {
        if (keyboardEvent.key - Crafty.keys[0] === this._number || keyboardEvent.key - Crafty.keys.NUMPAD_0 === this._number) {
         this._shadow();
       }
      },
      'KeyUp': function(keyboardEvent) {
        if (keyboardEvent.key - Crafty.keys[0] === this._number || keyboardEvent.key - Crafty.keys.NUMPAD_0 === this._number) {
         this._light();
       }
      },
      'MouseDown': function(mouseEvent) {
        this._shadow();
      },
      'MouseUp': function(mouseEvent) {
        this._light();
     },
    'Change': function(data) {
      if (this._number !== data.number) {
        this._children[0].removeComponent('n' + this._number).addComponent('n' + data.number);
      }
      this._number = data.number;
      this.x = data.x;
      this.y = data.y;
    },
  },
  init: function() {
    this.attach(Crafty.e('2D, Canvas, n0'));
  },
  _shadow: function() {
    this.removeComponent('hitbox').addComponent('hitbox_hl');
  },
  _light: function() {
    this.removeComponent('hitbox_hl').addComponent('hitbox');
  },
});
