const url = `http://dessert-env.eba-jdbdamtu.us-east-1.elasticbeanstalk.com`

const fragment = document.createDocumentFragment();
const row = document.getElementById('row');

const buildCard = (async () => {
    const response = await axios
        .get(`${url}/users`, {
            headers:{ 
                Authorization: `'bearer ${window.localStorage.getItem('token')}` 
            }})
    const users = response.data

    users.forEach(user => {
        const { username } = user
        const card = document.createElement('div');
        card.innerHTML = `<h2 class="greet">Welcom</h2>
                            <h3 class="job">${username}</h3>
                            <p class="about">Just For Testing</p>`
        fragment.appendChild(card)
    })
    row.appendChild(fragment)
})()
