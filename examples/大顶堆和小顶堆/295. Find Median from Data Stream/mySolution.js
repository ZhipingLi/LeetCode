var MedianFinder = function() {
  this.minHeap = new Heap(true)
  this.maxHeap = new Heap(false)
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  const minSize = this.minHeap.getSize()
  const maxSize = this.maxHeap.getSize()
  if(minSize >= maxSize){
    this.minHeap.insert(num)
    this.maxHeap.insert(this.minHeap.pop())
  }else{
    this.maxHeap.insert(num)
    this.minHeap.insert(this.maxHeap.pop())
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const size = this.maxHeap.getSize() + this.minHeap.getSize()
  if(size % 2 === 0) return (this.maxHeap.peek() + this.minHeap.peek()) / 2
  else return this.maxHeap.peek()
};

class Heap {
  constructor(minFlag){
    this.minFlag = minFlag
    this.arr = []
  }

  insert(num){
    if(!this.arr.length) {
      this.arr.push(num)
      return
    }
    let left = 0, right = this.arr.length - 1
    if(this.minFlag){
      while(left <= right){
        const mid = left + Math.floor((right - left) / 2)
        if(this.arr[mid] >= num){
          right = mid - 1
        }else{
          left = mid + 1
        }
      }
    }else{
      while(left <= right){
        const mid = left + Math.floor((right - left) / 2)
        if(this.arr[mid] > num){
          left = mid + 1
        }else{
          right = mid - 1
        }
      }
    }
    this.arr.splice(left, 0, num)
  }

  pop(){
    return this.arr.pop()
  }

  getSize(){
    return this.arr.length
  }

  peek(){
    return this.arr[this.arr.length - 1]
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */