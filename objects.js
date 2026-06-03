
function vehicle(make,year){
    this.make=make,
    this.year=year
    vehicle.prototype.display=function(){
        console.log(`This ${this.make} year is ${this.year}`)
    }
}

const data=new vehicle("Honda",2000)
data.display()