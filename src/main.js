import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


const head = document.documentElement;
const moon = document.getElementById('moon')

moon.addEventListener('click', () => {
  head.classList.toggle('dark')
  if(head.classList == 'dark'){
        moon.innerHTML = '<i class="fa-regular fa-sun"></i>';
    }
    else{
        moon.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
})

const submit = document.getElementById('submit')


submit.addEventListener('click', () =>{
    
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const comment = document.getElementById('comment')
    const firstName = name.value.split(' ')[0]
    if(name.value === "" || email.value === "" || comment.value === ""){
        alert("⚠️ Please fill all the box before you submit")
    }else{
        alert(`✅ Thank you Mr/Ms ${firstName} for your good feedback!`)
        actsug.classList.toggle('hidden')
    }

})

const sug = document.getElementById('suggestion')
const actsug = document.getElementById('actualsug')
sug.addEventListener('click', () => {
    actsug.classList.toggle('hidden')
})

const sug2 = document.getElementById('leave')
sug2.addEventListener('click', () => {
    actsug.classList.toggle('hidden')
})

const sug3 = document.getElementById('review')
sug3.addEventListener('click', () => {
    actsug.classList.toggle('hidden')
})