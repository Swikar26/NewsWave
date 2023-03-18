function publishReport() {

    var file_data = null;
    try {
        file_data = $('#file').prop('files')[0];
    } catch (e) {
        console.log(e);
    }
    var form_data = new FormData();
    form_data.append('newsContent', $("#story_paragraph").val());
    form_data.append('conclusion_paragraph', $("#conclusion_paragraph").val());
    form_data.append('headline', $("#headline").val());
    form_data.append('file', file_data);
    var param = $.param({
        newsContent: $('#story_paragraph').val(),
        conclusion_paragraph: $('#conclusion_paragraph').val(),
        headline: $('#headline').val(),
        district: $('#district:selected').text(),
        reporterid: $('#reporterid').val()
    });
    $.ajax({
        url: 'http://localhost:8080/reporter/publish', // point to server-side controller method
        dataType: 'text', // what to expect back from the server
        cache: false,
        contentType: multipart / form - data,
        processData: false,
        data: form_data,
        type: 'post',
        success: function(response) {
            console.log("success")
            $('#msg').html(response); // display success response from the server
        },
        error: function(response) {
            $('#msg').html(response); // display error response from the server
        }
    });
}