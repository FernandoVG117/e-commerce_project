import axios from "axios"

const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1';

const useAuth = async (path, data) => {
    const url = `${urlBase}${path}`;
    await axios.post(url, data)
        .then((answer) => {
            'token' in answer.data && localStorage.setItem('token', answer.data.token);
            console.log(answer.data);
        })
        .catch((err) => console.log(err))
}

export default useAuth

// localStorage.setItem('key', 'value_hellooo');

// const numbers = [1,2,4,8,16];

// localStorage.setItem('numbers1', numbers)

// localStorage.setItem('numbers2', JSON.stringify(numbers))

// Recuperar un item de local storage

// const item1 = JSON.parse(localStorage.getItem('numbers1'))
// console.log(item1)
// console.log(typeof item1)

// const item2 = JSON.parse(localStorage.getItem('numbers2'))
// console.log(item2)
// console.log(typeof item2)