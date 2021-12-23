let requestUrl = 'https://toolhub.kartes.lv/arcgis_api/to_arcgis';
let form = document.getElementById('converter');
//let inputData = document.getElementById('jsonInput').value;


form.addEventListener('submit', convert);

function convert(e) {
    e.preventDefault();
    let request = new XMLHttpRequest();
    request.open("POST", requestUrl);
    request.setRequestHeader("Content-Type", "application/json");

    request.onreadystatechange = function () {
        if (request.readyState === 4){
            console.log(request.status);
            console.log(request.responseText);
        }
    }

    request.send(document.getElementById('jsonInput').value);
    document.getElementById('output').value = 'here goes converted data';
}