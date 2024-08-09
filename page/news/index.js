const load_html = `<div class='loading'>
<h2>Carregando...</h2>
</div>`

async function update_news() {
    let outHtml = "";

    document.querySelector("#news-content").innerHTML = load_html;

    // RESQUEST NEWs
    await fetch("https://api.gdeltproject.org/api/v2/doc/doc?query=(\"agribusiness\"%20OR%20sourcelang:por)&mode=artlist&timespan=6months")
        .then(response => response.text())
        .then(data => {outHtml = data})
        .catch(error => console.error('Error fetching news:', error));
    
    document.querySelector("#news-content").innerHTML = outHtml;
}

window.onload = e => {
    update_news();
}