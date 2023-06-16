$(document).ready(function(){
    const url=`https://jsonplaceholder.typicode.com/posts`;
    $.ajax({
        url: url,
        type: 'GET',
        header:{
            "Content-Type":"application/json"
        },
        success: function(res) {
            console.log(res)
            const imageUrl="https://images.unsplash.com/photo-1602881917445-0b1ba001addf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2QlMjBib3dsfGVufDB8fDB8fHww&w=1000&q=80";
            $.each(res,(index,item)=>{
                const food =`<div class="foodCart" id="${index}">
                   <div class="imageBox"><img src="${imageUrl}" alt="image"></div>
                   <div><b>Price 250.50 Rs</p></div>
                   <div id="addButton"><button>Buy</button></div>
                   <div>${item.title}</div>
              </div>`
              $(".productContainer").append(food);
            });
        },
        error: function(err){
            console.log(err);
        }
    });
})