document.querySelector(".green-btn").addEventListener('click', function(e) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email.value)) {

    } else {
        e.preventDefault();
        document.querySelector(".small").style.display = "block";
    }
});


   
