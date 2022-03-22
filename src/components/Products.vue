<template >
    <div class="shape">
     <div class="container">
		 <div class="row row-cols-1 row-cols-md-3 g-4">
				<div class="card pt-3"  v-for='product of products' :key="product.id">
				<img :src="product.image" class="card-img-top" alt="product.image">
				<div class="card-body">
				<h5 class="card-title">{{product.title}}</h5>
				<p class="card-text">{{product.description}}</p>
				</div>
				<div class="card-footer">
				<h3>R{{product.price}}</h3>

				</div>
			</div>
			</div>
  		</div>
	</div>

		
  
    
</template>
<script>
// fetch("https://backend-pos-project.herokuapp.com/products")
//     .then((response) => response.json())
//     .then((data) => {
//     console.log(data[0].title);
// 	});

export default {
    data() {
        return {
            products: []
        }
    },
    mounted() {
        fetch("https://backend-pos-project.herokuapp.com/products")
        .then(res => res.json())
        .then(data => this.products = data)
        .catch(err => console.log(err.message))
    },
}
</script>
<style  scoped>

 .shape{
	padding-top: 8rem;
}
* {
	margin:0;
	padding:0;
	box-sizing:border-box;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	-webkit-font-smoothing:antialiased;
	-moz-font-smoothing:antialiased;
	-o-font-smoothing:antialiased;
	font-smoothing:antialiased;
	text-rendering:optimizeLegibility;
}
 .container {
	 /* max-width:400px; */
	width:100%;
  position:relative;
  color: black;
}


.hero-title { 
	max-width: 16em;
  font-size: 10vh;
  font-weight: bold;
  line-height: 0.9;
  text-transform: uppercase; 

}
@media  only screen and (min-width: 999px) {
  .hero-title { 
      margin-top: 80px;
      } 
}

@media  only screen and (max-width: 600px) {
  .hero-title { 
      margin-top: 80px;
      font-size: 5vh;
      display: flex;
      } 
}
.clock{
	border-radius: 60px;
	border: 3px solid #fff;
	height: 80px;
	width: 80px;
	position: relative;

    top: 126px;
	top: -webkit-calc(50% - 43px);
	top: calc(50% - 43px);
	left: 35%;
	left: -webkit-calc(50% - 43px);
	left: calc(50% - 43px);
}
.clock:after{
	content: "";
	position: absolute;
	background-color: #fff;
	top:2px;
	left: 48%;
	height: 38px;
	width: 4px;
	border-radius: 5px;
	-webkit-transform-origin: 50% 97%;
			transform-origin: 50% 97%;
	-webkit-animation: grdAiguille 2s linear infinite;
			animation: grdAiguille 2s linear infinite;
}

@-webkit-keyframes grdAiguille{
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(360deg);}
}

@keyframes grdAiguille{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
}

.clock:before{
	content: "";
	position: absolute;
	background-color: #fff;
	top:6px;
	left: 48%;
	height: 35px;
	width: 4px;
	border-radius: 5px;
	-webkit-transform-origin: 50% 94%;
			transform-origin: 50% 94%;
	-webkit-animation: ptAiguille 12s linear infinite;
			animation: ptAiguille 12s linear infinite;
}

@-webkit-keyframes ptAiguille{
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(360deg);}
}

@keyframes ptAiguille{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
} 
</style>