//Page d'accueil

// Call-to-action (CTA) : Proposer des dons de 10 €, 20 €, 50 € avec trois fréquences au choix : une fois, mensuellement, ou annuellement. Un bouton résumera dynamiquement le montant et la fréquence sélectionnés. Au clic sur le bouton, un prompt affichera l'option choisie.
// Diaporama interactif : Mettre en avant les animaux sauvés par l'ONG, avec leurs photos, noms, histoires et une phrase inspirante.
// Description de l'association : Bloc stylisé, moderne et visuellement attractif expliquant la mission de Quatre Pattes.
// Quiz interactif : Ajouter un quiz éducatif pour briser les idées reçues sur les associations de protection des animaux. Par exemple, "Vrai ou faux : Les associations ne peuvent pas aider les animaux sauvages en captivité". Le quiz affichera les bonnes réponses et un score final à la fin.

// 
// 
// 
// Astuces
// //dons : Une variable mensuelle et un variable montant, mettre une valeur par défaut à 20 euros mensuel par ex //
//photos (exo aspirateur): Quand je clique sur Oscar, l'image d'Oscar s'affiche en grand.4 parametres image nom de l'image, deuxieme texte, troisieme texte //
//testez vos connaissances : utiliser inner html//
//formulaire : Variable si on répond aux trois questions il affiche le score //




















// Page contact :

//     Un formulaire contenant le nom, le sujet du message, l'adresse email, un message et un bouton envoyer
//     Une liste déroulante de sujets (exemple : Faire un don, Devenir bénévole, Questions générales).
//     Champs obligatoires pour le nom, adresse email et message.
//     Validation des champs avec un script JavaScript pour s'assurer qu'ils ne sont pas vides et qu'une adresse email valide est saisie.
//     Bouton d'envoi et confirmation que le formulaire a bien été soumis.

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

