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
                              <br>
                              <br>
                              <p class="card-desc">With all the things to do in Ontario, you’re sure to work up an appetite. Satisfy your cravings at some of our must eat destinations.
                              </p>
                              <button class="btn btn-primary text-truncate w-50 mx-auto">EXPLORE</button>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12">
                          <div class="list-group text-center bg-alt shadow p-3 mb-5 bg-white rounded">
                              <h4 class="stay-cap mx-auto">STAY</h4>
                             
                              <img src="./images/bg.jpg" alt="card bg" width="400" class="card-img-top img-fluid">
                              <br>
                              <br>
                              <br>
                              <br>
                              <br>
                              <p class="card-desc">Be sure to check out some of our top city recommendations to host your stay when you’re exploring Ontario.
                              </p>
                              <div class="bg-inverse">
                                  <button class="btn btn-primary text-truncate w-50 mx-auto">EXPLORE</button>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 pl-0">
                          <div class="list-group text-center my-3 shadow p-3 mb-5 bg-white rounded">
                              <h4 class="dis-cap text-center">DISCOVER</h4>
                              <img src="./images/bg.jpg" alt="card bg" width="400" class="card-img-top img-fluid">
                              <br> <br>
                              
                              <p class="card-desc">There’s never a dull moment in Ontario. Start exploring some our many attractions that are sure to keep you busy throughout your stay. 
                              </p>
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

            <p>The Restaurant at the CN Tower, features market-fresh, locally sourced and sustainable Canadian cuisine that features fine dining at new heights. Paired with an award-winning selection of Canadian wines, this experience is one that is sure to be unmatched. Rotate around one the tallest buildings in the world while enjoying a meal that is top of its class.
            </p>

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

            <p>One of Niagara’s best features is the ever-growing vineyard. AG Winemakers offers Niagara’s own wine paired with gourmet meals, created with fresh produce from their on-site farm. Whether you want to host a special event or just grab dinner with someone special, this is one place you do not want to skip.
            </p>

            <button class="reserve-button">☑ RESERVE</button>
        </div>



        <div class="eat-img  col-lg-6 center-me">
          <img src="images/360-restaurant.svg" alt="360 ">
        </div>


        <div class="eat-card col-lg-6">

          <h1>Lock 21</h1>

          <p>featured pick</p>

          <div class="center-me eat-bars">
            <p>location</p>
            <p>$$$</p>
            <p>★★</p>

          </div>

            <p>Located in the famous Peterborough Locks, guests can dine fine cuisine at 20 metres below sea level. Soak up the rich history while enjoying a unique meal, Lock 21 offers a dining experience that should be on your bucket list. Some have said to even have ghostly encounters while enjoying this one of a kind experience.
            </p>

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
              <h1>Toronto</h1>
              <p>A city that is filled with culture, creativity and cool photo ops. Not only that, but you can see it all from above too with the 360 birds-eye view from the CN Tower. 
              </p>
              <button class="reserve-button">View Packages</button>
              </div>
            
          </div>
          <div class="carousel-item">
            <div class="carousel-content">
              <img class="d-block w-100" src="images/bg.jpg" alt="Second slide">
              <h1>Ottawa</h1>
              <p>The capital of the country in the heart of Ontario. Explore our nations history with a trip to Parliament Hill and then take a walk to the famous Rideau Canal.
              </p>
              <button class="reserve-button">View Packages</button>
              </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-content">
            <img class="d-block w-100" src="images/bg.jpg" alt="Third slide">
            <h1>Niagara</h1>
            <p>Checkout the thrills that line the street of Clifton Hill, then cool off with a trip to the falls on the Maid of the Mist. If that’s not your speed, there are plenty of winery tours at Niagara on the Lake.
            </p>
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

  <div class="row">
  
  <video src="images/hackathon_ontario_video_v02.mp4" style="width:100%; padding-bottom: 50px;" controls></video>
  
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