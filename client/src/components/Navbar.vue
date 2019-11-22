<template>
    <div id="navbar">
        <nav id="nav-container" class="navbar navbar-expand-lg navbar-primary">
            <div class="container">
                <Slide v-if="isLogin" width="250" noOverlay>
                    <div id="slider-menus">
                      <button @click="displayTransactions" type="button" class="btn slide-btns"><i class="fas fa-money-check-alt"></i> <p style="margin-left: 10px; margin-bottom: 0">Transactions</p></button>
                      <button @click="displayCart()" type="button" class="btn slide-btns"><i class="fas fa-shopping-cart"></i> <p style="margin-left: 10px; margin-bottom: 0">Cart</p></button>
                      <button @click="logout()" type="button" class="btn slide-btns"><i class="fas fa-power-off"></i> <p style="margin-left: 10px; margin-bottom: 0">Logout</p></button>
                    </div>
                </Slide>
                  <div id="sp">
                    <h2 @click="getProducts()" style="margin-left: 100px; width: 200px; cursor: pointer;">ShonenPlays</h2>
                    <img @click="displayHome()" style="cursor: pointer" id="sp-img" src="https://i.imgur.com/MTK7Egb.png" alt="">
                  </div>
                <button v-if="!isLogin" style="margin-left: 750px;" type="button" class="btn btns" data-toggle="modal" data-target="#registerModal">
                Register
                </button>
                <button v-if="!isLogin" @click="showModal=true" style="margin-left: 20px;" type="button" class="btn btns" data-toggle="modal" data-target="#loginModal">
                Login
                </button>
                <RegisterButton />
                <LoginButton  />
            </div>
        </nav>
    </div>
  
</template>

<script>
import Swal from 'sweetalert2'
import { Slide } from 'vue-burger-menu'
import { mapState, mapActions } from 'vuex';
import RegisterButton from './Register-btn'
import LoginButton from './Login-btn'
import ShonenPlays from './ShonenPlays'


export default {
  name: 'navbar',
  components: {
    Slide,
    RegisterButton,
    LoginButton,
    ShonenPlays
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    displayTransactions() {
      this.$router.push('/home/transactions')
    },
    displayCart() {
      this.$router.push('/cart')
    },
    getProducts() {
      this.$store.dispatch('getProducts')
    },
    logout() {
      localStorage.removeItem('token')
      Swal.fire(
        'Logout Success!',
        `See you again`,
        'success'
      )
      this.$store.commit('CHANGEISLOGIN', false)
      this.$store.dispatch('checkToken')
      this.$router.push('/')
    },
    displayHome() {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState([
        'isLogin',
    ])
  },
  created() {
  }
}
</script>

<style>
#sp-img {
  width: 40px;
  height: 40px;
}

#sp {
  display: flex;
}

h2 {
  color: white;
  font-weight: bold;
  margin-left: 0px;
}

.btns {
  background-color: #222F3E;
  border: 2px solid white;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: .15rem;
  width: 150px;
  height: 40px;
  padding: .150rem .75rem;
  margin: 30px auto;
  letter-spacing: 2px;
}

.btns:hover {
  background-color: white;
  color: black;
  border: 2px solid black;
}

#slider-menus {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slide-btns {
  background-color: #227093;
  border: 2px solid white;
  color: white;
  font-weight: bold;
  width: 150px;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center
}

.slide-btns:hover {
  background-color: white;
  color: black;
  border: 2px solid black;
}
.container {
  margin: 0
}
#nav-container {
  padding: 0;
  height: 85px;
  background-color:#222f3e;
  align-items: center;
  justify-content: flex-start;
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.bm-burger-button {
  width: 30px;
  height: 25px;
  left: 30px;
  top: 26px;
  cursor: pointer;
  background-color: rgba(109, 102, 102, 0.486)
}

.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #227093;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-burger-bars {
  background-color: white
}
</style>