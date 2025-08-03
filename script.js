const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//preparazione 
const rowEl = document.getElementById('my-team')
const formEl = document.querySelector('form')
const nameFieldEl = document.getElementById('name')
const roleFieldEl = document.getElementById('role')
const emailFieldEl = document.getElementById('email')
const imageFieldEl = document.getElementById('image')
console.log(formEl, nameFieldEl, roleFieldEl, emailFieldEl, imageFieldEl);

renderTeam(teamMembers)

formEl.addEventListener('submit', function (e) {
  e.preventDefault()
  console.dir(e.target);
  const name = nameFieldEl.value
  const role = roleFieldEl.value
  const email= emailFieldEl.value
  const image = imageFieldEl.value
  const newMember = {
    name, 
    role,
    email,
    image,
  }
  console.log(newMember);
  
  // push the new object into the array
  teamMembers.push(newMember)
  console.log(teamMembers);
  
  // update the dom to render the new list
  renderTeam(teamMembers)
})

//FUNZIONI
function renderTeam(team){
  // loop over the array
  rowEl.innerHTML = ''

  for (let i = 0; i < teamMembers.length; i++) {
    // - get the element for the current iteration
    const member = teamMembers[i];
    const { name, role, email, img } = member

    const cardMarkupString = genateCardMarkup(name, role, email, img)

   /*  console.log(cardMarkupString); */


    rowEl.insertAdjacentHTML('beforeend', cardMarkupString)

  }
}

// - append the card to the rowElement

function genateCardMarkup(name, role, email, image) {
  return `
   
  <div class="card mb-3 p-4 mx-3" style=" width:330px";>
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${image}" class="img-fluid h-100 rounded-start object-fit-cover" alt="">
      </div>
      <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">${name}</h3>
        <div>${role}</div>
        <div>${email}</div>
      </div>
      </div>
    </div>
  </div>
        `
}