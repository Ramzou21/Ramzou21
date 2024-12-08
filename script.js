// script.js
const messages = [
    "🎄 Bienvenue dans l'esprit de Noël !",
    "🎁 Préparez un cadeau spécial aujourd'hui.",
    "❄️ Passez une soirée au chaud !",
    "🍪 Préparez des cookies maison !",
    "🎶 Chantez une chanson de Noël.",
    "🌟 Faites une bonne action aujourd'hui.",
    "🎅 Écrivez une lettre au Père Noël !",
    "🕯️ Décorez votre maison avec des lumières.",
    "📖 Lisez un conte de Noël !",
    "☃️ Sortez et amusez-vous dans la neige.",
    "🎨 Fabriquez une décoration de Noël.",
    "🍵 Préparez une boisson chaude festive.",
    "🎧 Écoutez des musiques de Noël !",
    "🎉 Organisez une soirée cocooning !",
    "📷 Prenez une photo festive pour le souvenir.",
    "🍬 Savourez un bonbon de Noël !",
    "🎤 Partagez vos histoires de Noël en famille.",
    "🌠 Observez les étoiles et faites un vœu.",
    "🎂 Faites une bûche de Noël maison.",
    "🎭 Regardez un film classique de Noël.",
    "🎠 Visitez un marché de Noël local.",
    "🎍 Offrez des vœux chaleureux à vos proches.",
    "🎡 Faites une activité spéciale en famille.",
    "✨ Préparez-vous pour une merveilleuse journée de Noël !"
];

function showContent(day) {
    const giftBox = document.getElementById('gift-box');
    const contentText = document.getElementById('content-text');
    contentText.textContent = messages[day - 1];
    giftBox.classList.remove('hidden');
    giftBox.classList.add('show');

    // Retire la boîte après 5 secondes
    setTimeout(() => {
        giftBox.classList.remove('show');
    }, 5000);
}



