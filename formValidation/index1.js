let formTag = document.querySelector("form");
let tableTag = document.querySelector("table");
let tbodyTag = document.querySelector("tbody");

      function Add(details) {
        details.preventDefault(); // prevents page reloading

        let name = document.querySelector(".name").value;
        let email = document.querySelector(".email").value;
        let number = document.querySelector(".number").value;
        if(name!='' && email!='' && number!='' && number.length>10){
            tbodyTag.innerHTML +=`
            <tr>
              <td>${name}</td>
              <td>${email}</td>
              <td>${number}</td>
              <td><button class="removeBtn">Remove</button></td>
            </tr>
            `;
            // name email number is not accessia le insice this if statement we need to get them again
            //document.queryselector('.name').value='';
            // document.queryselector('.email').value='';
            // document.queryselector('.number').value='';
            // instead of above approach we can use form.reset(); to empty input field
            formTag.reset();
        }
        else if(name=='' || email=='' || number ||  number.length>10){
            alert('enter proper input');
        }
      }

      formTag.addEventListener("submit", Add);

      function Remove(details) {
        if (details.target.classList.contains("removeBtn")) {
          details.target.parentElement.parentElement.remove();
        }
      }
      tableTag.addEventListener("click", Remove);



// The inputs should be cleared after adding a row
      // Form should not be submitted if any of the input fields are empty
      // Phone number should be of 10 digits
      // Two persons should not have the same email and phone number