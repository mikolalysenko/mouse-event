var mouse = require('../mouse')

window.onmousemove = function(ev) {
  document.body.innerHTML =
    '<p>Buttons: ' + mouse.buttons(ev) + 
    ' x:' + mouse.x(ev) + 
    ' y:' + mouse.y(ev) + '</p>'
}

window.oncontextmenu = function(ev) {
  ev.stopPropagation()
  ev.preventDefault()
  return false
}