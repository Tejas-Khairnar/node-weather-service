console.log('I am javascript file');

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => {
//         response.json()
//             .then(data => {
//                 console.log(data);
//             })
//     })

// fetch('http://localhost:3000/weather?address=Boston')
//     .then((response) => {
//         response.json()
//             .then(data => {
//                 if(data.error) {
//                     console.log(data.error);
//                 } else {
//                     console.log(data.forecast);
//                     console.log(data.location);
//                 }
//             })
//     })

const formData = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent = 'Tejas';

formData.addEventListener('submit', (event) => {
    event.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    
    fetch('http://localhost:3000/weather?address=' + location)
    .then((response) => {
        response.json()
            .then(data => {
                if(data.error) {
                    messageOne.textContent = data.error;
                } else {
                    messageOne.textContent = data.forecast;
                    messageTwo.textContent = data.location;
                }
            })
    })
})