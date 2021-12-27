let requestUrl = 'https://toolhub.kartes.lv/arcgis_api/to_arcgis';
let form = document.getElementById('converter');

form.addEventListener('submit', convert);

function convert(e) {
    e.preventDefault();

    let input = document.getElementById('jsonInput').value;

    if(validate(input)){
        fetch(requestUrl, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: input
        }).then(res => res.json())
            .then(resData => {
                document.getElementById('output').innerText = JSON.stringify(resData);
                console.log(resData);
            });
    }
}

function validate(jsonInput)
{
    let alertPlaceholder = document.getElementById('alertPlaceholder');

    try{
        if(jsonInput === '') throw 'Input is empty!';

        let inputObject = JSON.parse(jsonInput); // validates JSON syntax and creates object if possible

        if(!('type' in inputObject)) throw "There is no 'type' property in input";

        if(inputObject["type"] !== "FeatureCollection") throw 'Input does not have FeatureCollection!';

    } catch (err) {
        console.error('Invalid input');
        let alertBox = '<div class="alert alert-danger" role="alert">'+ err + '</div>';
        alertPlaceholder.innerHTML = alertBox;
        return false;
    }

    let alertBox = '<div class="alert alert-success" role="alert">Validation Success!</div>';
    alertPlaceholder.innerHTML = alertBox;
    return true;
}

