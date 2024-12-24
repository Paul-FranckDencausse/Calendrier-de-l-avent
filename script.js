document.addEventListener("DOMContentLoaded", function() {
    const daysContainer = document.querySelector('.days-container');
    const messages = [
        "Préparez-vous pour les fêtes!",
        "Décorez votre maison!",
        "Écoutez des chants de Noël!",
        "Faites une promenade dans la neige!",
        "Préparez des biscuits de Noël!",
        "Regardez un film de Noël!",
        "Écrivez une carte de Noël à un ami!",
        "Buvez du chocolat chaud!",
        "Faites un bonhomme de neige!",
        "Accrochez une couronne de Noël!",
        "Lisez une histoire de Noël!",
        "Chantez des chants de Noël!",
        "Faites une maison en pain d'épices!",
        "Allez voir des lumières de Noël!",
        "Envoyez des cadeaux à votre famille!",
        "Faites une soirée jeux de société!",
        "Allez patiner sur glace!",
        "Préparez un repas de Noël!",
        "Faites un don à une œuvre de charité!",
        "Invitez des amis pour une fête de Noël!",
        "Lisez un poème de Noël!",
        "Faites un karaoké de Noël!",
        "Préparez des friandises de Noël!",
        "C'est la veille de Noël! Profitez du moment avec vos proches!"
    ];

    for (let i = 0; i < 24; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.textContent = i + 1;

        const message = document.createElement('div');
        message.classList.add('hidden-message');
        message.textContent = messages[i];
        day.appendChild(message);

        day.addEventListener('click', function() {
            message.style.display = 'block';
        });

        daysContainer.appendChild(day);
    }
});
