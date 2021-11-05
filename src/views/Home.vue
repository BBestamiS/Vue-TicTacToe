<template>
<article id='main'>
  <div class="main-div">  
        <a href="/play">Hadi Oynayalım</a>
        <div>
          <p class='how-to-play-h'>X-O-X Nasıl Oynanır?</p>
          <p class='how-to-play-p'>Oyun başlarken siz 'X' kişisi olursunuz. Bilgisayar 'Y' kişisi olur ve birbirinize karşı oynarsınız. 3 tane 'X''i yana yana veya çapraz koyabilirsen kazanabilirsin. Bol Şans 🚀</p>
        </div>
  </div>
<article>
  <div class="home-page-bg">
  </div>
</article>
</article>
</template>
<script>
export default {
    name: 'Home',   
};

</script>

<style scoped>
#main{
overflow: hidden;
    width:100%;
    height: 100vh;
   position: relative;
}
.how-to-play-h{
    padding-top: 30px;
    font-size: 50px;
    color: white;
}
article div a{
    display: none;
    text-decoration: none;
    color: orange;
}
.main-div{
    position: relative;
background-color:transparent;
    z-index: 1;
}
#main article{
    position: absolute;
    top:0px;
    width: 100%;
    height:100vh;
    background: black;
}

.home-page-bg{
    background: linear-gradient(252.44deg, #70C8B8 0%, rgba(68, 79, 179, 0) 100%);
   height: 100vh;
    width: 100%;
}
.how-to-play-p{
    color: orange;
}
</style>
