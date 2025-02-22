// Call-to-action (CTA) : 

let selectedAmount = null;
let selectedFrequency = null;

function selectDonation(amount, element) {
  selectedAmount = amount;
  resetBackground("donation");
  element.style.backgroundColor = "#EDFEF6";
  updateButtonText();
}

function selectFrequency(frequency, element) {
  selectedFrequency = frequency;
  resetBackground("frequency");
  element.style.backgroundColor = "#42BE8F";
  resetstylecolor("frequency");
  element.style.color = "#FFFFFF";
  updateButtonText();
}

function resetBackground(type) {
  if (type === "donation") {
    document.querySelectorAll(".donation-option").forEach(button => button.style.backgroundColor = "");
  } else if (type === "frequency") {
    document.querySelectorAll(".frequency-option").forEach(button => button.style.backgroundColor = "");
  }
}

function resetstylecolor(type) {
    if (type === "frequency") {
      document.querySelectorAll(".frequency-option").forEach(button => button.style.color = "");
  }
}

function updateButtonText() {
  let button = document.getElementById("donateButton");
  if (selectedAmount && selectedFrequency) {
    button.textContent = `Faire un don de ${selectedAmount}€/${selectedFrequency}`;
  }
}

function showSelectedOption() {
  if (selectedAmount && selectedFrequency) {
    alert(`Vous avez choisi de faire un don de ${selectedAmount}€/${selectedFrequency}`);
  } else {
    alert("Veuillez sélectionner un montant et une fréquence.");
  }
}


//  Diaporama interactif : 

function ok(src, name, story, date) {
    document.getElementById('main-image').src = src;
    document.getElementById('name').textContent = name;
    document.getElementById('story').textContent = story;
    document.getElementById('date').textContent = date;
  }
  


// Quiz interactif : 

document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "Les associations gardent la majorité des dons pour leur fonctionnement",
            correctAnswer: "Faux",
            explanation: "Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels."
        },
        {
            question: "Les refuges ne prennent que les animaux en bonne santé",
            correctAnswer: "Faux",
            explanation: "Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte !"
        },
        {
            question: "Les associations ont trop de moyens grâce aux dons",
            correctAnswer: "Faux",
            explanation: "Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d'animaux."
        }
    ];

    let score = 0;
    let answeredQuestions = 0;

    questions.forEach((q, index) => {
        const questionElement = document.querySelectorAll('.S5flex1')[index];
        const vraiButton = questionElement.querySelectorAll('.S5box')[0];
        const fauxButton = questionElement.querySelectorAll('.S5box')[1];

        const updateContent = (isCorrect, buttonElement, otherButtonElement) => {
            if (!buttonElement.style.backgroundColor && !otherButtonElement.style.backgroundColor) {
                answeredQuestions++;
                let icon = isCorrect ? '✔️' : '❌';
                let color = isCorrect ? '#D6FCE1' : '#FFE2E2';
                questionElement.innerHTML = `<h3>${q.question}</h3><p style="background-color: ${color}; padding: 10px; border-radius: 5px;">${icon} ${q.explanation}</p>`;
                displayScore();
            }
        };

        vraiButton.addEventListener('click', () => updateContent(q.correctAnswer === "Vrai", vraiButton, fauxButton));
        fauxButton.addEventListener('click', () => updateContent(q.correctAnswer === "Faux", fauxButton, vraiButton));
    });

    function displayScore() {
        if (answeredQuestions === questions.length) {
            document.querySelector('.score').textContent = `Votre score est de : ${score} / ${questions.length}`;
        }
    }
});


// Formulaire : 

document.addEventListener("DOMContentLoaded", function() {
    // Vérifier le message de succès dans le stockage local
    const successMessage = localStorage.getItem("success_message");
    if (successMessage) {
        document.getElementById("success_message").innerHTML = successMessage;
        document.getElementById("success_message").style.color = "green";
        // Supprimer le message de succès après quelques secondes
        setTimeout(function() {
            document.getElementById("success_message").innerHTML = "";
            localStorage.removeItem("success_message");
        }, 5000); // 5000 millisecondes = 5 secondes
    }
});

function validationForm() {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let msg = document.getElementById("msg").value;
    let isValid = true;

    // Réinitialiser les messages d'erreur
    document.getElementById("error_name").innerHTML = "";
    document.getElementById("error_mail").innerHTML = "";
    document.getElementById("error_msg").innerHTML = "";
    document.getElementById("success_message").innerHTML = ""; // Réinitialiser le message de succès

    if (name === "") {
        document.getElementById("error_name").innerHTML = "<br>Votre nom est obligatoire";
        document.getElementById("error_name").style.color = "red";
        isValid = false;
    }
    if (mail === "") {
        document.getElementById("error_mail").innerHTML = "<br>Votre mail est obligatoire";
        document.getElementById("error_mail").style.color = "red";
        isValid = false;
    } else if (mail.indexOf("@") === -1) {
        document.getElementById("error_mail").innerHTML = "<br>Le format de l'adresse mail n'est pas valide";
        document.getElementById("error_mail").style.color = "red";
        isValid = false;
    }
    if (msg === "") {
        document.getElementById("error_msg").innerHTML = "<br>Votre message est obligatoire";
        document.getElementById("error_msg").style.color = "red";
        isValid = false;
    }

    if (isValid) {
        const successMessage = "Formulaire envoyé avec succès !<br>";
        document.getElementById("success_message").innerHTML = successMessage;
        document.getElementById("success_message").style.color = "green";

        // Stocker le message de succès dans le stockage local
        localStorage.setItem("success_message", successMessage);
    }
    return isValid;
}

