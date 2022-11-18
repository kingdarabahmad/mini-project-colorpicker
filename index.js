const colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const background=document.querySelector('.container-body ')
const resultBox= document.querySelector('.result')
const button= document.querySelector('button')
const result= document.querySelector('.result')

button.addEventListener('click',()=>{
    let hexColor='#'

    for(let i=0 ; i<6 ; i++){
        
        hexColor += colors[getRandomNum()]

    }


        result.textContent=hexColor;
        background.style.backgroundColor=hexColor
})

const getRandomNum=()=>{
    return Math.floor(Math.random()*colors.length)

}
