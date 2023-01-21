let banknamelabel = document.querySelector('#bankname')
let BankName = document.querySelector('#BankName')


let ownernamelabel = document.querySelector('#ownername')
let OwnerName = document.querySelector('#OwnerName')


let numbercardlabel = document.querySelector('#numbercard')
let CardNumber = document.querySelector('#CardNumber')


let numberdatelabel = document.querySelector('#numberdate')
let MMYY = document.querySelector('#MMYY')


let cvccodelabel = document.querySelector('#cvc-code')
let CVC = document.querySelector('#CVC')





BankName.addEventListener('input', (event) => {
  banknamelabel.textContent = event.target.value
})

OwnerName.addEventListener('input', (event) => {
  ownernamelabel.textContent = event.target.value
})


CardNumber.addEventListener('input', (event) => {
  var format = event.target.value.trim().split("").map((data, index) => {
    if ((index + 1) % 4 == 0) {
      data = data + " "
    }
    return data
  })
  numbercardlabel.textContent = format.join("")
})


MMYY.addEventListener('input', (event) => {
  var format = event.target.value.trim().split("").map((data, index) => {
    if ((index + 1) % 2 == 0 && index + 1 !== 4) {
      data = data + "/"
    }
    return data
  })
  numberdatelabel.textContent = format.join("")
})


// back card
CVC.addEventListener('input', (event) => {
  cvccodelabel.textContent = event.target.value
})