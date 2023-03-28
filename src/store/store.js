import { createStore } from 'vuex'
import axios from 'axios'
import data from '../assets/postdata'

const store = createStore({
    state () {
        return {
            data: data,
            count: false,
            likes: data.map(post => post.likes),
            heart: data.map(post => post.count ? "": ""),
           more: {}
        }
    },
    mutations: {
        setMore(state, data){
            state.more = data
        },
        좋아요(state, idx){
            if(state.count == false){
            state.likes[idx]++;
            state.count = true;
            state.heart[idx] = "😍"
        }
            else{
                state.likes[idx]--;
                state.count = false;
                state.heart[idx] = ""
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