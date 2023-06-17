$(document).ready(function () {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  let cartItems = [];
  $.ajax({
    url: url,
    type: "GET",
    header: {
      "Content-Type": "application/json",
    },
    success: function (res) {
      const imageUrl =
        "https://images.unsplash.com/photo-1602881917445-0b1ba001addf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2QlMjBib3dsfGVufDB8fDB8fHww&w=1000&q=80";
      $.each(res, (index, item) => {
        const food = `<div class="foodCart" id="${index}">
                   <div class="imageBox"><img src="${imageUrl}" alt="image"></div>
                   <div><b>Price 250.50 Rs</p></div>
                   <div id="addButton"><button>Buy</button></div>
                   <div id="productTitle">${item.title}</div>
              </div>`;
        $(".productContainer").append(food);
      });
    },
    error: function (err) {
      console.log(err);
    },
  });

  $("body").on("click", "#addButton", function () {
    const id = $(this).parents(".foodCart").attr("id");
    const productDesc = $(this).siblings("#productTitle").text();
    cartItems = [...cartItems, { id: id, title: productDesc, price: 250.5 }];
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
  });
});
