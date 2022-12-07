export default ({ store, next }) => {
    if (store.state.isLogin) {
      if(store.state.role!=4){
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
    next();
}

