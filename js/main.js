$(document).ready(function() {
    for (let i = 0; i < 10; i++) { 
        fetchTimeForEST();
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
            // When user is near the bottom, fetch and display multiple time entries
            for (let i = 0; i < 5; i++) {  // Also, load more entries when scrolling
                fetchTimeForEST();
            }
        }
    });
});

function fetchTimeForEST() {
    const apiUrl = `http://worldtimeapi.org/api/timezone/America/New_York`;

    $.get(apiUrl, function(data) {
        const localDateTime = new Date(data.datetime);
        const localDate = localDateTime.toDateString(); // Extracts the date in the format "Wed Jul 28 2021"
        const localTime = localDateTime.toLocaleTimeString(); // Extracts the time in the format "12:00:00 PM"

        // Create a new element to hold the date and time, format it, and append it to the container
        const timeElement = $('<div class="time-entry"></div>').html(`
            <span class="time-label">Date: </span>${localDate}
            <span class="time-label">Current Time: </span>${localTime}
        `);
        $('#time-container').append(timeElement);
    });
}
