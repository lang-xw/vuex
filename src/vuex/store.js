import { createStore } from 'vuex'

const store = createStore({
    state: () => ({
        counter: 10,
        name: "STATE",
        level: 1000
    }),
    //相当于methodds，是同步函数，方便监听数据变化
    mutations: {

    },
    //相当于computed
    getters: {
        double(state) {
            return state.counter * 2
        },
        fullName(state) {
            return state.name + "???"
        }

    },
    //应用时，必须要依赖mutations
    actions: {

    }
})


export default store