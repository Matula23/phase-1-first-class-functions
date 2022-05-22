function lookAtMe(){
    console.log("Check me out. I\'m a callback function!")
}

function receivesAFunction(callbBack){
    callbBack()
}

receivesAFunction(lookAtMe)

function returnsANamedFunction(){
    return lookAtMe
}

function returnsAnAnonymousFunction(){
    return function(){
        "Look at me. I\'m An onymous."
    }
}