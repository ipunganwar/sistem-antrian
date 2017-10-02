'use strict'
let fs = require('fs')
let LayananCustomerService = require('./layanan-customer-service.js')
let Queue = require('./queue.js')
let LayananTeller = require('./layanan-teller.js')
let Pegawai = require('./pegawai.js')

class Index {
  constructor() {
    this._data =  []//your code here
    this._cs = new LayananCustomerService() //your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
    this._teller = new LayananTeller() ////your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
  }

  readFile() {
    //your code here
    let json = fs.readFileSync('./antrian.json', 'utf8')
    this.data = JSON.parse(json)

  }

  writeFile() {
    let dataJSON = JSON.stringify(this.data)
    let writeJson = fs.writeFileSync('antrian.json',dataJSON )
  }

  choose(menuNo) {
    //your code here

    switch(menuNo[0]){
      case 'help' :
        this.help();
        break;
      case '1' :
        this.readFile()
        let data =  this.data[0].queues.length + 1
        this.data[0].queues.push(data)
        // queue.addQueue(data)
        this.writeFile()
        console.log(`Nomor antrian CS-${this.data[0].queues.length} silakan menuju ke Customer Service`)
        break;
      case '2' :
        this.readFile()
        let dataTL =  this.data[1].queues.length + 1
        this.data[1].queues.push(dataTL)
        // queue.addQueue(dataTL)
        this.writeFile()
        console.log(`Nomor antrian TL-${this.data[1].queues.length} silakan menuju ke Customer Service`)
        break;

      case '3' :
        this.readFile()
        console.log(`${this.data[0].queues.length !== 0 ? `Nomor antrian CS-${this.data[0].queues.shift()} silakan menuju ke Customer Service` : 'Antrian kosong'} `)
        this.writeFile()
        break;

      case '4' : 
        this.readFile()
        console.log(`${this.data[1].queues.length !== 0 ? `Nomor antrian TL-${this.data[1].queues.shift()} silakan menuju ke Customer Service` : 'Antrian kosong'} `)
        this.writeFile()
        break;

      default : break;
    }
  
  }

  help(){
    console.log('MENU:')
    console.log('1. Ambil antrian Customer Service:')
    console.log('2. Ambil antrian Teller:')
    console.log('3. Panggil antrian Customer Service:')
    console.log('4. Panggil antrian Teller:')
  }

  

}


let command = process.argv.slice(2)
let antri = new Index();
let queue = new Queue();
// let cs = new LayananCustomerService();
// let teller = new LayananTeller();


antri.choose(command)
// antri.readFile()


