window.addEventListener('scroll', function() {
  const textElement = document.getElementById('change-color-1');
  const scrollPosition = window.scrollY;

  // Change color based on scroll position
  if (scrollPosition > 300) { // Example scroll position to trigger color change
    textElement.style.color = 'black'; // New text color when scrolled past a certain point
  } else {
    textElement.style.color = '#BFBFBF'; // Default text color
  }
});


window.addEventListener('scroll', function() {
  const textElement = document.getElementById('change-color-2');
  const scrollPosition = window.scrollY;

  // Change color based on scroll position
  if (scrollPosition > 450) { // Example scroll position to trigger color change
    textElement.style.color = 'black'; // New text color when scrolled past a certain point
  } else {
    textElement.style.color = '#BFBFBF'; // Default text color
  }
});


window.addEventListener('scroll', function() {
  const textElement = document.getElementById('change-color-3');
  const scrollPosition = window.scrollY;

  // Change color based on scroll position
  if (scrollPosition > 600) { // Example scroll position to trigger color change
    textElement.style.color = 'black'; // New text color when scrolled past a certain point
  } else {
    textElement.style.color = '#BFBFBF'; // Default text color
  }
});


window.addEventListener('scroll', function() {
  const textElement = document.getElementById('change-color-4');
  const scrollPosition = window.scrollY;

  // Change color based on scroll position
  if (scrollPosition > 750) { // Example scroll position to trigger color change
    textElement.style.color = 'black'; // New text color when scrolled past a certain point
  } else {
    textElement.style.color = '#BFBFBF'; // Default text color
  }
});



// SCROLLING TEXT PART 2 
window.addEventListener('scroll', function() {
  const textElement = document.getElementById('scrolling-text-1');
  const scrollPosition = window.scrollY;

  // Change color based on scroll position
  if (scrollPosition > 3000) { // Example scroll position to trigger color change
    textElement.style.color = 'black'; // New text color when scrolled past a certain point
  } else {
    textElement.style.color = '#BFBFBF'; // Default text color
  }
});


window.addEventListener('scroll', function() {
  const textElement = document.getElementById('scrolling-text-2');
  const scrollPosition = window.scrollY;

  // Change color based on scroll position
  if (scrollPosition > 3150) { // Example scroll position to trigger color change
    textElement.style.color = 'black'; // New text color when scrolled past a certain point
  } else {
    textElement.style.color = '#BFBFBF'; // Default text color
  }
});


window.addEventListener('scroll', function() {
  const textElement = document.getElementById('scrolling-text-3');
  const scrollPosition = window.scrollY;

  // Change color based on scroll position
  if (scrollPosition > 3300) { // Example scroll position to trigger color change
    textElement.style.color = 'black'; // New text color when scrolled past a certain point
  } else {
    textElement.style.color = '#BFBFBF'; // Default text color
  }
});



// FAQ
const questions = document.querySelectorAll('.question');
// const arrows = document.querySelectorAll('.all');
// const arrows = document.querySelectorAll('.all');

questions.forEach((question) => {
  // Добавляем слушатель события на клик для каждого вопроса
  question.addEventListener('click', () => {
    const answer = question.querySelector('.answer');
    answer.classList.toggle('active'); // Переключаем класс active для ответа
    arrow.classList.toggle('active'); 
    // arrowTwo.classList.toggle('active'); // работают два вместе 

    // Закрываем остальные ответы при открытии текущего
    questions.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        const otherAnswer = otherQuestion.querySelector('.answer');
        otherAnswer.classList.remove('active');
      }
    });
  });
});



const questionTwo = document.querySelectorAll('.questionTwo');
// const arrows = document.querySelectorAll('.all');
// const arrows = document.querySelectorAll('.all');

questionTwo.forEach((questionTwo) => {
  // Добавляем слушатель события на клик для каждого вопроса
  questionTwo.addEventListener('click', () => {
    const answerTwo = questionTwo.querySelector('.answerTwo');
    answerTwo.classList.toggle('active'); // Переключаем класс active для ответа
    arrowTwo.classList.toggle('active'); 
    // arrowTwo.classList.toggle('active'); // работают два вместе 

    // Закрываем остальные ответы при открытии текущего
    questionTwo.forEach((otherQuestion) => {
      if (otherQuestion !== questionTwo) {
        const otherAnswer = otherQuestion.querySelector('.answerTwo');
        otherAnswer.classList.remove('active');
      }
    });
  });
});



const questionThree = document.querySelectorAll('.questionThree');
// const arrows = document.querySelectorAll('.all');
// const arrows = document.querySelectorAll('.all');

questionThree.forEach((questionThree) => {
  // Добавляем слушатель события на клик для каждого вопроса
  questionThree.addEventListener('click', () => {
    const answerThree = questionThree.querySelector('.answerThree');
    answerThree.classList.toggle('active'); // Переключаем класс active для ответа
    arrowThree.classList.toggle('active'); 
    // arrowTwo.classList.toggle('active'); // работают два вместе 

    // Закрываем остальные ответы при открытии текущего
    questionThree.forEach((otherQuestion) => {
      if (otherQuestion !== questionThree) {
        const otherAnswer = otherQuestion.querySelector('.answerThree');
        otherAnswer.classList.remove('active');
      }
    });
  });
});



const questionFour = document.querySelectorAll('.questionFour');
// const arrows = document.querySelectorAll('.all');
// const arrows = document.querySelectorAll('.all');

questionFour.forEach((questionFour) => {
  // Добавляем слушатель события на клик для каждого вопроса
  questionFour.addEventListener('click', () => {
    const answerFour = questionFour.querySelector('.answerFour');
    answerFour.classList.toggle('active'); // Переключаем класс active для ответа
    arrowFour.classList.toggle('active'); 
    // arrowTwo.classList.toggle('active'); // работают два вместе 

    // Закрываем остальные ответы при открытии текущего
    questionFour.forEach((otherQuestion) => {
      if (otherQuestion !== questionFour) {
        const otherAnswer = otherQuestion.querySelector('.answerFour');
        otherAnswer.classList.remove('active');
      }
    });
  });
});



const questionFive = document.querySelectorAll('.questionFive');
// const arrows = document.querySelectorAll('.all');
// const arrows = document.querySelectorAll('.all');

questionFive.forEach((questionFive) => {
  // Добавляем слушатель события на клик для каждого вопроса
  questionFive.addEventListener('click', () => {
    const answerFive = questionFive.querySelector('.answerFive');
    answerFive.classList.toggle('active'); // Переключаем класс active для ответа
    arrowFive.classList.toggle('active'); 
    // arrowTwo.classList.toggle('active'); // работают два вместе 

    // Закрываем остальные ответы при открытии текущего
    questionFive.forEach((otherQuestion) => {
      if (otherQuestion !== questionFive) {
        const otherAnswer = otherQuestion.querySelector('.answerFive');
        otherAnswer.classList.remove('active');
      }
    });
  });
});




