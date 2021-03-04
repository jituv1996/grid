

const url = 'https://api.npoint.io/d6bd0efc05639084eb17/';

var data;



new Vue({
    el: '#app',
    data () {
      return {
        ascending: true,
        mData:null,
        data: null,
        searchValue:'',
      }
    },
    computed:{
     
       
    
    },
    created () {
      axios.get(url).then(response => {
          this.data = response.data.playerList;
          this.mData=this.data;
         
        })
    },
    methods: {
      
        search(){

            this.data = this.mData.filter(x => x.PFName.toLowerCase().includes(this.searchValue.toLowerCase())
            || x.TName.toLowerCase().includes(this.searchValue.toLowerCase()) );
                      
        },
        
        toggle(){
           
            if(this.ascending){
                this.ascending=false;
            }
            else{
                this.ascending=true;
            }
        },
        sortAsc: function(arr) {
           
           // this.ascending=true;
            return arr.slice().sort(function(a, b) {
              return a.Value - b.Value;
            });
          },
          sortDesc(arr){
            
            return arr.slice().sort(function(a, b) {
                return b.Value - a.Value;
              });
          },
        formatDate(date) {
         if(date===""){
             return 'Date is Missing from API'
         }
         else{
            date = moment.utc(date);
            date = moment(date).local();
            return moment(date).format('MMMM Do YYYY, h:mm:ss a')
         }
          
        },
        validate(t1,t2){
            if(t1!="" && t2!="")
            {
                return t1+' vs. ' +t2;
            }
            else{
                return "Data missing from API";
            }
      }
    
  }
})

