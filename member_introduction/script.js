new Vue({
    el:'#introduction',
    data:{
        open: '部員紹介',
    },
    computed:{
        openTitle: function() {
            document.write ('部員紹介');
        },    
    },
    methods:{
        
    }
})

var alertmsg = function(){
    alert("3秒経過");
  }
  //setTimeout(alertmsg, 3000);


  setTimeout(openTitle, 2000);
