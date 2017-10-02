'use strict'

class LayananTeller {
  constructor() {
  	this.__noAntrian = 0
  	this.arrNoAntrian = []
    //your code here
  }

  antrianTeller(){
      this.__noAntrian ++
      this.arrNoAntrian.push(this._nomorAntrian)
    
    // console.log(this._antrian)
    console.log(`Nomor antrian anda adalah TL-${this.arrNoAntrian.length}`)
  }
}

module.exports = LayananTeller