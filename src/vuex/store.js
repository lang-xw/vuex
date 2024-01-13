import { createStore } from 'vuex'

const store = createStore({
    state: () => ({
        counter: 10,
        name: "STATE",
        level: 1000
    }),
    //相当于methodds，是同步函数，方便监听数据变化
    mutations: {
        increment(state, payload) {
            state.counter += payload.add
        },
        changeName(state, payload) {
            state.name = payload.name
            state.level = payload.level
        }
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
        changeNameAction(context, arg) {
            //返回一个promise,让我们知道什么时候执行结束
            return new Promise((reslove, reject) => {
                context.commit('changeName', arg)
                reslove('Action结束了')
            })
        }
    }
})


export default store