$(document).ready(function() {
    // Календарь
    let events = [
        {'Date': new Date(2020, 08, 17), 'Title': 'Грандиозная акция на шаблоны'},
        {'Date': new Date(2020, 08, 18), 'Title': 'Раздача промокодов на покупку шаблонов'},
        {'Date': new Date(2020, 08, 19), 'Title': 'День рождение администратора сайта'},
    ];
    let calendar = document.getElementById('calendar');
    caleandar(calendar, events);
});
