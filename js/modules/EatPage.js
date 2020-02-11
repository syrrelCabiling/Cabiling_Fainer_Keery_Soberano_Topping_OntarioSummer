export default {
    template: `
        <section>
            <h1>U DUMB</h1>
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