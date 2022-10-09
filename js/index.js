

let form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    console.log("submitted....");
    event.preventDefault();
    // let slug = document.querySelector("#slug")
    // console.log(slug.value);
    console.log(event.target.phone.value)
    console.log(event.target.code.value)
    console.log(event.target.password.value)

    // fetch api 
    // fetch('https://jsonplaceholder.typicode.com/todos/' + slug.value)
    //     .then(response => response.json())
    //     .then(json => console.log(json))
})

// function handleSubmit()
// {
//     console.log("form submitteed");
// }

console.log(document.getElementById("t-body"));
document.getElementById("t-body").innerHTML = ""

console.log("js file");
// alert("linked")
// let todos = [];

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {

        // [
        //     {
        //         id,title,status
        //     }
        // ]

        // DOM

        // data in array 

        // get the t-body

        // template literal

        // document.getElementById

        // <tr>
        //         <td>laptop</td>
        //         <td>2</td>
        //         <td>10</td>
        //         <td>10</td>
        //     </tr>


        // inser tinside t-body


    })

