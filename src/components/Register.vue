<template>
<div class="shape">
 <div class="container">
   <div class="section-title">
        <h2>SIGN UP</h2>
        <p>Sign Up with Us</p>
      </div>
  <Form @submit.prevent="register"  id="contact" >  
  <div v-if="!successful">
    <fieldset>
      <label for="name">username</label>
      <ErrorMessage name="username" class="error-feedback" />
      <input placeholder=" eg.John Doe" type="text" tabindex="1" class="form-control" v-model="username">
    </fieldset><br>
    <fieldset>
      <label for="email">Email</label>
      <ErrorMessage name="email" class="error-feedback" /> 
      <input placeholder="eg.johndoe@gmail.com" type="email" class="form-control"  v-model="email" >
    </fieldset><br>
    <fieldset>
      <label for="password">Password</label>
      <ErrorMessage name="password" class="error-feedback" /> 
     <input placeholder="enter your password" type="password" class="form-control" v-model="password" >
    </fieldset><br>
   <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Sign Up
           </button>
           <p class="logInText">Already have an account?</p>
           <button class="btn btn-success" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              >
              </span>
              Log In
           </button>
    </div>
 
    </Form>
<div>
</div><div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
       </div>
 </div>
   </div>



</template>
<script>
export default {
  data(){
    return {
      username:"",
      email:"",
      password:""

    };
  },
  methods: {
    register(){
      console.log(this.password);
      fetch('https://backend-pos-project.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify({
    username: this.username,
    email: this.email,
    password: this.email,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response)=>response.json())  
 .then((json)=>{  
          console.log(json); 
        alert("User registered");     
localStorage.setItem("jwt",json.jwt);  
       this.$router.push({name:"Products"});  
  }).catch((err)=>{  
    alert(err);  
    });  
  }, 
  }, 
};
</script>

<style scoped>

.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  font-family: "Poppins", sans-serif;
}
.section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: white;
  margin: 4px 10px;
}
.section-title p {
  margin: 0;
  margin: -15px 0 15px 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #fff;
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
	max-width:400px;
	width:100%;
  position:relative;
}

#contact input[type="text"], #contact input[type="email"],  #contact button[type="submit"] { font:400 12px/16px "Open Sans", Helvetica, Arial, sans-serif; }

#contact {
	background:white;
	padding:15px;
	margin:50px 0;
  border-radius: 20px;
}

#contact h3 {
	color: crimson;
	display: block;
	font-size: 20px;
	font-weight: 400;
  text-align: center;
}

#contact h4 {
	margin:5px 0 15px;
	display:block;
	font-size:13px;
  color:crimson;
}

fieldset {
	border: medium none !important;
	min-width: 100%;
	padding: 0;
	width: 100%;
}

#contact input[type="text"], #contact input[type="email"], #contact input[type="password"], #contact input[type="url"], #contact textarea {
	width:100%;
	border:1px solid #CCC;
	background:#FFF;
	margin:0 0 5px;
	padding:10px;
}

#contact input[type="text"]:hover, #contact input[type="email"]:hover, #contact input[type="password"]:hover, #contact input[type="url"]:hover, #contact textarea:hover {
	-webkit-transition:border-color 0.3s ease-in-out;
	-moz-transition:border-color 0.3s ease-in-out;
	transition:border-color 0.3s ease-in-out;
	border:1px solid #AAA;
}

#contact textarea {
	height:100px;
	max-width:100%;
  resize:none;
}

#contact button[type="submit"] {
	cursor:pointer;
	width:100%;
	border:none;
	background:yellow;
	color:#FFF;
	margin:0 0 5px;
	padding:10px;
	font-size:15px;
}

#contact button[type="submit"]:hover {
	background:#09C;
	-webkit-transition:background 0.3s ease-in-out;
	-moz-transition:background 0.3s ease-in-out;
	transition:background-color 0.3s ease-in-out;
}

.logInText{
  margin-top: 10px;
  font-size: 10px;
}

#contact button[type="submit"]:active { box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.5); }

#contact input:focus, #contact textarea:focus {
	outline:0;
	border:1px solid #999;
}
::-webkit-input-placeholder {
 color:#888;
}
:-moz-placeholder {
 color:#888;
}
::-moz-placeholder {
 color:#888;
}
:-ms-input-placeholder {
 color:#888;
}

@media only screen  and (min-width: 992px){
  	.container{
margin-top: 100px;
}

}
@media only screen  and (max-width: 600PX){
  	.container{
margin-top: 100px;
}
}
</style>
