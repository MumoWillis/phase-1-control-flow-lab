function scuberGreetingForFeet(feet){
  if(feet <=400){
    return 'This one is on me!'
  }
  else if(feet > 400 && feet <=2000){
    return 'That will be twenty bucks.'
  }
  else if(feet >2000 &&  feet <=2500){
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
  }
  
function ternaryCheckCity(city){
  if(city === 'NYC'){
    return "Ok, sounds good."
  }
  else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case ("generous"):
      return "Thank you so much."
    case ("not as generous"):
      return "Thank you."
    default:
      return "Bye."
  }
}