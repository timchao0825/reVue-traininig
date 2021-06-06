MVVM 架構

#Model

> data

#View Model

> Vue 實例

#View

### Dom

> 透過 view（dom）的 event 來控制，來影響 View Model
> view model 接收操作之後修改 model 資料的內容
> 變更之後再透過 view model 再去修改 dom 的資料內容

Vue 分為三大區塊

Vue 模板

> v-if , v-else , v-for , v-bind , v-model

Vue 實例

> data , props , computed , methods , watch

Vue 組件

> single file , commonJS , wabpack ....等

### Vue Basic

v-once
讓 methods 的值只跑一次

v-html
將 data 裡面的字串轉換成 HTML 文字

v-bind （資料綁定在屬性上）縮寫 ":" + 屬性

v-on（監聽事件）縮寫 "@"

### Vue 實例

// 實例 instance

// 類別 Class

```js
Const blackDog = new Dog();

Const YellowDong = new Dog();

// vue instance

const vm = new Vue({
...
});
// real World write
new Vue({
...
});
```

---

### Vue 掛載 \$mount 與 模板 template

```js
<div id="app"></div>
// 通用做法
new Vue({
    el:'#app',//值：css選擇器 ｜ 直接在 css 選擇器掛載
    template:'<div>{msg} {msg}</div>', //值：字串 ｜ 掛載元素為哪種形式
    // 描述：會優先以template方式將模板放入
    data:{
        msg:'Hello!',
    }
})

// 另一種寫法，使用 $mount 掛載方式
const vm = new Vue({ ... });
vm.$mount(document.getElementByID('app'));
```

---

### Vue 實例 - 狀態 data

```js
<div id="app">{{}}</div>
const data = {
    x:1,
    y:2,
}
new Vue = ({
    el:'#app',
    // 原始寫法
    data:{
        x:1,
        y:2,
    }
    // 外部函示，掛載方式寫法
    data,
});
console.log(vm.$data === data); //true 不常用vm.$data
```

### Vue 實例 - 方法 methods

實例的方法，提供 vue 裡面可以使用 function 操作 data
無法使用箭頭函式，箭頭函式會指向到 window

### Vue 實例 - 計算屬性 computed

計算之後的屬性，“物件結構”裡面為函式

computed 裡面輸出運算後的結果

computed 可拆分為 object 物件裡頭的方法有 get(){} , set(){}

### Vue 實例 - 監聽器 watch

監聽某個數值是否有被改變，常用於資料被改變時；要做其他事的時候使用 watch

### Computed vs Watch

watch 是你想在某個數據變化時做一些事情，如果做的事情是更新其他數據，那其實與把這個要更新的數據項定義成 computed 是一樣的，這個時候用 computed 要做的性 ，雖然技術上講 watch 也可以實現。  
但你也可以在被 wacth 的數據變化時做其他事情啊，稱為調用一個方法，這個是 computed 做不到也不應該做的

1.如果一個數據依賴於其他數據，那麼把這個數據設計為 computed 的 2.如果你需要在某個數據變化時做一些事情，使用 watch 來觀察這個數據變化

### Computed vs Watch

vuex

store

state

mutations

getters

actions

vuex 的專案結構

app 層級的狀態應該集中到 store 裡面
（跨組件的狀態可以放置 store 裡面）

mutations 是改變 state 的唯一方法，並且是同步的

非同步操作都放在 actions 裡面
