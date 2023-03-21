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
                context.commit('setMore', a.data) // 가져온 데이터를 위에 저장시키고 싶어서 commit의 도움으로(mutations함수의 도움으로) state에 저장
            })
        }
    }
})

export default store;