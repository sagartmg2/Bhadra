
function signup() {
    console.log("signup");
}

// export const login = () => {  // named export
const login = () => {  // named export
    console.log("login");
}


// module.exports = signup
// export  default signup  // default export


// module.exports.signup = signup
// module.exports.login = login

module.exports = {
    login,
    signup,
}



