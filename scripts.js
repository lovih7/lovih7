import { SpeedInsights } from "@vercel/speed-insights/next"

const texts = [
  "Frontend Designer",
  "Web Designer",
  "UI / UX Designer",
  "Web Developer",
  "Software Tester"
];

const textElement = document.querySelector(".whitespace-nowrap span");
const SEGUNDO = 1000;

let index = 0;      
let charIndex = 0;   
let isDeleting = false; 
let typingSpeed = 100; 
let pauseBetween = 2000; 

function type() {
  const currentText = texts[index];
  
  if (!isDeleting) {
    
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      
      isDeleting = true;
      setTimeout(type, pauseBetween);
      return;
    }
  } else {
    
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

function atualizarHora() {
    let dataHora = new Date();
    let horaElement = document.querySelector(".text-2xl");

    let formato = (dataHora.getHours() < 10 ? "0" : "") + dataHora.getHours() + " : " + (dataHora.getMinutes() < 10 ? "0" : "") + dataHora.getMinutes()
    horaElement.textContent = formato
}

type();
atualizarHora();
setInterval(atualizarHora, SEGUNDO);
