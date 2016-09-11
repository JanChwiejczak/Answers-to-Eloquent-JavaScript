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
        this.state++;
        return this.array[this.state - 1];
    }
};


// Inheriting from SeqArray prototype
function RangeSeq(from, to) {
    this.state = 0;
    this.array = new Array(to - from + 1).fill();
    for (var i=0; i < this.array.length; i++) {
        this.array[i] = from + i;
    }
}

RangeSeq.prototype = Object.create(SeqArray.prototype);


// No Inheritance
function RangeSeq(from, to) {
    this.state = from;
    this.to = to;
}

Object.defineProperty(RangeSeq.prototype, "exhausted", {
    get: function() {
        return this.state > this.to
    }
});

RangeSeq.prototype.next = function() {
    if (!this.exhausted) {
        this.state++;
        return this.state - 1
    }
}

// Helper function
var LogFive = function(sequence) {
   for (var i = 0; i < 5; i++) {
       if (sequence.exhausted) { break; }
       console.log(sequence.next())
   }
};

LogFive(new SeqArray([1, 2, 3 ]));
LogFive(new RangeSeq(103, 1005));
