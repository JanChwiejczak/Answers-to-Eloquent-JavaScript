function SeqArray(array) {
    this.state = 0;
    this.array = array;
}

Object.defineProperty(SeqArray.prototype, "exhausted", {
    get: function() {
        return this.state >= this.array.length
    }
});

SeqArray.prototype.next = function() {
    if (!this.exhausted) {
        var next =  this.array[this.state];
        this.state += 1;
        return next
    }
};


var LogFive = function(sequence) {
   for (var i = 0; i < 5; i++) {
       if (sequence.exhausted) { break; }
       console.log(sequence.next())
   }
};

LogFive(new SeqArray([1, 2, 3 ]));
