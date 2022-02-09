// fetch('https://api.jikan.moe/v3/search/anime?q=Ghibli&page=1').then(response => response.json()).then(data => console.log(data));


let app = new Vue({
    el: '#app',
    data () {
        return {
        
            results: [],
            search: "",
            select: ""
        }
    },
    mounted () {
        fetch('https://api.jikan.moe/v3/search/anime?q=Ghibli&page=1')
            .then(response => response.json())
            .then(data => (this.results = data.results))
    },

    computed: {
        filterAnime:function(){
            return this.results.filter((result) => {
                return result.title.toLowerCase().match(this.search.toLowerCase());
            })

    }
       
    },

    methods:{
        sort(){
        if(results =! null){
        sort: results.sort( (first, second) => {return first.score - second.score })
        return first.score
        }
    },
    
        select: function(){
           
            return result.rated.match(this.select());

        }
    },
    

  })
  