// unicorn class

class Unicorn {

  // init unicorn
  constructor (unicorn) {
    this.id = unicorn.id,
    this.name = unicorn.name,
    this.rest = unicorn.rest,
    this.rented = false,
    this.resting = false
  }

  // rent
  rent () {
    if (!this.rented && !this.resting) {
      this.rented = true
      console.log('  rented successfully')
    } else {
      console.log(`   ${this.name} is already rented or is resting`)
    }
  }
  // return
  return () {
    if (this.rented) {
      this.rented = false
      console.log('  returned successfully')
    } else {
      console.log(`   ${this.name} is not rented`)
    }
  }

  // trigger resting
  triggerRest () {
    this.resting = true

    setTimeout(() => this.resting = false, this.rest)
  }

}

module.exports = Unicorn
