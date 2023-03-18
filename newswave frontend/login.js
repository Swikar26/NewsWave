function login() {
    if ($('#Reporterid').val() == "" || $('#pass').val() == "") {
        alert("Please enter username or password")
        return;
    }
    var param = $.param({
        reporterId: $('#Reporterid').val(),
        pass: $('#pass').val()
    })

    $.ajax({
        url: 'http://localhost:8080/reporter/login?' + param, // point to server-side controller method
        // dataType: 'JSON', // what to expect back from the server
        // contentType: "multipart/form-data",
        processData: false,
        // data: data,
        type: 'get',
        success: function(response) {
            window.location.href = "reporter.html";

            console.log("success")
            $('#msg').html(response); // display success response from the server
        },
        error: function(response) {
            $('#msg').html(response); // display error response from the server
            window.location.href = "reporter.html";
        }
    });

}