
Array.prototype.myPush = function (val) {
    this[this.length] = val;
    return this.length;
  };
  
  Array.prototype.myshift = function () {
    if (this.length == 0) return [];
  
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    this.length = this.length - 1;
  };
  Array.prototype.myPop = function () {
    return (this.length = this.length - 1);
  };
  
  Array.prototype.myUnshift = function (val) {
    for (let i = this.length; i > 0; i--) {
      this[i] = this[i - 1];
    }
    this[0] = val;
  
    return this.length;
  };
  
  Array.prototype.myUnshifts = function (...values) {
    const total = [...values, ...this];
  
    total.forEach((val, i) => {
      this[i] = val;
    });
    return total.length;
  };
  

  // upcomming soon

  