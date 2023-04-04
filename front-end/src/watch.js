export const getwatch = () => {
    const colors = document.querySelectorAll('.colors span')

colors.forEach(c=>{
    c.addEventListener('click' , chooseColor)
})


function chooseColor(){
    let index = this.dataset.value

    const currentImage = document.querySelector(`.img-${index}`)
    document.querySelector('.image.show').classList.remove('show')
    currentImage.classList.add('show')

    colors.forEach(c=>{
        c.classList.remove('active')
        this.classList.add('active')
    })
}
}