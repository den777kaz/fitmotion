const btn = document.querySelectorAll('.sidebar ul li');

btn.forEach(item =>{

    item.addEventListener('click',()=> {
        btn.forEach(item => item.classList.remove('line--behind'));
        item.classList.add('line--behind');
    })
})
