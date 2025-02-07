document.addEventListener('DOMContentLoaded', () => {



  // Add event listener for the "Show Collage" button
document.getElementById("show-collage-btn").addEventListener("click", () => {
  document.getElementById("timeline").style.display = "block"; // Show the collage
  document.getElementById("show-collage-btn").style.display = "none"; // Hide the button after clicking
});


  const quizContainer = document.getElementById('quiz-container');
  const startQuizButton = document.getElementById('start-quiz');

  // Quiz questions
  const quizQuestions = [
    {
      question: "Who kissed who first?",
      options: ["Pierre kissed Angel", "Angel kissed Pierre"],
      correctAnswer: "Pierre kissed Angel"
    },
    {
      question: "Who said 'I love you' first?",
      options: ["Pierre", "Angel"],
      correctAnswer: "Pierre"
    },
    {
      question: "What is Pierre's favorite genre of anime?",
      options: ["Shonen", "Romance", "Mystery", "Action"],
      correctAnswer: "Shonen"
    },
    {
      question: "What is Angel's favorite genre of anime?",
      options: ["Shonen", "Romance", "Slice of Life", "Action"],
      correctAnswer: "Romance"
    },
    {
      question: "What is our favorite shared activity?",
      options: ["Eating Together", "Going on dates", "Watching shows", "Playing games"],
      correctAnswer: "Eating Together"
    },
    {
      question: "When did we go on our first date?",
      options: ["August 20, 2023", "August 17, 2023", "August 19, 2024"],
      correctAnswer: "August 20, 2023"
    },
    {
      question: "What is Pierre's favorite character in Avatar: The Last Airbender?",
      options: ["Aang", "Zuko", "Toph", "Katara"],
      correctAnswer: "Aang"
    },
    {
      question: "What is Angel's favorite character in Avatar: The Last Airbender?",
      options: ["Aang", "Zuko", "Toph", "Katara"],
      correctAnswer: "Katara"
    },
    {
      question: "What is our favorite genre to watch?",
      options: ["Mystery", "Reality TV", "Romance", "Drama"],
      correctAnswer: "Attack on Titan"
    },
    {
      question: "What is Angel's favorite thing about Pierre?",
      options: ["Sense of humor", "Kindness", "Ambition", "Romantic gestures"],
      correctAnswer: "Ambition"
    },
    {
      question: "What is Pierre's favorite thing about Angle?",
      options: ["Sense of humor", "Kindness", "Ambition", "Romantic gestures"],
      correctAnswer: "Sense of humor"
    },
    {
      question: "If Pierre were a Pokémon, what type would he be?",
      options: [
        "Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison",
        "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark",
        "Steel", "Fairy"
      ],
      correctAnswer: "Fire" 
    },
    {
      question: "If Angel were a Pokémon, what type would she be?",
      options: [
        "Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison",
        "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark",
        "Steel", "Fairy"
      ],
      correctAnswer: "Water" 
    },
    {
      question: "Who is more dramatic when they’re hungry?",
      options: ["Pierre", "Angel"],
      correctAnswer: "Angel" 
    },
    {
      question: "If we had a pet together, what would it be?",
      options: [
        "A cat that ignores us",
        "A dog that is too clingy",
        "A Pokémon that does all our chores",
        "A goldfish we forget to feed"
      ],
      correctAnswer: "A Pokémon that does all our chores" 
    },
      // 🌿 Grass-type Starter
      {
        question: "If Pierre had to choose a favorite Grass-type starter from Gen 1 to the latest, which one would he pick?",
        options: [
          "Bulbasaur (Gen 1)",
          "Treecko (Gen 3)",
          "Rowlet (Gen 7)",
          "Sprigatito (Gen 9)"
        ],
        correctAnswer: "Treecko (Gen 3)" // Adjust based on Pierre’s actual choice
      },
      {
        question: "If Angel had to choose a favorite Grass-type starter from Gen 1 to the latest, which one would she pick?",
        options: [
          "Chikorita (Gen 2)",
          "Turtwig (Gen 4)",
          "Snivy (Gen 5)",
          "Sprigatito (Gen 9)"
        ],
        correctAnswer: "Chikorita (Gen 2)" // Adjust based on Angel’s actual choice
      },
    
      // 🔥 Fire-type Starter
      {
        question: "If Pierre had to choose a favorite Fire-type starter from Gen 1 to the latest, which one would he pick?",
        options: [
          "Charmander (Gen 1)",
          "Torchic (Gen 3)",
          "Infernape (Gen 4)",
          "Fuecoco (Gen 9)"
        ],
        correctAnswer: "Charmander (Gen 1)" // Adjust based on Pierre’s actual choice
      },
      {
        question: "If Angel had to choose a favorite Fire-type starter from Gen 1 to the latest, which one would she pick?",
        options: [
          "Cyndaquil (Gen 2)",
          "Fennekin (Gen 6)",
          "Chimchar (Gen 4)",
          "Charmander (Gen 1)"
        ],
        correctAnswer: "Litten (Gen 7)" // Adjust based on Angel’s actual choice
      },
    
      // 🌊 Water-type Starter
      {
        question: "If Pierre had to choose a favorite Water-type starter from Gen 1 to the latest, which one would he pick?",
        options: [
          "Squirtle (Gen 1)",
          "Mudkip (Gen 3)",
          "Froakie (Gen 6)",
          "Quaxly (Gen 9)"
        ],
        correctAnswer: "Greninja (Gen 6)" // Adjust based on Pierre’s actual choice
      },
      {
        question: "If Angel had to choose a favorite Water-type starter from Gen 1 to the latest, which one would she pick?",
        options: [
          "Totodile (Gen 2)",
          "Piplup (Gen 4)",
          "Oshawott (Gen 5)",
          "Squirtle (Gen 1)"
        ],
        correctAnswer: "Piplup (Gen 4)" // Adjust based on Angel’s actual choice
      },
    {
      question: "What nation would Pierre be from in Avatar: The Last Airbender?",
      options: ["Water Tribe", "Earth Kingdom", "Fire Nation", "Air Nomads"],
      correctAnswer: "Fire Nation" 
    },
    {
      question: "What nation would Angel be from in Avatar: The Last Airbender?",
      options: ["Water Tribe", "Earth Kingdom", "Fire Nation", "Air Nomads"],
      correctAnswer: "Water Tribe" 
    },
    {
      question: "If we could live in any anime world, which one would we choose?",
      options: [
        "The Pokémon world ⚡🎮",
        "Avatar The Last Airbender",
        "A Studio Ghibli magical universe 🍃✨",
        "Haikyu!!"
      ],
      correctAnswer: "The Pokémon world ⚡🎮" // Adjust based on Pierre’s preference
    },
    {
      question: "Which K-drama moment describes us best?",
      options: [
        "The piggyback ride scene 🎒",
        "The accidental kiss scene 😳💋",
        "The dramatic rain confession 🌧️😭",
        "The slow-motion 'love at first sight' scene 🌸😍"
      ],
      correctAnswer: "The piggyback ride scene 🎒" // Adjust based on your choice
    },
  ];

  let currentQuestion = 0;
  const userAnswers = [];
  const angelAnswers = [];
  let isAngelAnswering = false; // Switch between turns

// Function to update button, h3, and question (inside quiz-container) styles
const updateStyles = () => {
  const buttons = document.querySelectorAll(".option");
  const heading = document.querySelector("h3");
  const questionText = quizContainer.querySelector("p"); // Get only the <p> inside quizContainer

  if (isAngelAnswering) {
    buttons.forEach((button) => {
      button.style.backgroundColor = "#ff85c0"; // Angel's color (pink)
      button.style.color = "white";
    });
    heading.style.color = "#ff85c0"; // Angel's turn color
    if (questionText) questionText.style.color = "#ff85c0"; // Change question color
  } else {
    buttons.forEach((button) => {
      button.style.backgroundColor = "#41c7e8"; // Pierre's color (dark green)
      button.style.color = "white";
    });
    heading.style.color = "#41c7e8"; // Pierre's turn color
    if (questionText) questionText.style.color = "#41c7e8"; // Change question color
  }
};


  // Function to display a question
  const displayQuestion = () => {
    if (currentQuestion < quizQuestions.length) {
      const question = quizQuestions[currentQuestion];
      quizContainer.innerHTML = `
        <h3>${isAngelAnswering ? "Angel's Turn" : "Pierre's Turn"}</h3>
        <p>${question.question}</p>
        ${question.options
          .map(
            (option, index) =>
              `<button class="option" data-answer="${option}">${index + 1}. ${option}</button>`
          )
          .join("")}
        <div>
          <button id="back-button" ${currentQuestion === 0 && !isAngelAnswering ? "disabled" : ""}>Back</button>
        </div>
      `;

      // Add event listeners to all the option buttons
      document.querySelectorAll(".option").forEach((button) => {
        button.addEventListener("click", (e) => {
          const selectedAnswer = e.target.getAttribute("data-answer");
          if (isAngelAnswering) {
            angelAnswers[currentQuestion] = selectedAnswer;
            isAngelAnswering = false; // Switch to Pierre's turn
            currentQuestion++;
          } else {
            userAnswers[currentQuestion] = selectedAnswer;
            isAngelAnswering = true; // Switch to Angel's turn
          }
          displayQuestion(); // Show the next question
        });
      });
 // Apply button color update after rendering
 updateStyles();

      // Back button functionality
      const backButton = document.getElementById("back-button");
      backButton.addEventListener("click", () => {
        if (isAngelAnswering) {
          isAngelAnswering = false; // Switch back to Pierre's turn
        } else {
          currentQuestion--; // Go to the previous question
          isAngelAnswering = true; // Switch back to Angel's turn
        }
        displayQuestion(); // Re-render the previous question
      });
    } else {
      // Quiz completed, compare answers
      showResults();
    }
  };

  // Function to display results
  const showResults = () => {
    quizContainer.innerHTML = "<h3>Results</h3>";
    let matchCount = 0; // Counter for matching answers
    quizQuestions.forEach((question, index) => {
      const userAnswer = userAnswers[index] || "No Answer";
      const angelAnswer = angelAnswers[index] || "No Answer";
      const isMatch = userAnswer === angelAnswer; // Check if answers match

      if (isMatch) {
        matchCount++; // Increment match count if answers match
      }

      quizContainer.innerHTML += `
        <p>
          <strong>${question.question}</strong><br>
          Pierre's Answer: ${userAnswer}<br>
          Angel's Answer: ${angelAnswer}<br>
          ${userAnswer === angelAnswer ? "<span style='color:green;'>Matched! ✔️</span>" : "<span style='color:red;'>Not Matched ❌</span>"}
        </p>
      `;
    });

    // Display the final match count
  quizContainer.innerHTML += `
  <h3>Total Matches: ${matchCount} / ${quizQuestions.length}</h3>
`;
document.getElementById("timeline").style.display = "block";

      // Hide the Start Quiz button completely
  startQuizButton.style.display = "none";
  };

  // Start Quiz Button Click Event
  startQuizButton.addEventListener("click", () => {
    currentQuestion = 0;
    userAnswers.length = 0; // Clear previous answers
    angelAnswers.length = 0;
    isAngelAnswering = false;
    startQuizButton.style.display = "none"; // Hide start button
    displayQuestion();
  });
});
