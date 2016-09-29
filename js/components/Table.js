Crafty.c('Table', {
  _size: 1,
  events: {
    'Change': function(data) {
      var rebuild = this.size !== data.size;
      this.x = data.x;
      this.y = data.y;
      this._size = data.size;
      if (rebuild) {
        for (var c of this._children) {
          this.detach(c).destroy();
        }
        this._createChildren();
      }
    },
  },
  required: '2D, Canvas, Image',
  init: function() {
    this.image('images/schooltable.png');
    this._createChildren();
  },
  _createChildren: function() {
    for (var i = 1; i < this._size; i++) {
      this.attach(Crafty.e('2D, Canvas, Image')
        .attr({x: this._x + i * 45, y: this._y})
        .image('images/schooltable.png')
      );
    }
  },
});
