'use strict'
let fs = require('fs')
let json = fs.readFileSync('./antrian.json', 'utf8')



class Queue {
  constructor() {
    this._antrian  = []
    this._nomorAntrian =  this._antrian.length//your code here
    
  }

   addQueue(index){
    //your code here
   this._antrian.push(index) 
   // console.log(this._antrian)
  }

  popQueue(index) {
    //your code here
    
  }
}

module.exports = Queue

let oke = new Queue()
// console.log(oke)