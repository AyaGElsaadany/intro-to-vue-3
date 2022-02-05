
const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        remove(id){
            for( var i = 0; i < this.cart.length; i++){ 
                if ( this.cart[i] === id) { 
                    this.cart.splice(i, 1); 
                }
                break;
            }
            
            // const index = this.cart.indexOf(id)
            // console.log(index)
            // if (index > -1) {
            //     this.cart.splice(index, 1)
            // }
        }
    }
})
