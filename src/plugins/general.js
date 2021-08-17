// import axiosApi from "@/plugins/axios.js";

export function initialize(store, router) {
    router.beforeEach((to, from, next) => {
      
 

  console.log('================== start router auth =======================')

       
                const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
                const currentUser = localStorage.getItem('heavenDashboardUser');
               
                // const userInvenories = store.getters.inventories;
                console.log("currentUser===> ", currentUser);
                console.log("requiresAuth===> ", requiresAuth);
        
                
                if (requiresAuth && currentUser == null) {
                    
                    if(to.path == '/login'){
                        next();
                      }else{
    
                        next('/login');
                      }
                } else if (to.path == '/login' && currentUser != null) {
                    // console.log("home")
        
                      
                    next('/home');
                } else{
                    next();
                }
                    
      
    });

    //! check
    // axiosApi.interceptors.response.use((response) => {
    //     return response;
    // }, (error) => {
    //     if (!error.response) {
    //         // alert('NETWORK ERROR')
    //     } else {
    //         const code = error.response.status
    //         // const response = error.response.data
    //         const originalRequest = error.config;

    //         if (code === 401 && !originalRequest._retry) {
    //             originalRequest._retry = true

    //             // store.commit('logout');
    //             router.push('/login');
    //         }

    //         return Promise.reject(error)
    //     }
    // });

  
}

