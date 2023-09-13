const app = Vue.createApp({
    // options object. can be left empty to get it started.
        // creating this give us our view instance which powers our application
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            description: 'Gloves for feet!',
            urlTag: 'https://www.vuemastery.com/courses/',
            inStock: false,
            onSale: true,
            // inventory: 100
            inventory: 8
            // inventory: 0
        }
    }
})
