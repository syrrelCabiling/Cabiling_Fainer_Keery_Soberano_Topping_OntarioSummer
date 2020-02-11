export default { //everything should go inside the section tag
    template: ` 
        <section class="container">
            <div class="row">
            <div class="col splash-txt">
                <h1 class="mb-4">FIND YOURSELF AT HOME</h1>
                <button class="button"><a href="#" class="btn btn-lg">PLAN YOUR VISIT</a></button>
            </div>
            </div>





            <!-- THREE CARDS -->
            <div class="cards">
                  <div class="row no-gutters my-3">
                      <div class="col-md-4 col-sm-12 pr-2">
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
                      <div class="col-lg-4 col-md-4 col-sm-12 pl-2">
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
    }
}