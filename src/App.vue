<template>
<div class="container-fluid px-0">
<div class="shape"> 
  <nav class="navbar fixed-top navbar-expand-lg navbar-transparent"> 
    <a class="navbar-brand">STEP OVERFLOW</a> 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
      <span class="navbar-toggler-icon">|||</span> 
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
      <div class="navbar-nav">
           <li class="nav-item active"><router-link :to="{name:'Home'}">HOME</router-link></li> 
            <li class="nav-item"><router-link :to="{name:'Register'}">SIGN UP</router-link></li> 
           <li class="nav-item"><router-link :to="{name:'Login'}">LOG IN</router-link></li>
           <li class="nav-item"><router-link :to="{name:'Products'}">PRODUCTS</router-link></li>
           <li class="nav-item"><router-link :to="{name:'Cart'}">CART</router-link></li>

      </div>
      </ul>
    </div>
     </nav> 
</div>

 
<!-- <nav class="navbar fixed-bottom navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand">Copyright right reserved  </a>
  </div>
</nav> -->
</div>
  <router-view />
 
   

  
</template>

<style scoped>
.shape {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #ce0000, #7A0800 70%);
    position: absolute;
    -webkit-clip-path: ellipse(500px 500px at 10% 5%);
    overflow: auto;
}
.navbar-transparent {
    background: linear-gradient(to left, #ce0000, #7A0800 70%);
   
}

.navbar-nav>li>a {
    color: #fff;
    text-transform: capitalize;
    padding:40px;
    
    
}

.navbar-nav>li:hover {
   
}

.navbar-nav>.active li {
    border-bottom: 4px solid #fff


}

.navbar-brand {
    font-family: 'Allerta Stencil', sans-serif;
    color: #83ff00;
    font-size: larger;
   text-transform: capitalize;
}

.navbar-brand:hover {
    color: white;
  

}
.navbar-toggler{
  color: white;
}
.navbar-toggler-icon{
  color: #fff;
  transform: rotate(90deg);
}
/* 
@media only screen  and (min-width: 992px){
  	.navbar-nav>li>a{
padding:40px;
}

}
@media only screen  and (max-width: 600px){
  	.navbar-nav>li>a{
padding:0px;
}
} */

</style>
