const questions = [
  // আপনার প্রশ্ন JSON এখানে থাকবে (আগের মতো)
  {
    "question": "কোন সংখ্যাটি 2 দ্বারা বিভাজ্য?",
    "options": ["(a) 35", "(b) 46", "(c) 51", "(d) 77"],
    "answer": "(b)",
    "explanation": "যে সংখ্যার শেষ অঙ্ক 0, 2, 4, 6 অথবা 8 হয়, সেই সংখ্যাটি 2 দ্বারা বিভাজ্য। 46 এর শেষ অঙ্ক 6।"
  },
  {
    "question": "নিচের কোন সংখ্যাটি 3 দ্বারা বিভাজ্য?",
    "options": ["(a) 245", "(b) 167", "(c) 213", "(d) 542"],
    "answer": "(c)",
    "explanation": "একটি সংখ্যার অঙ্কগুলির যোগফল 3 দ্বারা বিভাজ্য হলে সংখ্যাটি 3 দ্বারা বিভাজ্য হয়। 213 এর অঙ্কগুলির যোগফল (2+1+3) = 6, যা 3 দ্বারা বিভাজ্য।"
  },
  {
    "question": "কোন সংখ্যাটি 4 দ্বারা বিভাজ্য?",
    "options": ["(a) 1234", "(b) 5678", "(c) 9876", "(d) 3200"],
    "answer": "(d)",
    "explanation": "একটি সংখ্যার শেষ দুটি অঙ্ক দ্বারা গঠিত সংখ্যাটি 4 দ্বারা বিভাজ্য হলে, সংখ্যাটি 4 দ্বারা বিভাজ্য হয়। 3200 এর শেষ দুটি অঙ্ক 00, যা 4 দ্বারা বিভাজ্য।"
  },
  {
    "question": "নিচের কোন সংখ্যাটি 5 দ্বারা বিভাজ্য?",
    "options": ["(a) 1094", "(b) 5735", "(c) 1234", "(d) 8017"],
    "answer": "(b)",
    "explanation": "যে সংখ্যার শেষ অঙ্ক 0 অথবা 5 হয়, সেই সংখ্যাটি 5 দ্বারা বিভাজ্য। 5735 এর শেষ অঙ্ক 5।"
  },
  {
    "question": "কোন সংখ্যাটি 6 দ্বারা বিভাজ্য?",
    "options": ["(a) 105", "(b) 124", "(c) 132", "(d) 221"],
    "answer": "(c)",
    "explanation": "যে সংখ্যাটি 2 এবং 3 উভয় দ্বারা বিভাজ্য, সেটি 6 দ্বারা বিভাজ্য। 132 একটি জোড় সংখ্যা (2 দ্বারা বিভাজ্য) এবং এর অঙ্কগুলির যোগফল (1+3+2) = 6, যা 3 দ্বারা বিভাজ্য। তাই 132, 6 দ্বারা বিভাজ্য।"
  },
  {
    "question": "নিচের কোন সংখ্যাটি 7 দ্বারা বিভাজ্য?",
    "options": ["(a) 147", "(b) 153", "(c) 161", "(d) 175"],
    "answer": "(a)",
    "explanation": "একটি সংখ্যা 7 দ্বারা বিভাজ্য কিনা তা পরীক্ষা করার জন্য, সংখ্যাটির শেষ অঙ্ককে দ্বিগুণ করে বাকি অংশ থেকে বিয়োগ করতে হয়। এই প্রক্রিয়া বারবার করা যেতে পারে। 147: 14 - (7 * 2) = 14 - 14 = 0। যেহেতু 0, 7 দ্বারা বিভাজ্য, তাই 147, 7 দ্বারা বিভাজ্য।"
  },
  {
    "question": "কোন সংখ্যাটি 8 দ্বারা বিভাজ্য?",
    "options": ["(a) 2134", "(b) 5032", "(c) 4298", "(d) 7004"],
    "answer": "(b)",
    "explanation": "একটি সংখ্যার শেষ তিনটি অঙ্ক দ্বারা গঠিত সংখ্যাটি 8 দ্বারা বিভাজ্য হলে, সংখ্যাটি 8 দ্বারা বিভাজ্য হয়। 5032 এর শেষ তিনটি অঙ্ক 032 (অর্থাৎ 32), যা 8 দ্বারা বিভাজ্য (32 ÷ 8 = 4)।"
  },
  {
    "question": "নিচের কোন সংখ্যাটি 9 দ্বারা বিভাজ্য?",
    "options": ["(a) 5467", "(b) 3210", "(c) 9873", "(d) 1634"],
    "answer": "(c)",
    "explanation": "একটি সংখ্যার অঙ্কগুলির যোগফল 9 দ্বারা বিভাজ্য হলে সংখ্যাটি 9 দ্বারা বিভাজ্য হয়। 9873 এর অঙ্কগুলির যোগফল (9+8+7+3) = 27, যা 9 দ্বারা বিভাজ্য।"
  },
  {
    "question": "কোন সংখ্যাটি 10 দ্বারা বিভাজ্য?",
    "options": ["(a) 4389", "(b) 6730", "(c) 1235", "(d) 9007"],
    "answer": "(b)",
    "explanation": "যে সংখ্যার শেষ অঙ্ক 0 হয়, সেই সংখ্যাটি 10 দ্বারা বিভাজ্য। 6730 এর শেষ অঙ্ক 0।"
  },
  {
    "question": "422 সংখ্যাটি কোন সংখ্যা দ্বারা বিভাজ্য?",
    "options": ["(a) 3", "(b) 4", "(c) 6", "(d) 2"],
    "answer": "(d)",
    "explanation": "422 এর শেষ অঙ্ক 2, তাই এটি 2 দ্বারা বিভাজ্য।"
  },
  {
    "question": "843 সংখ্যাটি কোন সংখ্যা দ্বারা বিভাজ্য?",
    "options": ["(a) 2", "(b) 3", "(c) 5", "(d) 10"],
    "answer": "(b)",
    "explanation": "843 এর অঙ্কগুলির যোগফল (8+4+3) = 15, যা 3 দ্বারা বিভাজ্য। তাই এটি 3 দ্বারা বিভাজ্য।"
  },
  {
    "question": "1008 সংখ্যাটি কোন সংখ্যা দ্বারা বিভাজ্য?",
    "options": ["(a) 5", "(b) 6", "(c) 7", "(d) 9"],
    "answer": "(b)",
    "explanation": "1008 একটি জোড় সংখ্যা (2 দ্বারা বিভাজ্য)। এর অঙ্কগুলির যোগফল (1+0+0+8) = 9, যা 3 দ্বারা বিভাজ্য। যেহেতু এটি 2 এবং 3 উভয় দ্বারা বিভাজ্য, তাই এটি 6 দ্বারা বিভাজ্য।"
  },
  {
    "question": "750 সংখ্যাটি কোন কোন সংখ্যা দ্বারা বিভাজ্য?",
    "options": ["(a) 2, 5, 6, 10", "(b) 2, 3, 5, 9", "(c) 3, 4, 7, 8", "(d) 2, 6, 8, 10"],
    "answer": "(a)",
    "explanation": "750 এর শেষ অঙ্ক 0, তাই এটি 2, 5, এবং 10 দ্বারা বিভাজ্য। এর অঙ্কগুলির যোগফল (7+5+0) = 12, যা 3 দ্বারা বিভাজ্য। যেহেতু এটি 2 এবং 3 উভয় দ্বারা বিভাজ্য, তাই এটি 6 দ্বারা বিভাজ্য। সুতরাং, 750 সংখ্যাটি 2, 5, 6, 10 দ্বারা বিভাজ্য।"
  },
  {
    "question": "2124 সংখ্যাটি কোন কোন সংখ্যা দ্বারা বিভাজ্য?",
    "options": ["(a) 2, 3, 4, 6", "(b) 2, 4, 5, 8", "(c) 3, 5, 7, 9", "(d) 2, 4, 6, 7"],
    "answer": "(a)",
    "explanation": "2124 একটি জোড় সংখ্যা (2 দ্বারা বিভাজ্য)। এর শেষ দুটি অঙ্ক 24, যা 4 দ্বারা বিভাজ্য। এর অঙ্কগুলির যোগফল (2+1+2+4) = 9, যা 3 দ্বারা বিভাজ্য। যেহেতু এটি 2 এবং 3 উভয় দ্বারা বিভাজ্য, তাই এটি 6 দ্বারা বিভাজ্য। সুতরাং, 2124 সংখ্যাটি 2, 3, 4, 6 দ্বারা বিভাজ্য।"
  },
  {
    "question": "কোন সংখ্যাটি 2, 3 এবং 5 দ্বারা বিভাজ্য?",
    "options": ["(a) 90", "(b) 105", "(c) 125", "(d) 130"],
    "answer": "(a)",
    "explanation": "একটি সংখ্যা 2, 3 এবং 5 দ্বারা বিভাজ্য হতে হলে, সেটি 2×3×5=30 দ্বারা বিভাজ্য হতে হবে। 90, 30 দ্বারা বিভাজ্য।"
  },
  {
    "question": "কোন সংখ্যাটি 4, 5 এবং 8 দ্বারা বিভাজ্য?",
    "options": ["(a) 160", "(b) 180", "(c) 200", "(d) 230"],
    "answer": "(a)",
    "explanation": "একটি সংখ্যা 4, 5 এবং 8 দ্বারা বিভাজ্য হতে হলে, সেটি এদের ল.সা.গু. (LCM) দ্বারা বিভাজ্য হতে হবে। LCM(4, 5, 8) = 40। 160, 40 দ্বারা বিভাজ্য।"
  },
  {
    "question": "কোন সংখ্যাটি 6 এবং 9 উভয় দ্বারা বিভাজ্য?",
    "options": ["(a) 42", "(b) 54", "(c) 72", "(d) 96"],
    "answer": "(b)",
    "explanation": "একটি সংখ্যা 6 এবং 9 উভয় দ্বারা বিভাজ্য হতে হলে, সেটি এদের ল.সা.গু. (LCM) দ্বারা বিভাজ্য হতে হবে। LCM(6, 9) = 18। 54, 18 দ্বারা বিভাজ্য।"
  },
  {
    "question": "নিম্নলিখিত সংখ্যাগুলির মধ্যে কোনটি 7 দ্বারা বিভাজ্য নয়?",
    "options": ["(a) 210", "(b) 301", "(c) 449", "(d) 538"],
    "answer": "(d)",
    "explanation": "210 ÷ 7 = 30; 301 ÷ 7 = 43; 449 ÷ 7 = 64.14 (বিভাজ্য নয়); 538 ÷ 7 = 76.85 (বিভাজ্য নয়)। অপশনগুলোতে সাধারণত একটি সঠিক উত্তর থাকে। এক্ষেত্রে, 538 এবং 449 উভয়ই 7 দ্বারা বিভাজ্য নয়। আমরা প্রদত্ত উত্তর অনুযায়ী 538 বেছে নিলাম।"
  },
  {
    "question": "একটি সংখ্যা 4 এবং 8 দ্বারা বিভাজ্য হলে, সেটি কোন সংখ্যা দ্বারাও বিভাজ্য হবে?",
    "options": ["(a) 2", "(b) 6", "(c) 7", "(d) 9"],
    "answer": "(a)",
    "explanation": "যেহেতু একটি সংখ্যা 8 দ্বারা বিভাজ্য, এবং 8 নিজেই 2 দ্বারা বিভাজ্য, তাই সংখ্যাটি অবশ্যই 2 দ্বারা বিভাজ্য হবে।"
  },
  {
    "question": "একটি সংখ্যা 6 এবং 10 দ্বারা বিভাজ্য হলে, সেটি অবশ্যই কোন সংখ্যা দ্বারা বিভাজ্য হবে?",
    "options": ["(a) 15", "(b) 20", "(c) 30", "(d) 40"],
    "answer": "(c)",
    "explanation": "একটি সংখ্যা 6 এবং 10 উভয় দ্বারা বিভাজ্য হলে, সেটি তাদের ল.সা.গু. (LCM) দ্বারাও বিভাজ্য হবে। LCM(6, 10) = 30। তাই সংখ্যাটি অবশ্যই 30 দ্বারা বিভাজ্য হবে।"
  }
];

const questionNumberElement = document.querySelector('.question-number');
const questionTextElement = document.querySelector('.question-text');
const optionsAreaElement = document.querySelector('.options-area');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const submitButton = document.querySelector('.submit-button');
const clearResponseButton = document.querySelector('.clear-response-button');
const markForReviewButton = document.querySelector('.mark-for-review-button');
const resultAreaElement = document.querySelector('.result-area');
const scoreElement = document.getElementById('score');
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const unattemptedCountElement = document.getElementById('unattempted-count');
const timeElement = document.getElementById('time');
const reviewContainer = document.getElementById('review-questions');
const questionGridContainer = document.querySelector('.question-grid');

// নতুন ফিল্টার বাটন
const showAllButton = document.getElementById('show-all');
const showCorrectButton = document.getElementById('show-correct');
const showWrongButton = document.getElementById('show-wrong');
const showUnattemptedButton = document.getElementById('show-unattempted');

// Introduction Screen Elements
const introductionScreen = document.querySelector('.introduction-screen');
const startTestButton = document.getElementById('start-test-button');
const testContent = document.querySelector('.test-content');


let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let markedForReview = new Array(questions.length).fill(false);
let timeLeft = 30 * 60; // 30 minutes in seconds
let timerInterval;
let totalScore = 0;
let questionStatus = new Array(questions.length).fill(null); // 'correct', 'wrong', 'unattempted'

// একটি অ্যারে শাফেল করার জন্য ইউটিলিটি ফাংশন (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
  timeElement.textContent = formatTime(timeLeft);
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    showResult();
  } else {
    timeLeft--;
  }
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionNumberElement.textContent = `প্রশ্ন ${currentQuestionIndex + 1}`;

  questionTextElement.textContent = currentQuestion.question || '';

  const imageElement = document.getElementById('question-image');
  if (currentQuestion.image) {
    imageElement.src = currentQuestion.image;
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }

  const shuffledOptions = [...currentQuestion.options];
  shuffleArray(shuffledOptions); // অপশনগুলো শাফেল করুন

  optionsAreaElement.innerHTML = '';
  shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.classList.add('option');
    button.textContent = option;
    button.addEventListener('click', (event) => selectAnswer(event, option));
    optionsAreaElement.appendChild(button);

    if (userAnswers[currentQuestionIndex] === option) {
      button.classList.add('selected');
    }
  });

  prevButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = currentQuestionIndex === questions.length - 1;

  if (markedForReview[currentQuestionIndex]) {
    markForReviewButton.classList.add('marked');
    markForReviewButton.textContent = 'পর্যালোচনা থেকে সরান';
  } else {
    markForReviewButton.classList.remove('marked');
    markForReviewButton.textContent = 'Mark for Review';
  }

  updateReviewButtons();
}

function selectAnswer(event, answer) {
  userAnswers[currentQuestionIndex] = answer;
  const options = document.querySelectorAll('.option');
  options.forEach(option => option.classList.remove('selected'));
  event.target.classList.add('selected');
  updateReviewButtons();
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function clearResponse() {
    userAnswers[currentQuestionIndex] = null;
    markedForReview[currentQuestionIndex] = false;
    loadQuestion();
}

function toggleMarkForReview() {
    markedForReview[currentQuestionIndex] = !markedForReview[currentQuestionIndex];
    // This logic ensures if a question is marked/unmarked, it automatically moves to the next,
    // or just reloads the current one if it's the last question.
    if (currentQuestionIndex < questions.length - 1) {
        nextQuestion();
    } else {
        loadQuestion(); // Reload to update button text/style
    }
}


function submitTest() {
  clearInterval(timerInterval);
  showResult();
}

function showResult() {
  introductionScreen.style.display = 'none'; // Intro screen hide
  testContent.style.display = 'none'; // Test content hide
  resultAreaElement.style.display = 'block'; // Result area show

  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;
  totalScore = 0;

  questions.forEach((question, index) => {
    // সঠিক উত্তর খুঁজে বের করার জন্য `answer` প্রপার্টি ব্যবহার করুন
    const correctAnswerOption = question.options.find(opt => opt.startsWith(question.answer));

    if (userAnswers[index] === correctAnswerOption) {
      correctCount++;
      totalScore++;
      questionStatus[index] = 'correct'; // স্ট্যাটাস সংরক্ষণ করুন
    } else if (userAnswers[index] !== null) {
      wrongCount++;
      totalScore -= 0.33;
      questionStatus[index] = 'wrong'; // স্ট্যাটাস সংরক্ষণ করুন
    } else {
        unattemptedCount++;
        questionStatus[index] = 'unattempted'; // স্ট্যাটাস সংরক্ষণ করুন
    }
  });

  totalScore = Math.max(0, totalScore); // স্কোর 0 এর নিচে যাতে না যায়

  scoreElement.textContent = totalScore.toFixed(2);
  correctCountElement.textContent = correctCount;
  wrongCountElement.textContent = wrongCount;
  unattemptedCountElement.textContent = unattemptedCount;

  filterQuestions('all'); // প্রাথমিকভাবে সমস্ত প্রশ্ন প্রদর্শন করুন
}

function updateReviewButtons() {
    const currentReviewButtons = questionGridContainer.querySelectorAll('.grid-button');

    Array.from(currentReviewButtons).forEach((button, index) => {
        button.classList.remove('answered', 'unanswered', 'current-question', 'marked-for-review');

        if (index === currentQuestionIndex) {
            button.classList.add('current-question');
        }

        if (userAnswers[index] !== null) {
            button.classList.add('answered');
            if (markedForReview[index]) {
                button.classList.add('marked-for-review');
            }
        } else if (markedForReview[index]) {
            button.classList.add('marked-for-review');
        } else {
            button.classList.add('unanswered');
        }
    });
}

function filterQuestions(filterType) {
    reviewContainer.innerHTML = ''; // পূর্বের রিভিউ আইটেমগুলি মুছে ফেলুন

    // সমস্ত ফিল্টার বাটন থেকে active ক্লাস সরান
    document.querySelectorAll('.filter-button').forEach(button => {
        button.classList.remove('active');
    });

    // ক্লিক করা বাটনে active ক্লাস যোগ করুন
    document.getElementById(`show-${filterType}`).classList.add('active');


    questions.forEach((question, index) => {
        const status = questionStatus[index];

        let shouldDisplay = false;
        if (filterType === 'all') {
            shouldDisplay = true;
        } else if (filterType === 'correct' && status === 'correct') {
            shouldDisplay = true;
        } else if (filterType === 'wrong' && status === 'wrong') {
            shouldDisplay = true;
        } else if (filterType === 'unattempted' && status === 'unattempted') {
            shouldDisplay = true;
        }

        if (shouldDisplay) {
            const div = document.createElement('div');
            div.classList.add('review-item');
            div.style.width = '100%';
            let userAnswerText = userAnswers[index] || 'কোন উত্তর নেই';
            const correctAnswerText = question.options.find(opt => opt.startsWith(question.answer)) || 'N/A';

            let statusText = '';
            let userAnswerClass = '';

            if (userAnswers[index] === correctAnswerText) {
                userAnswerClass = 'correct-text';
                div.classList.add('correct-answer-review');
                statusText = ' (সঠিক উত্তর)';
            } else if (userAnswers[index] !== null) {
                userAnswerClass = 'wrong-text';
                div.classList.add('wrong-answer-review');
                statusText = ' (ভুল উত্তর)';
            } else if (markedForReview[index]) {
                div.classList.add('marked-for-review-review');
                statusText = ' (পর্যালোচনার জন্য চিহ্নিত - উত্তর দেওয়া হয়নি)';
            } else {
                div.classList.add('unanswered-review');
                statusText = ' (উত্তর দেওয়া হয়নি)';
            }

            if (userAnswers[index] !== null && markedForReview[index]) {
                // This condition for adding '*' is a bit tricky, if marked is cleared on clear response,
                // then * won't appear, which is correct.
                // Re-evaluate if you want a visual indicator for "attempted and marked for review" explicitly.
                // For now, I'll remove the '*' as it's typically for "unattempted and marked for review".
                // statusText += ' <span style="color: red;">*</span>';
            }

            const questionContent = question.question ? `<b>প্রশ্ন ${index + 1}: ${question.question}</b>` :
                                      question.image ? `<img src="${question.image}" alt="Question Image" class="review-question-image" style="max-width: 100px; max-height: 100px; display: block; margin-top: 5px;">` :
                                      `<b>প্রশ্ন ${index + 1}</b>`;


            div.innerHTML = `
              <p class="review-question">${questionContent}<span class="status-text">${statusText}</span></p>
              <p class="review-user-answer">Your Answer: <span class="${userAnswerClass}">${userAnswerText}</span></p>
              <p class="review-correct-answer">Correct Answer: <span class="correct-text">${correctAnswerText}</span></p>
              ${question.explanation ? `<p class="review-explanation">ব্যাখ্যা: ${question.explanation}</p>` : ''}
            `;

            reviewContainer.appendChild(div);
        }
    });
}


// প্রাথমিক কল
document.addEventListener('DOMContentLoaded', () => {
    // Start Test button event listener
    startTestButton.addEventListener('click', () => {
        introductionScreen.style.display = 'none'; // Hide intro screen
        testContent.style.display = 'block'; // Show test content

        // প্রশ্ন গ্রিড বাটন তৈরি করুন - ONLY when test starts
        for (let i = 0; i < questions.length; i++) {
            const button = document.createElement('button');
            button.classList.add('grid-button');
            button.textContent = i + 1;
            button.addEventListener('click', () => {
                currentQuestionIndex = i;
                loadQuestion();
            });
            questionGridContainer.appendChild(button);
        }

        loadQuestion(); // প্রথম প্রশ্ন লোড করুন
        startTimer();   // টাইমার শুরু করুন
        updateReviewButtons(); // রিভিউ বাটনগুলো আপডেট করুন
    });

    // Event listeners for navigation and action buttons (always present)
    nextButton.addEventListener('click', nextQuestion);
    prevButton.addEventListener('click', prevQuestion);
    clearResponseButton.addEventListener('click', clearResponse);
    markForReviewButton.addEventListener('click', toggleMarkForReview);
    submitButton.addEventListener('click', submitTest);

    // ফিল্টার বাটনগুলির জন্য ইভেন্ট লিসেনার যোগ করুন
    showAllButton.addEventListener('click', () => filterQuestions('all'));
    showCorrectButton.addEventListener('click', () => filterQuestions('correct'));
    showWrongButton.addEventListener('click', () => filterQuestions('wrong'));
    showUnattemptedButton.addEventListener('click', () => filterQuestions('unattempted'));
});
