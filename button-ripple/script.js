const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY

    const buttonLeft = e.target.offsetLeft
    const buttonTop = e.target.offsetTop

    const InsideX = x - buttonLeft
    const InsideY = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = InsideY + 'px'
    circle.style.left = InsideX + 'px'

    this.appendChild(circle)
    

    setTimeout(() => circle.remove(), 500)
  })
})
