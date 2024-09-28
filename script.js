const questions = [
    {
        question: "هل سبق لك أن كذبت في موقف حساس؟",
        options: ["نعم", "لا", "أحيانًا", "لا أذكر"],
    },
    {
        question: "ما هو أكبر سر تخفيه عن أصدقائك؟",
        options: ["مشاعري", "تجربتي", "معلوماتي الشخصية", "أخرى"],
    },
    {
        question: "هل تعتقد أنك جيد في الاحتفاظ بالأسرار؟",
        options: ["نعم", "لا", "أحيانًا", "لا أدري"],
    },
    {
        question: "ما هو الشيء الذي تندم عليه في حياتك؟",
        options: ["اختياراتي", "علاقاتي", "وظيفتي", "لا شيء"],
    },
    {
        question: "هل سبق لك أن شعرت بالغيرة من أحد أصدقائك؟",
        options: ["نعم", "لا", "أحيانًا", "لا أذكر"],
    },
    // يمكنك إضافة المزيد من الأسئلة هنا
];

// إنشاء مجموعة عشوائية من الأسئلة
let totalQuestions = questions.length;
let currentIndex = 0;

function startGame() {
    currentIndex = 0; 
    document.getElementById('start-screen').style.display = 'none'; 
    document.getElementById('game-screen').style.display = 'block'; 
    nextQuestion(); 
}

function nextQuestion() {
    if (currentIndex < totalQuestions) {
        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        const resultElement = document.getElementById('result');
        const nextButton = document.getElementById('nextBtn');

        // اختيار سؤال عشوائي
        const randomIndex = Math.floor(Math.random() * questions.length);
        questionElement.textContent = questions[randomIndex].question;

        // عرض الخيارات
        optionsElement.innerHTML = '';
        questions[randomIndex].options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('btn', 'option');
            button.textContent = option;
            button.onclick = () => {
                resultElement.textContent = `اخترت: ${option}`;
                nextButton.disabled = false; // تمكين زر السؤال التالي
            };
            optionsElement.appendChild(button);
        });

        // إزالة السؤال من القائمة
        questions.splice(randomIndex, 1);

        resultElement.textContent = '';
        currentIndex++;
    } else {
        alert("لقد انتهت جميع الأسئلة!");
        resetGame();
    }
}

function resetGame() {
    currentIndex = 0;
    document.getElementById('start-screen').style.display = 'block'; 
    document.getElementById('game-screen').style.display = 'none'; 
}
