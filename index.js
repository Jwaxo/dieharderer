module.exports = function (string) {
  var match_name
    , movie_name

  var harder_pattern = /([A-Z]|[a-z]+)[\s-][H|h](?:ard)/ // Name Hard/hard
    , two_name_pattern = /([A-Z][a-z]+)[\s-]([A-Z][a-z]+)/ // Name Word
    , er_pattern = /(\w+)[\s-]([A-Za-z]+)(?:er)/ // Name Worder
    , one_name_pattern = /\s([A-Z][a-z]+)/ // Word
    , toos_pattern = /\s(\w+)(?:(?:\,\s)|\s)(?:(?:\btoo\b)|(?:\btwo\b)|2)/ // Word two/too/2
    
  // Couldn't get this to work with a switch, stupidly. No idea what's up with that.
  var harder_match = harder_pattern.exec(string)
    , er_match = er_pattern.exec(string)
    , two_name_match = two_name_pattern.exec(string)
    , one_name_match = one_name_pattern.exec(string)
    , toos_match = toos_pattern.exec(string)
    
  if (harder_match) {
    movie_name = harderify(harder_match[1], 'Hard')
  }
  else if (er_match) {
    movie_name = harderify(er_match[1], er_match[2])
  }
  else if (two_name_match) {
    movie_name = pick_style(two_name_match)
  }
  else if (one_name_match) {
    movie_name = pick_style(one_name_match)
  }
  else if (toos_match) {
    movie_name = pick_style(toos_match)
  }
  return movie_name

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function pick_style(match) {
    var pick_name

    if (Math.floor(Math.random()*2) === 0) {
      if (match.length > 2) {
        pick_name = harderify(match[1],match[2])
      }
      else {
        pick_name = harderify(match[1],'Hard')
      }
    }
    else if (match.length > 2) {
      pick_name = boogaloofy(match[1] + ' ' + capitalize(match[2]))
    }
    else {
      pick_name = boogaloofy(match[1])
    }
    return pick_name
  }

  function harderify(die, hard) {
    var caps_die = capitalize(die)
      , caps_hard = capitalize(hard)
      
    return caps_die + ' ' + caps_hard + ' 2: ' + caps_die + ' ' + caps_hard + 'er'
  }

  function boogaloofy(breakin) {
    var caps_breakin = capitalize(breakin)
    
    return caps_breakin + ' 2: Electric Boogaloo'
  }
}
