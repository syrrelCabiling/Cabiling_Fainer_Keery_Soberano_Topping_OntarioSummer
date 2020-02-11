import HeaderSection from "./HeaderSection.js";
import Footer from "./Footer.js";

export default { //everything should go inside the section tag
    template: ` 

    
        <section class="container">
            <div class="row">
            <div class="col splash-txt">
                <h1 class="mb-4 ">FIND YOURSELF AT HOME</h1>
                <button class="button"><a href="#" class="btn btn-lg btn-primary">PLAN YOUR VISIT</a></button>
            </div>
            </div>


            <HeadSection></HeadSection>




            <!-- THREE CARDS -->
            <div class="cards mb-5">
                  <div class="row no-gutters my-3">
                      <div class="col-md-4 col-sm-12 pr-0">
                          <div class="list-group text-center my-3 shadow p-3 mb-5 bg-white rounded">
                              <img src="./images/bg.jpg" alt="card bg" width="400" class="card-img-top img-fluid">
                              <p class="eat-cap mx-auto">EAT</p>
                              <p class="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ratione dolorum nesciunt ducimus eos aliquam distinctio necessitatibus placeat vero magnam facilis nobis, adipisci esse odio similique, soluta iste, minus obcaecati! </p>
                              <button class="btn btn-primary text-truncate w-50 mx-auto">EXPLORE</button>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12">
                          <div class="list-group text-center bg-alt shadow p-3 mb-5 bg-white rounded">
                              <h4 class="stay-cap mx-auto">STAY</h4>
                              <img src="./images/bg.jpg" alt="card bg" width="400" class="card-img-top img-fluid">
                              <p class="card-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nihil obcaecati veritatis perferendis distinctio ab maxime. Magnam, laborum ducimus ullam, accusantium temporibus quaerat tempora, architecto ratione autem at accusamus nulla. veritatis perferendis distinctio ab maxime. Magnam, laborum ducimus ullam, accusantium temporibus quaerat tempora, architecto ratione autem at accusamus nulla.</p>
                              <div class="bg-inverse">
                                  <button class="btn btn-primary text-truncate w-50 mx-auto">EXPLORE</button>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 pl-0">
                          <div class="list-group text-center my-3 shadow p-3 mb-5 bg-white rounded">
                              <h4 class="dis-cap text-center">DISCOVER</h4>
                              <img src="./images/bg.jpg" alt="card bg" width="400" class="card-img-top img-fluid">
                              <p class="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ratione dolorum nesciunt ducimus eos aliquam distinctio necessitatibus placeat vero magnam facilis nobis, adipisci esse odio similique, soluta iste, minus obcaecati!</p>
                              <div class="bg-inverse">
                                  <button class="btn btn-primary text-truncate w-50 mx-auto">EXPLORE</button>
                              </div>
                          </div>
                      </div>
                  </div>    
              </div> 

      <div class="row mt-5" id="eat">
      <div class="col-lg-4 center-me-2">
          <h1>EAT</h1>
          <img src="images/Logos/LOGO-FINAL-05.png" alt="logo">
      </div>

      <div style="position: absolute">
        <img src="images/Blue-Mountain.png">
      </div>

      <div class="col-lg-8 eat-container">
        <div class="eat-img  col-lg-6 center-me">
          <img src="images/360-restaurant.svg" alt="360">
        </div>


        <div class="eat-card col-lg-6">

          <h1>360 Restaurant</h1>

          <p>featured pick</p>

          <div class="center-me eat-bars">
            <p>location</p>
            <p>$$$</p>
            <p>★★★★</p>

          </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque a quo minus ut fugit exercitationem ex suscipit itaque deserunt.</p>

            <button class="reserve-button">☑ RESERVE</button>
        </div>




        <div class="eat-img  col-lg-6 center-me">
          <img src="images/ag-cuisine.svg" alt="360 ">
        </div>


        <div class="eat-card col-lg-6">

          <h1>AG Cuisine</h1>

          <p>featured pick</p>

          <div class="center-me eat-bars">
            <p>location</p>
            <p>$$$</p>
            <p>★★★★</p>

          </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque a quo minus ut fugit exercitationem ex suscipit itaque deserunt.</p>

            <button class="reserve-button">☑ RESERVE</button>
        </div>



        <div class="eat-img  col-lg-6 center-me">
          <img src="images/360-restaurant.svg" alt="360 ">
        </div>


        <div class="eat-card col-lg-6">

          <h1>Restaurant</h1>

          <p>featured pick</p>

          <div class="center-me eat-bars">
            <p>location</p>
            <p>$$$</p>
            <p>★★</p>

          </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque a quo minus ut fugit exercitationem ex suscipit itaque deserunt.</p>

            <button class="reserve-button">☑ RESERVE</button>
        </div>


      </div>
    
    
    </div>

    </div>

    <div class="row" style="padding-top: 50px;">
        <div class="col-lg-12 center-me">
            <h1>Stay</h1>
            <img src="images/Logos/LOGO-FINAL-05.png" alt="logo" style="width:10%;">
        </div>
    </div>


    <div class="row carousel-container">

      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="carousel-content">
              <img class="d-block w-100" src="images/bg.jpg" alt="First slide">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam maxime eum inventore, repudiandae harum odit ducimus unde veritatis amet!</p>
              <button class="reserve-button">View Packages</button>
              </div>
            
          </div>
          <div class="carousel-item">
            <div class="carousel-content">
              <img class="d-block w-100" src="images/bg.jpg" alt="Second slide">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam maxime eum inventore, repudiandae harum odit ducimus unde veritatis amet!</p>
              <button class="reserve-button">View Packages</button>
              </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-content">
            <img class="d-block w-100" src="images/bg.jpg" alt="Third slide">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam maxime eum inventore, repudiandae harum odit ducimus unde veritatis amet!</p>
            <button class="reserve-button">View Packages</button>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>


    <div class="row" style="padding-top: 50px;">
    <div class="col-lg-12 center-me">
        <h1>Discover</h1>
        <img src="images/Logos/LOGO-FINAL-05.png" alt="logo" style="width:10%;">
    </div>
</div>


<div class="col-lg-12 discover-container">

<div class="eat-img  col-lg-6 center-me">
  <img src="images/helicopter-tour.png" alt="360">
</div>


<div class="eat-card col-lg-6">

  <h1>Helicopter Tour</h1>

  <p>featured pick</p>

  <div class="center-me eat-bars">
    <p>location</p>
    <p>$$$</p>
    <p>★★★★</p>

  </div>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque a quo minus ut fugit exercitationem ex suscipit itaque deserunt.</p>

    <button class="reserve-button">View Packages</button>


  </div>


  <div class="eat-img  col-lg-6 center-me">
    <img src="images/jays.png" alt="360">
  </div>


  <div class="eat-card col-lg-6">

    <h1>Blue Jays Game</h1>

    <p>featured pick</p>

    <div class="center-me eat-bars">
      <p>location</p>
      <p>$$$</p>
      <p>★★★★</p>

    </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque a quo minus ut fugit exercitationem ex suscipit itaque deserunt.</p>

      <button class="reserve-button">View Packages</button>


    </div>


    <div class="eat-img  col-lg-6 center-me">
      <img src="images/mountain.png" alt="360">
    </div>


    <div class="eat-card col-lg-6">

      <h1>Mountain Biking</h1>

      <p>featured pick</p>

      <div class="center-me eat-bars">
        <p>location</p>
        <p>$$$</p>
        <p>★★★★</p>

      </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque a quo minus ut fugit exercitationem ex suscipit itaque deserunt.</p>

        <button class="reserve-button">View Packages</button>


      </div>
  </div>




    

    <FooterSection></FooterSection> 
        </section>

         


    `,

    data: function() {
        return {
            message: "Welcome"
        }
    },

    methods: {
        registerUser() {
            console.log('clicked register button');
        }
    },

    components: {
      HeadSection: HeaderSection,
      FooterSection: Footer
    }
}