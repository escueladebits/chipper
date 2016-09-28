Crafty.init(960, 600, document.getElementById('game'));

Crafty.defineScene('mainScene', function() {
  Crafty.pixelart(true);
  Crafty.e('2D, Canvas, Image')
    .image('images/background.png');
  Crafty.viewport.scale(3);

Crafty.c('Table', {
  _size: 1,
  events: {
    'Change': function(data) {
      this._cleanTables();
      this._size = data.size;
      this.x = data.x;
      this.y = data.y;
      this._setTables();
    },
  },
  init: function() {
    this._entities = [];
    this._setTables(this._size);
  },
  _setTables: function(s) {
    this._entities = [];
    for (var i = 0; i < this._size; i++) {
      this._entities.push(Crafty.e('2D, Canvas, Image')
        .attr({x: this.x + i * 45, y: this.y})
        .image('images/schooltable.png')
      );
    }
  },
  _cleanTables: function() {
    for (var i = 0; i < this._size; i++) {
      this._entities[i].destroy();
    }
  }
});

Crafty.e('2D, Canvas, Table')
  .attr({x: 82, y: 55, size: 3});
Crafty.e('2D, Canvas, Table')
  .attr({x: 54, y: 93, size: 4});
Crafty.e('2D, Canvas, Table')
  .attr({x: 30, y: 131, size: 5}); 
Crafty.e('2D, Canvas, Table')
  .attr({x: 5, y: 169, size: 6});
});

Crafty.enterScene('mainScene');
