export default ({ store, next }) => {
    if (store.state.isLogin) {
      if(store.state.role==1){
        next("/admin/dashboard")
        return false
      }else if(store.state.role==2){
        next("/moderator/dashboard")
      }else if(store.state.role==3){
        next("/content/dashboard")
      }else if(store.state.role==4){
        next("/instructor/dashboard")
      }else if(store.state.role==5){
        next("/student/dashboard")
      }else if(store.state.role==6){
        next("/parent/dashboard")
      }
      else if(store.state.role==7){
        next("/adviser/dashboard")
      }      
    }else{
      next()
      return
    }
    
}


// parent 6 // student 5 //  insturctor 4 // COntent developer 3 // Moderator 2 // Super admin 1