var kipas = {
    merek : 'miyako',
    berat : 300,
    warna : 'putih',
    nyalakan : function (){
        return 'kipas berputar'
    },
    matikan : function(){
        return 'kipas berhenti berputar'
    }
}
console.log(kipas.nyalakan())
console.log(kipas.matikan())

//----------------------------------

var laptop = {
    merek : 'HP',
    berat : 300,
    warna : 'hitam',
    powerOn : function(){
        return 'Laptop nyala'
    },
    powerOff : function(){
        return 'Laptop mati'
    }
}
console.log(laptop.powerOn())
console.log(laptop.powerOff())

//----------------------------------

var motor = {
    merek : 'ninja',
    berat : 300,
    warna : 'hijau',
    gas : function(){
        return 'motor berjalan'
    },
    rem : function(){
        return 'motor berhenti'
    }
}
console.log(motor.gas())
console.log(motor.rem()) 

//----------------------------------

var sepeda = {
    merek : 'stabilo',
    berat : 300,
    warna : 'merah',
    kayuh : function(){
        return 'sepeda berjalan'
    },
    rem : function(){
        return 'sepeda berhenti'
    }
}
console.log(sepeda.kayuh())
console.log(sepeda.rem())

//----------------------------------

var kompor = {
    merek : 'sanko',
    berat : 300,
    warna : 'abu-abu',
    nyalakan : function(){
        return 'kompor hidup'
    },
    matikan : function(){
        return 'kompor mati'
    }
}
console.log(kompor.nyalakan())
console.log(kompor.matikan())
