
const auth_middleware = (req, res, next) => {
    console.log(req.query);
    req.query.user = { id: 1, name: "HJohn" }
    // console.log(req.params);
    req.user = { id: 2, name: "change request." }
    console.log("auth middleware. ");
    let logged = false;
    if (logged) {
        //' aceess
        next();
    }
    else {
        // dodo give acess 
        return res.status(401).send("user not logged in ")
    }
}

// export default auth_middleware // es6

// module.exports = auth_middleware // default export

/* named export */
module.exports = {
    auth_middleware
}