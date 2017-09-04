new Vue({
    el: '#vue-app',
    data: {
        name: 'Khalid',
        job: 'Xamaali',
        age: 22,
        website: "http://www.monster.com"
    },
    methods: {
        work: function(occupation){
            return 'Im working as a ' + occupation
        },

        add: function(val){
            this.age += val;
        },

        subtract: function(val){
            this.age -= val;
        }
    }
});