'use strict'
let Queue = require('./queue.js')

class LayananCustomerService {
  constructor() {
    //your code here
    this._noAntrian = 0;
    this.arrNoAntrian = []
  }

  antrianCS(){
      this.__noAntrian ++
      this.arrNoAntrian.push(this._nomorAntrian)
    
    queue.addQueue()
    
    console.log(`Nomor antrian anda adalah CS-${this.arrNoAntrian.length}`)
  }
}

module.exports = LayananCustomerService
let queue = new Queue()
// let a = new LayananCustomerService()
// console.log(a.antrianCS())
// console.log(json)