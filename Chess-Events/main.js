async function scrapeData() {
    try {
        const response = await fetch("https://www.chess.com/calendar/");
        const html = await response.text();
//        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const bookTitles = doc.querySelectorAll('h2 img span');
        bookTitles.forEach(function(title) {
            const bookTitle = title.textContent;
            console.log(bookTitle);
            storeData(bookTitle);
        });
    } catch (error) {
        console.log(error);
    }
}

function storeData(data) {
    // code to store data in database or update UI
}

scrapeData();
