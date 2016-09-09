/**
 * Created by jan on 30/08/16.
 */

function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}

StretchCell.prototype = {
    minWidth: function () {
        return Math.max(this.inner.minWidth, this.width);
    },
    minHeight: function () {
        return Math.max(this.inner.minHeight, this.height);
    },
    draw: function (width, height) {
        return this.inner.draw(width, height)
    }
};
