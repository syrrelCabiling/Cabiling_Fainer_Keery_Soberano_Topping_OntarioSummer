import SplashPage from "./modules/SplashPage.js";
import AppPage from "./modules/AppPage.js";
import ErrorPage from "./modules/ErrorPage.js";
import EatPage from "./modules/EatPage.js";
import RegisterForm from "./modules/RegisterForm.js";



const router = new VueRouter ({ //This acts like app.get router using node and express
    routes: [
        { path: '/', name: "splash", component: SplashPage }, //SplashPage will be rendered out inside router-view!!!!!!!!!!!!
        { path: '/app', name: "app", component: AppPage }, //AppPage will be rendered out inside router-view!!!!!!!!!!!!
        { path: '*', name: "error", component: ErrorPage }, //* catches anything that doesnt match MAKE THIS THE VERY LAST TO AVOID PROBLEMSe
        //{ path: '/register', name: "register", component: RegisterPage }, //SplashPage will be rendered out inside router-view!!!!!!!!!!!!
    ]
})

const vm = new Vue ({ //make this first
    data : {
        
    },

    created: function() {
        console.log('yo is workin');
    },

    methods: {

    },

    router //shorthand for router ???????
}).$mount('#app');



$('#myCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });