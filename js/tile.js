function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.save = function (next) {
	return {
    //position: {
      x: this.x,
      y: this.y,
    //},
    value: this.value,
    previousPosition : {
    // In order to reverse the animation, we store the
    // next position as the previous
    x: next.x,
    y: next.y
   }
  };
}

Tile.prototype.serialize = function (next) {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value,
    previousPosition : {
    // In order to reverse the animation, we store the
    // next position as the previous
    x: next.x,
    y: next.y
   }
  };
};

Tile.prototype.clone = function() {
  newTile = new Tile({ x: this.x, y: this.y }, this.value);
  //newTile.previousPosition = { x: this.previousPosition.x, y: this.previousPosition.y };
  //newTile.mergedFrom = { x: this.previousPosition.x, y: this.previousPosition.y };
  return newTile;
}
