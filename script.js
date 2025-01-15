
    const togglebtn = document.querySelector('#bar');
    const doing = document.querySelector('.dropdown');
    togglebtn.addEventListener('click',()=>{
        const isOpen = doing.classList.toggle('open');
        togglebtn.classList = isOpen
        ? 'fa-solid fa-x icon'
        : 'fa-solid fa-bars icon'
    })

    let msg = document.getElementById('masg');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwbgmTnbUloIVhi8D-OyruGoVoFL0StT1H0DFTRXAPCpk4Dd_N9E0NrYChSjnYWBbb_sg/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Submit Successfully";
             msg.style.color = 'green'
            
        })
        .catch(error => {
            msg.innerHTML="try again";
            msg.style.color = 'red'
        })
    })