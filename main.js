var headline = document.getElementById('headline')
var song = document.getElementById('radiohead')
var canvas = document.getElementById('myCanvas')
var shapes = []

paper.setup(canvas)
paper.install(window)

function ran(min, max) {
  return Math.random() * (max - min) + min
}

function makeLine() {
  var x = ran(1, window.innerWidth)
  var y = ran(1, window.innerHeight)
  var s = ran(1, window.innerWidth)
  var m = ran(1, window.innerHeight)
  var r = ran(150, 200)
  var g = ran(0, 200)
  var b = ran(150, 200)

  var line = new paper.Path.Line({
    from: [x, y],
    to: [s, m],
    strokeColor: 'rgb(' + r + ',' + g + ',' + b + ')'
  })

  shapes.push(line)
}

function makeSquare() {
  var x = ran(1, window.innerWidth)
  var y = ran(1, window.innerHeight)
  var z = ran(1, 100)
  var r = ran(0, 200)
  var g = ran(150, 200)
  var b = ran(150, 200)

  var square = new paper.Shape.Rectangle({
    point: [x, y],
    size: [z, z],
    strokeColor: 'rgb(' + r + ',' + g + ',' + b + ')'
  })

  shapes.push(square)
}

function makeStar() {
  var x = ran(1, window.innerWidth)
  var y = ran(1, window.innerHeight)
  var points = Math.round(ran(5, 10))
  var radius1 = Math.round(ran(10, 15))
  var radius2 = Math.round(ran(25, 35))
  var r = ran(150, 200)
  var g = ran(150, 200)
  var b = ran(0, 200)

  var star = new paper.Path.Star({
    center: [x, y],
    points:  points,
    radius1: radius1,
    radius2: radius2,
    strokeColor: 'rgb(' + r + ',' + g + ',' + b + ')'
  })

  shapes.push(star)
}

function makeRectangle() {
  var x = ran(1, window.innerWidth)
  var y = ran(1, window.innerHeight)
  var z = ran(1, 100)
  var r = ran(0, 200)
  var g = ran(180, 200)
  var b = ran(0, 200)

  var rectangle = new paper.Shape.Rectangle({
    point: [x, y],
    size: [z, z + 10],
    strokeColor: 'rgb(' + r + ',' + g + ',' + b + ')'
  })

  shapes.push(rectangle)
}

function makeCircle() {
  var r = ran(0, 200)
  var g = ran(180, 200)
  var b = ran(0, 200)
  var centerX = ran(0, window.innerWidth)
  var centerY = ran(0, window.innerHeight)
  var radius = ran(10, 50)

  var circle = new paper.Shape.Circle(new paper.Point(centerX, centerY), radius)
  circle.strokeColor = 'rgb(' + r + ',' + g + ',' + b + ')'

  shapes.push(circle)
}

function makeEllipse() {
  var r = ran(0, 200)
  var g = ran(0, 200)
  var b = ran(180, 200)
  var a = ran(.5, 1)
  var centerX = ran(0, window.innerWidth)
  var centerY = ran(0, window.innerHeight)
  var radius = ran(10, 50)

  var ellipse = new paper.Shape.Ellipse({
    center: [centerX, centerY],
    radius: [radius + 50, radius],
    strokeColor: 'rgb(' + r + ',' + g + ',' + b + ')'
  })

  shapes.push(ellipse)
}

document.body.addEventListener('keypress', function(e) {
  headline.classList.add('hidden')
  song.play()
  console.log(e.charCode)

  if(e.charCode === 13) {
    makeStar()
  }

  if (e.charCode <= 96 && e.charCode !== 13) {
    makeSquare()
  }

  if (e.charCode >= 97 && e.charCode <= 102) {
    makeCircle()
  }

  if (e.charCode >= 103 && e.charCode <= 108) {
    makeEllipse()
  }

  if (e.charCode >= 109 && e.charCode <= 114) {
    makeRectangle()
  }

  if (e.charCode >= 115) {
    makeLine()
  }

})

view.onFrame = function(event) {
  shapes.forEach(function(shape) {
    // shape.position = new paper.Point(ran(0, window.innerWidth), ran(0, window.innerHeight))
    shape.strokeWidth = ran(2, 4)

  })
}
