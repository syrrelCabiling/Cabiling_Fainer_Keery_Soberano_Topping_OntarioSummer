export default {
    template: `
    <div class="jumbotron-fluid" id="home">
    <video autoplay muted loop>    
        <source src="./images/short_video_hackathon.mp4" type="video/mp4">
    </video>
  <header class="mb-auto">
      <!-- NAVIGATION HERE -->
      
            <nav class="navbar navbar-expand-sm navbar-inverse navbar-toggleable-sm fixed-top navbar-fixed-top">
                <!-- Brand/logo -->
                <a class="navbar-brand" href="#">
                <img src="./images/Logos/LOGO-FINAL-01.png" alt="logo" width="200" class="ml-3">
                </a>
                
                <!-- Toggler/collapsibe Button -->
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar links -->
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav ml-auto mr-4">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">EAT</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">STAY</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link"><button class="btn btn-primary register">REGISTER</button></router-link>
                    </li>
                    </ul>
                </div>
                </nav>
  </header>
</div>
`
}