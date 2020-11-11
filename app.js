const divJames = document.getElementsByClassName('james');
console.log(divJames);
const list = document.createElement('ul');

list.innerHTML = `<li> Home </li>
                  <li> About Us </li>
                  <li> Services </li>
                  <li> Contacts </li>`;
divJames[0].append(list);