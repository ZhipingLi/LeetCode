/**
 * Initialize your data structure here.
 */
 var MyQueue = function() {
    this.input = [];
    this.output = [];
    
    this.rewrite = (from, to) => {
        if (to.length > 0)
            return;
        while (from.length > 0) {
            to.push(from.pop());
        }
    }
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.input.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() { 
    this.rewrite(this.input, this.output);
    return this.output.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this.rewrite(this.input, this.output);
    return this.output[this.output.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.input.length === 0 && this.output.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */