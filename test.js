var comma_too = "I want to come, too."
  , no_comma_too = "There are bats too!"
  , hard = "This is going to suck hard."
  , too = "I am coming too."
  , two = "There will be two of us."
  , name = "But what about Jeff?"
  , two_name = "Let's see Lethal Weapon."
  
var find_sequel = require('./index.js')
  
console.log(find_sequel(comma_too))
console.log(find_sequel(no_comma_too))
console.log(find_sequel(hard))
console.log(find_sequel(too))
console.log(find_sequel(two))
console.log(find_sequel(name))
console.log(find_sequel(two_name))