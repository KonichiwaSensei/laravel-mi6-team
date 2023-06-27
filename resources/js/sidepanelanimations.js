const navPanel = document.querySelector('.navigation')
const controller = document.querySelector('.controller')
const navLinksDiv = document.querySelector('.links_div');
const navLinks = navLinksDiv.querySelectorAll(`a`);

controller.addEventListener('click', () => {
    navPanel.classList.toggle('closed')
    const controllerArrow = controller.querySelector('p')
    controllerArrow.textContent = controllerArrow.textContent === "<" ? ">" : "<"
})

navLinks.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList == 'selected') {
            element.classList.remove('selected')
            console.log('deselected');
        } else {
            element.classList.add('selected')
            console.log('selected');
        }
    })
})