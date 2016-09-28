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
