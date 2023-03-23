import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state () {
        return {
            count: false,
            likes: 30,
           more: {}
        }
    },
    mutations: {
        setMore(state, data){
            state.more = data
        },
        좋아요(state){
            if(state.count == false){
            state.likes++;
            state.count = true;
        }
            else{
                state.likes--;
                state.count = false;
            }
        }
    },
    actions:{
        getData(context){
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((a)=>{
                console.log(a.data)
                context.commit('setMore', a.data)
            })
        }
    }
})

export default store;