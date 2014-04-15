dieharderer
===========

A NodeJS module that creates terrible sequel names from strings.

## Installation

1. Install this module: ```npm install dieharderer```
2. Require this module and assign it to a variable name you'll remember: ```var find_sequel = require('dieharderer');```
3. Call this module on various strings to see what it does: ```find_sequel("This is going to suck hard.")```

## Possible String Matches

This module uses Regex to find possible "movie titles" to sequelize. There are four possible matches that will trigger it:

* The word "hard" following another word, which always returns "[Word] Hard 2: [Word] Harder".
* Two capitalized words in sequence.
* One capitalized word other than the start of the sentence.
* A word followed by the word "two", "too", or "2".

Those latter three options will randomly return a movie title either patterned after "Die Hard 2: Die Harder" or "Breakin' 2: Electric Boogaloo".

It's a pretty stupid, silly module.