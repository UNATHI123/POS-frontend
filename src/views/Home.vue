<template>
<div class="shape"> 
     <header>
          
         <div class="row">
                <div class="col-md-6 left-side"> <img src="https://i.imgur.com/jrRBTai.png" class="w-100"> </div>
                <div class="col-md-6 right-side">
                    <h1 class="animate__zoomIn" >STEP OVERFLOW!!</h1>
                    <p></p>
                    <div class="text-center">
                    <a href="/products " class="btn order-button">VIEW PRODUCTS</a>
                    <p class="font-monospace">ALREADY HAVE AN ACCOUNT ?</p>
                     <a href="/login " class="btn order-button">LOG IN</a>
              </div>
              </div>
         </div>
       </header>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped >

 *{
     text-transform: capitalize;
     color: white;
    
 }  
.left-side img {
    padding-top: 120px
} 


.right-side {
    padding-top: 150px
}

.right-side h1 {
    font-family: 'Allerta Stencil', sans-serif;
    font-size: 2.4em;
    text-align: center
}

.right-side p {
    font-size: 1.5em;
    text-align: center;
    font-weight: bold;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #fff;
}

.btn.order-button[data-v-fae5bece] {
    background: transparent;
    border: 2px solid #83ff00;
    color: #83ff00;
    border-radius: 8%;
    transition: 0.7s
}
.btn.order-button:hover {
    border: 2px solid #ce0000;
    color: #ce0000
}
.shape {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, #ce0000, #7A0800 70%);
    position: absolute;
    -webkit-clip-path: ellipse(500px 500px at 10% 5%)
}

.right-side {
    padding-top: 150px
}

.right-side h1 {
    font-family: 'Allerta Stencil', sans-serif;
    font-size: 2.4em;
    text-align: center
}

.right-side p {
    font-size: 1.5em;
    text-align: center;
    font-weight: bold
}

.btn.order-button {
    background: transparent;
    border: 2px solid #83ff00;
    color: #83ff00;
    border-radius: 30%;
    transition: 0.7s
}

.btn.order-button:hover {
    border: 2px solid #ce0000;
    color: #ce0000
}
</style>