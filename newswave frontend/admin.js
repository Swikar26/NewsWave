function getReporter() {
    $.ajax({
        url: 'http://localhost:8080/reporter', // point to server-side controller method
        type: 'get',
        success: function(response) {
            console.log("success")
            appendCard(response)
            $('#msg').html(response); // display success response from the server
        },
        error: function(response) {
            $('#msg').html(response); // display error response from the server
        }
    });
}

function appendCard(data) {
    data.forEach(res => {
        let card = document.createElement("div");

        let name = document.createTextNode('Name:' + res.name + ', ');
        card.appendChild(name);

        let description = document.createTextNode('Description:' + res.description + ', ');
        card.appendChild(description);

        let date = document.createTextNode('date:' + res.date);
        card.appendChild(date);

        let container = document.querySelector("#container1");
        container.appendChild(card);
    });
}