document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 003-literals')

  {
    let name = 'Stellar'
    let title = 'Executive Offer'
    let crewman = {
      name,
      title
    }
    console.log(crewman) // {name: "Stellar", title: "Executive Offer"}
  }

  {
    let name = 'Stellar'
    let title = 'Executive Offer'
    let crewman = {
      name,
      title,
      announce () {
        return this.title + ' ' + this.name + ', reporting for duty!'
      }
    }
    console.log(crewman.announce()) // Executive Offer Stellar, reporting for duty!
  }

  {
    let name = 'Stellar'
    let title = 'Executive Offer'
    let crewman = {
      name: 'Wilco',
      title: 'Janitor Second Class',
      announce () {
        return this.title + ' ' + this.name + ', reporting for duty!'
      }
    }
    console.log(crewman.announce()) // Executive Offer Stellar, reporting for duty!
    console.log(name, title) // Stellar Executive Offer
  }

  {
    let name = 'Stellar'
    let title = 'Executive Offer'
    let crewman = {
      name,
      title,
      'announce yourself' () { // function name can be a phrase
        return this.title + ' ' + this.name + ', reporting for duty!'
      }
    }
    // use [] notation for functions with spaces
    console.log(crewman['announce yourself']()) // Executive Offer Stellar, reporting for duty!
  }

  {
    let name = 'Stellar'
    let title = 'Executive Offer'
    let crewman = {
      name,
      title,
      '🎙' () { // using a microphone emoji as function name
        return this.title + ' ' + this.name + ', reporting for duty!'
      }
    }
    // use [] notation for functions with special charachters like emojis
    console.log(crewman['🎙']()) // Executive Offer Stellar, reporting for duty!
  }

  {
    let field = 'name' // dynamic property name
    let methodField = 'announce'
    let name = 'Stellar'
    let crewman = {
      [field]: name,
      [methodField + '01'] () {
        // using dynamic property name with brackets
        return this[field] + ', reporting for duty!'
      }
    }
    console.log(crewman[methodField + '01']()) // Stellar, reporting for duty!
  }

  {
    // i want to store the crew name plainly and keep track of it's order. i'll use an array and setter to manager it
    // getting wise, i want to get the number of the name along with the name when displaying. i'll use a getter
    let crew = {
      crew: [],
      get 'current' () { return this.crew.slice(-1)[0] },
      set 'current' (name) { this.crew.push(this.crew.length + ': ' + name) }
    }

    // notice the front end knows nothing about the array data structure nor that the data is available only
    // in the 'number: name' format i'm enforcing with my setter
    // to the outside, we're still just using '=' and overloading it's functionality
    crew.current = 'Stellar'
    console.log(crew.current) // 0: Stellar
    crew.current = 'Wilco'
    console.log(crew.current) // 1: Wilco
  }

  // can use a dynamic field name with getters and setters
  {
    let field = 'current'
    let crew = {
      crew: [],
      get [field] () { return this.crew.slice(-1)[0] },
      set [field] (name) { this.crew.push(this.crew.length + ': ' + name) }
    }

    crew[field] = 'Stellar'
    console.log(crew.current) // 0: Stellar
    crew[field] = 'Wilco'
    console.log(crew.current) // 1: Wilco
  }
})
