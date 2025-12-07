const form = document.querySelector('#contact form');

const formSubmit = (e) => {
    e.preventDefault();

    const email = document.querySelector('#email');
    const topic = document.querySelector('#topic');
    const message = document.querySelector('#message');

    console.log(email.value, topic.value, message.value);
}

form.addEventListener('submit', formSubmit);
