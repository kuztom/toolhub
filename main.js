let requestUrl = 'https://toolhub.kartes.lv/arcgis_api/to_arcgis';
let form = document.getElementById('converter');
//let inputData = document.getElementById('jsonInput').value;
let data = '';

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
        .then(res => data = JSON.stringify(res));

    document.getElementById('output').innerText = data;
}