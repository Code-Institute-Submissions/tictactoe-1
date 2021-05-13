// This is a script that handels the email contact modal 

// Get the modal

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalbutton");

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it 
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 

  // EmailJs script

        (function () {
          emailjs.init("user_qymtgBsPpBFabMb2XEwym");
      })();

        window.onload = function () {
          document.getElementById('contact-form').addEventListener('submit', function (event) {
              event.preventDefault();
              // generate a five digit number for the contact_number variable
              this.contact_number.value = Math.random() * 100000 | 0;
              // these IDs from the previous steps
              emailjs.sendForm('contact_service', 'contact_form', this)
                  .then(function () {
                      console.log('SUCCESS!');
                  }, function (error) {
                      console.log('FAILED...', error);
                  });
          });
      }


      $('#closemodal').click(function() {
        $('#myModal').modal('hide');
    });