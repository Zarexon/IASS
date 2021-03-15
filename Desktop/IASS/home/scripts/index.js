const usersList = document.querySelector('.users');
const buttonDel = document.querySelector('.button');
const user = firebase.auth();

// setup guides
const setupUsers = (data, user) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const medicamente = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4" > ${medicamente.denumire} </div>
          <div class="collapsible-body white" style="margin-left:50px; margin-right:50px;"> ${"Comprimate/buc: " + medicamente.comprimate} </div>
          <div class="collapsible-body white" style="margin-left:50px; margin-right:50px;"> ${"Numar bucati in stoc: " + medicamente.stoc} </div>
        </li>
      `;
      html += li;
    });
    usersList.innerHTML = html;
  }
};

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
