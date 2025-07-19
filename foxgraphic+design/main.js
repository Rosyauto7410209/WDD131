  document.getelementByid ('sendmessage').addEventListener ('submit', function (event){
    event.preventDefault ();


    const unfinishedelements = document.queryselectoall ('.unfinishedmessage');
    unfinishedelements.forEach(el => el.style.display = 'none');

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isvalid = true;
  if (name === '') {
        document.getElementById('nameisunfinished').textContent = 'Name is required';
        document.getElementById('nameisunfinished').style.display = 'block';
        isvalid = false;}

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email = '' || !emailPattern.test(email)) {
        document.getElementById('emailisunfinished').textContent = 'A valid email address is required';
        document.getElementById('emailisunfinished').style.display = 'block';
        isvalid = false;}

  if (message = ''){
        document.getElementById('messageisunfinished').textContent = 'A Message is needed';
        document.getElementById('messageisunfinished').style.display = 'block';
        isvalid = false;}

  if (isvalid){
        alert('Message Sent.');
    }
  });
