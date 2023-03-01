# 全局数据管理

## 创建Pinia

1. 第一步 `createPinia()`
2. 将一些数据与本地存储关联
3. 导出创建的`Pinia`变量

```tsx
import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaStoragePluginCreator from '@/utils/piniaStoragePluginCreator'
const pinia = createPinia()

// 这个插件是将数据与本地存储关联
const piniaPlugin = piniaStoragePluginCreator(
	['userInfoStore', 'menuStore', 'premissionStore', 'tokenStore'],
    'sessionStorage'
)

pinia(piniaPlugin)

export function setupStore(app: App<Element>): void {
    app.use(pinia)
}

export { pinia }
```



## pinia本地存储插件实现

```tsx
import { PiniaPlugin, PiniaPluginContext } from 'pinia'
import { watch } from 'vue'

type storageType = 'localStorage' | 'sessionStorage'

function piniaStoragePluginCreator(storeIdList: string[], storageType?: storageType): PiniaPlugin

function piniaStoragePluginCreator(storeId: string, storageType?: storageType): PiniaPlugin


function piniaStoragePluginCreator(value: string | string[], storageType: storageType = 'localStorage') {
    if(isString(value)) {
        return function (ctx: PiniaPluginContext) {
            const { $id, $state } = ctx.store
            if ($id === value) {
                ctx.store.$state = JSON.parse(window[storageType].getItem($id) as any)
                watch(
                	$state,
                    () => {
                        window[storageType].setItem($id, JSON.stringify($state))
                    },
                    { deep: true }
                )
            }
        }
    } else {
        return function(ctx: PiniaPluginContent) {
            const { $id, $state } = ctx.store
            const length = value.length
            for (let i = 0 ; i < length; i++) {
                if($id === value[i]) {
                    ctx.store.$state = JSON.parse(
                    	window[StorageType].getItem($id) as any
                    )
                    watch(
                    	$state,
                        () => {
                            window[storageType].setItem($id, JSON.stringify($state))
                        },
                        { deep: true }
                    )
                }
            }
        }
    }   
}

export default piniaStoragePluginCreator
```

## 实现一个userInfo的Store

```tsx
import {ref} from "@vue/reactivity";

export const useUserInfo = defineStore('userInfoStore', () => {
    const userInfo = ref<userModal>({
        pwUserDetailVO: {}
    })
    
    const setUserInfo = function (info) {
        userInfo.value = info
        setCookie('token', info.token)
    }
})

```