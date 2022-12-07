export default ({ store, next }) => {
    if (store.state.isLogin) {
      if(store.state.role!=5){
        localStorage.removeItem('token');   
        localStorage.removeItem('name');   
        localStorage.removeItem('role');   
        localStorage.removeItem('email');
        next("/login")
        return false
      }   
    }else{
      next("/login")
      return false
    }
    next()
    
}


// parent 6 // student 5 //  insturctor 4 // COntent developer 3 // Moderator 2 // Super admin 1