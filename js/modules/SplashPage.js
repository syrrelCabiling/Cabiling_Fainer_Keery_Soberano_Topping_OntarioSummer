export default { //everything should go inside the section tag
    template: ` 
        <section class="container">
            <div class="row">
            <div class="col splash-txt">
                <h1 class="mb-4">FIND YOURSELF AT HOME</h1>
                <button class="button"><a href="#" class="btn btn-lg btn-primary">PLAN YOUR VISIT</a></button>
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