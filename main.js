let requestUrl = 'https://toolhub.kartes.lv/arcgis_api/to_arcgis';
let form = document.getElementById('converter');

form.addEventListener('submit', convert);

function convert(e) {
    e.preventDefault();

    fetch(requestUrl, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: document.getElementById('jsonInput').value
    }).then(res => res.json())
        .then(resData => {
            document.getElementById('output').innerText = JSON.stringify(resData);
            console.log(resData);
        });
}