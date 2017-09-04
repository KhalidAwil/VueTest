new Vue({
    el: '#vue-app',
    data: {
        name: 'Khalid',
        job: 'Xamaali',
        website: "http://www.monster.com"
    },
    methods: {
        work: function(occupation){
            return 'Im working as a ' + occupation
        }
    }
});