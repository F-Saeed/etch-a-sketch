/* Functions */

// Function for creating the hover effect
let hoverEffect = () => {
  $('main > div').hover(
    (event) => {
      $(`#${event.target.id}`).css(
        'background-color',
        `#${
          rainbowColors[Math.floor(Math.random() * rainbowColors.length)].hex
        }`
      );
    },
    (event) => {
      $(`#${event.target.id}`).css(
        'background-color',
        `#${
          rainbowColors[Math.floor(Math.random() * rainbowColors.length)].hex
        }`
      );
    }
  );
};

// Function for creating the square grid
let createGrid = (input) => {
  $('main').css('grid-template-columns', `repeat(${input}, 1fr)`);
  $('main').css('grid-template-rows', `repeat(${input}, 1fr)`);

  for (let i = 0; i < Math.round(input ** 2); i++) {
    $('main').append(`<div id="square${i + 1}" class="square"></div>`);
  }

  hoverEffect();
};

// Function for creating the prompt
let input = () => {
  return Number(
    prompt(
      'Enter number of squares on one side, length should be between 1 & 100'
    )
  );
};

/* --------- */

// Rainbow Colors hex values
let rainbowColors = [
  {
    hex: 'fac89e',
  },
  {
    hex: 'e3e891',
  },
  {
    hex: 'c2fc99',
  },
  {
    hex: 'a3fcb3',
  },
  {
    hex: '92e8d5',
  },
  {
    hex: '96c8f2',
  },
  {
    hex: 'ada8ff',
  },
  {
    hex: 'ce94f7',
  },
  {
    hex: 'ed94dd',
  },
  {
    hex: 'fea8bb',
  },
];

// creating a 16 x 16 grid of squares
createGrid(16);

// creating the reset button functionality
$('#reset').click(() => {
  let userInput;

  do {
    userInput = input();
    if (!Number.isInteger(userInput) || userInput < 1 || userInput > 100) {
      alert('Wrong value was entered!');
    }
  } while (!Number.isInteger(userInput) || userInput < 1 || userInput > 100);

  $('main > div').remove();
  createGrid(userInput);
});
