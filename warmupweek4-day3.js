class Robot{
  constructor() {
    this.name = ''//`Robot${Math.floor(Math.random() * 90 + 10)}`;
    this.reset()
    this.counter=0
  }
  reset(){
    this.name = `Robot${Math.floor(Math.random() * 90 + 10)}`
    this.counter++
  }
  print(){
    console.log(this.name)
    this.counter++
  }
}

var robot1=new Robot();
robot1.print()
robot1.reset()
robot1.print()
