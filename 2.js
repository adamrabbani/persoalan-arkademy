var usr= "asd12345"
var pass= "abcdefg1@"
function valid_form(username, password){
if(/\s/.test(username)||/[^a-z1-9_.]/.test(username)){
    return false
}else if ((8<=username.length&&username.length<=12)&&(password.length==9)&&/[^A-z1-9]/.test(password)&&/[1-9]/.test(password)){

return true

}else{
    return false
}
}
console.log(valid_form(usr,pass))