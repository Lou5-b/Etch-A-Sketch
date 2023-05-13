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

const sections = document.querySelectorAll('.section');

sections.forEach((section) => {
    section.addEventListener('mouseenter', function (e) {
        console.log('I have entered section')
    });
});


