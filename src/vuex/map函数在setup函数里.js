import { useStore } from 'vuex'


export default function MapSetUP(map) {
    // mapState(['counter'])返回的是一个对象，里面是函数
    // map参数就是mapState([]),mapGetter([]),mapMutation([])等

    const store = useStore()

    const mapObj = map
    const newMap = {}
    Object.keys(mapObj).forEach((key) => {

        //进行this的绑定，this.$store --->  this.store
        newMap[key] = mapObj[key].bind({ $store: store })
    })

    return newMap
}