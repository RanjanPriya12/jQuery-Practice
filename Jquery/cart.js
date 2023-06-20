$(document).ready(function () {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  console.log(cartItems);
  const table = `<table>
                    <thead>
                        <tr>
                            <th>Food Image</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody id="itemCard"></tbody>
              </table>`;
              $(".itemsSection").append(table);
  $.each(cartItems, (index, item) => {
    const cartItem = `<tr key="${index}">
    <td><div><img src="${item.image}" alt="image"/></div></td>
    <td>${item.title}</td>
    <td><button id="deleteQuantity">-</button>1<button id="addQuantity">+</button></td>
    <td>${item.price} Rs.</td>
    <td><button id="removeButton">remove</button></td>
</tr>`;
    $("#itemCard").append(cartItem);
    console.log(cartItems)
  });
  $(".orderSummary button").on('click',function(){
    location.href="checkout.html";
  })
});
