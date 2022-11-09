const App = {
    data: function(){
        return{
            mensaje: 'Hola Vue.js',
            muestra: false,
            nombre: ""
        }
    },
    methods:{
        cambiarMuestra: function(){
            this.muestra = !this.muestra
        },
        randomuser: async function(){
            let n = ""
            await axios.get('https://randomuser.me/api/')
            .then(function (response){
                // console.log(response.data.results[0].name.last)
                n = response.data.results[0].name.last
            });
            this.nombre = n
        }
    }
};
Vue.createApp(App).mount("#app")