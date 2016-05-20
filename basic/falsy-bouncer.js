/**
 Falsy Bouncer - https://www.freecodecamp.com/challenges/falsy-bouncer

 Remove all falsy values from an array.

 Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

 */
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(key){
    return !!key;
  });
}

bouncer([7, "ate", "", false, 9]);
