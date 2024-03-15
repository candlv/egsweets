const url = `http://dessert-env.eba-jdbdamtu.us-east-1.elasticbeanstalk.com`

const selectDomElement = query => document.querySelector(query);
const form = selectDomElement('#form');
form.addEventListener('submit', submitHandler)

function feedBackMsg(textMsg, backgndColor) {
    const feedbackMsg = selectDomElement('.msg');
    feedbackMsg.style.backgroundColor = backgndColor;
    feedbackMsg.innerText = textMsg;
    feedbackMsg.style.visibility = 'visible';
    setTimeout(() => {
        feedbackMsg.style.visibility = 'hidden';
    }, 2500)
}

function checkFormEntries(event) {
    const uname = selectDomElement('#uname').value.trim();
    const fname = selectDomElement('#fname').value.trim();
    const lname = selectDomElement('#lname').value.trim();
    const pword = selectDomElement('#pword').value.trim();
    if (!uname || !fname || !lname || !pword) {
        feedBackMsg('kindly fill all fields', 'rgb(128, 0, 0)')
        event.preventDefault();
    }
    else return true;
}

function resetForm(e) {
    selectDomElement('#uname').value = '';
    selectDomElement('#fname').value = '';
    selectDomElement('#lname').value = '';
    selectDomElement('#pword').value = '';
}

const postFormEntries = async (data) => {
    axios.post(`${url}/users`, data)
        .then((res) => {
            const { message, status, token } = res.data
            if (status === 'success') {
                window.localStorage.setItem('token', token)
                return feedBackMsg(message, 'rgb(0, 128, 0)')
            }
            else return feedBackMsg(`Fail to register`, 'rgb(128, 0, 0)')
        })
        .catch((error) => {
            feedBackMsg(`Fail to register`, 'rgb(128, 0, 0)')
        });
}

async function submitHandler(e) {
    e.preventDefault()
    const passed = checkFormEntries(e);
    if (passed) {
        try {
            const newData = new FormData(form);
            await postFormEntries(newData)
            resetForm()
        } catch (error) {
            feedBackMsg(`Fail to register`, 'rgb(128, 0, 0)')
        }
    }
}
