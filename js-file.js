const group = document.querySelector('#group');
const main = document.querySelector('#main');

let i = 0
while (i < 16) {
    const newgroup = document.createElement('div');
    newgroup.setAttribute('id', 'group');
    
    main.appendChild(newgroup)

    let n = 0

    while (n < 16) {
        const section = document.createElement('div');
        section.classList.add('section');
    
        newgroup.appendChild(section)
        n++
    }

    i++
}
//Creates default tile area


const button = document.querySelector('#btn');
button.addEventListener('click', function (e) {
    let dimensionsamount = prompt("Dimensions?")
    let dimensions = parseInt(dimensionsamount, 10)

    const divisions = document.querySelectorAll('#group')
    divisions.forEach((division) => {
        let divs = document.getElementById("group");
        divs.parentNode.removeChild(divs)
    })

    let i = 0
    while (i < dimensions) {
        const newgroup = document.createElement('div');
        newgroup.setAttribute('id', 'group');
        
        main.appendChild(newgroup)

        let n = 0

        while (n < dimensions) {
            const section = document.createElement('div');
            section.classList.add('section');
        
            newgroup.appendChild(section)
            n++
        }
        i++
    }

})
//Creates new tile areas


const sections = document.querySelectorAll('.section');

sections.forEach((section) => {
    section.addEventListener('mouseenter', function (e) {
        section.style.backgroundColor = "black";
    });
});
//Draws