let firstname = document.querySelector('#firstname')
let Lastname = document.querySelector('#lastname')
let password = document.querySelector('#password')
let Username = document.querySelector('#username')

let Display = document.querySelector('.display-div')

let search = document.querySelector('#search')

let storage = []


function signup(event) {
    event.preventDefault()

    let userInfomation = {

        Firstname: firstname.value,
        Lastname: Lastname.value,
        Username: Username.value,
        Password: password.value,


    }

    storage.push(userInfomation);

    console.log(storage);



}
function searrch() {
    
    Display.innerHTML = ''

    let data = storage.filter(function (e) {
        return e.Firstname.includes(`${search.value}`)
    })
    console.log(data);

    for (let index = 0; index < data.length; index++) {

        console.log(data[index]);

        Display.innerHTML += ` 
     
                              Firstname : ${data[index].Firstname} <br> 
                                    Lastname : ${data[index].Lastname} <br>
                                   Username : ${data[index].Username} <br>
                                Password : ${data[index].Password} <br>
                                
                                                                
                         `;

    }

    
}