  document.getelementByid ('sendmessage').addEventListener ('submit', function (event){
    event.preventDefault ();

    // Clear previous errors
    const errorElements = document.queryselectoall ('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isvalid = true;
  if (name === '') {
        document.getElementById('nameerror').textContent = 'Name is required';
        document.getElementById('nameerror').style.display = 'block';
        isvalid = false;}

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email = '' || !emailPattern.test(email)) {
        document.getElementById('emailerror').textContent = 'A valid email address is required';
        document.getElementById('emailerror').style.display = 'block';
        isvalid = false;}

  if (message = ''){
        document.getElementById('messageerror').textContent = 'A Message is required';
        document.getElementById('messageerror').style.display = 'block';
        isvalid = false;}

  if (isvalid){
        alert('Message Sent.');
    }
  });
