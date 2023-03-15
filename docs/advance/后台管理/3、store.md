# 全局数据管理

## 创建`Pinia`

1. 第一步 `createPinia()`
2. 将一些数据与本地存储关联，当储存的$store变化的时候，同时更新本地存储
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



## `pinia`本地存储插件实现



1.这里用一个存储的key代表一组数据，比如`tokenStore： defineStore('tokenStore', () => {})`,然后将这个值存在window的本地存储中，默认值给本地存储的值，当$store这个值发生变化的时候，同步更新window的本地存储

2.这里是使用`watch`来监听



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



> 一个系统通常需要的几个store如下:
>
> `userInfoStore`： 表示登录后的用户信息
>
> `menuStore`: 表示该用户有的菜单权限
>
> `permissionStore`： 表示该用户的权限
>
> `tokenStore`： 表示登录的token
>
> `settingStore`： 系统设置





## 实现一个`userInfo`的`Store`

```tsx
import {ref} from "@vue/reactivity";

export const useUserInfo = defineStore('userInfoStore', () => {
    const userInfo = ref<userModal>({})
    
    // 设置用户信息
    const setUserInfo = function (info) {
        userInfo.value = info
        setCookie('token', info.token)
    }
    
    interface userModal {
        token?: string
        name?: string
        phone?: string
        token?: string
    }
    
    // 获取用户信息
    const getUserInfo = function():userModal {
        return userInfo.value
    }
    
    // 清除用户信息
    const clearUserInfo = function() {
        userInfo.value = {}
    }
    
    return { userInfo, setUserInfo, getUserInfo, clearUserInfo }
})

```