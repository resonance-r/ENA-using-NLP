function handleSubmit(event) {
    event.preventDefault();

    // check form entry 
    let formEntry = document.getElementById('url').value
    if (Client.validEntry(formEntry)) {
        console.log(" Form Submitted ")
        // fetching data 
        //promis callback
        fetch('http://localhost:8081/api', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: formEntry
                }),
            })
              //
            .then(res => res.json())
            .then((res) => {
                // ui update
                console.log(res);
                document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
                document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
                document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
                document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`;
                document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
            })
    } else {
        alert(' Invalid URL, please try with a valid URL.');
    }
};
export {
    handleSubmit
};