const questions = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png'
]

const rightVersions = [a2, a3, a1, a4, a2]

const image = document.getElementById('imageQuestion')
const answerBtn = document.getElementById('btn')

let imageNumber = 0
let result = 0

answerBtn.addEventListener('click', checkRigthAnswer)

function checkRigthAnswer() {
    if (image.src.includes(questions[imageNumber])) {
        imageNumber++
    }

    if (rightVersions[imageNumber - 1].checked) {
        alert('Відповідь вірна')
        result++
    } else {
        alert('Відповідь невірна!')
    }

    if (imageNumber === questions.length) {
        alert(`Ти молодець ${result} відповідей, давай зпочатку!`)
        imageNumber = 0
    }

    image.src = questions[imageNumber]
    imageNumber++
}
