$(document).ready(function(){
    const url=`https://jsonplaceholder.typicode.com/posts`;
    $.ajax({
        url: url,
        type: 'GET',
        header:{
            "Content-Type":"application/json"
        },
        success: function(res) {
            console.log(res);
        },
        error: function(err){
            console.log(err);
        }
    });
})