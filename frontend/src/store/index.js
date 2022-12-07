import { createStore } from 'vuex'
import { catalogModule } from '@/store/catalogModule'
import { userModule } from '@/store/userModule'
import { ordersModule } from '@/store/ordersModule'
import { basketModule } from '@/store/basketModule'

export default createStore({
  modules: {
    catalog: catalogModule,
    user: userModule,
    orders: ordersModule,
    basket: basketModule
  }
})
