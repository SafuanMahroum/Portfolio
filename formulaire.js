const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Attendez...';

    const serviceID = 'default_service';
    const templateID = 'template_mq04aqg';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Envoyer';
        alert('Votre message a été envoyé !');
      }, (err) => {
        btn.value = 'Envoyer';
        alert(JSON.stringify(err));
      });
  });