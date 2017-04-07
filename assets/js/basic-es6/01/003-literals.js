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

  {
    let crew = ['Stellar', 'Dorf', 'Wilco']
    // iterate through array
    for (let crewman of crew) {
      console.log(crewman)
    } // Stellar , Dorf , Wilco
  }

  {
    let crew = ['Stellar', 'Dorf', 'Wilco']
    // want to use an index? set one
    let i = 0
    for (let crewman of crew) {
      i++
      console.log(i + ': ' + crewman)
    } // 1: Stellar, 2: Dorf, 3: Wilco
  }

  {
    // use backticks for template strings and ${} to interpolate variables
    let thanks = 'Thank You, Thank YOU, thank you thank you thank you'
    console.log(`I'd like to thank each and every one of you. So.. ${thanks}`)
      // I'd like to thank each and every one of you. So.. Thank You, Thank YOU, thank you thank you thank you
  }

  {
    // a nice thing about templates literals is letting you break up a string to many lines without fuss
    let thanks = `Thank You, Thank YOU, Thank you...
    thank you thank you thank you
    thank you thank _you`
    console.log(`I'd like to thank _each_ and every one of you:
    So.. ${'ahem..: ' + thanks}`) // expressions are allowd in the interpolation
    // I'd like to thank _each_ and every one of you:
    //     So.. ahem..: Thank You, Thank YOU, Thank you...
    //     thank you thank you thank you
    //     thank you thank _you
  }

  {
    let thankCrewTags = (segments) => console.log(segments) // ["I'd like to thank"]
    thankCrewTags`I'd like to thank` // invoke the tag (function) passing it the template string (no parentheseses)
  }

  console.log('here')

  {
    let thankCrewTags = (segments, ...values) => console.log(segments, values)
      // you get two arrays, the string segments (non-interpolated) and the values (interpolated). in separate arrays
      // ["I'd like to thank. ", ". Ahem, so ", "", raw: Array(3)] (2)
      // ["each and every one of you", "Thank you,.. Thank you.. thank you"]
    let thankee = 'each and every one of you'
    let firsts = 'Thank you,.. Thank you.. thank you'
    thankCrewTags`I'd like to thank. ${thankee}. Ahem, so ${firsts}`
  }

  {
    let thankCrewTags = (segments, ...values) => {
      let overture = segments[0]

      return overture + '. ahem: ' + values[0]
    }

    let thankee = 'each and every one of you'
    let firsts = 'Thank you,.. Thank you.. thank you'
    console.log(thankCrewTags`I'd like to thank. ${thankee} ${firsts}`)
  }
})
