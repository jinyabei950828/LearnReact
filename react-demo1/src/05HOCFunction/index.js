function propsUsername(call){
    function getUsername(){
        const username ='admin'
        call(username)
    }
    return getUsername
}

function login(username){
    console.log(username+'登录了')
}

function logout(username){
    console.log(username+'登出了')
}

const newLogin = propsUsername(login)
const newLogout = propsUsername(logout)

newLogin()
newLogout()