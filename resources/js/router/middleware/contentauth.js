export default ({ store, next }) => {
    if (store.state.role!=3) {
      localStorage.removeItem('token');   
      localStorage.removeItem('name');   
      localStorage.removeItem('role');   
      localStorage.removeItem('email');
      next("/login")
      return false
    }else{
      next()
      return
    }
    
}