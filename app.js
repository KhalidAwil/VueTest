new Vue({
    el: '#vue-app',
    data: {
        name: 'Khalid',
        job: 'Xamaali',
        age: 22,
        a: 5,
        b: 10,
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
        },

        logName: function(){
            console.log("Somethings going on in this box.....");
        },

        logAge: function(){
            console.log("Something fishy is going on here....I can feel it");
        }
    },

    computed:{
        //Computed properties only re-evaluate when dependencies have changed. If a variable it depends on hasn't
        //changed, it will return previously computed result without re-executing --> EFFICIENT
       addToA: function(){
           console.log("Adding to A");
           return this.age + this.a;
       },
       
       addToB: function(){
            console.log("Adding to B");
            return this.age + this.b;
       }    
    }
});