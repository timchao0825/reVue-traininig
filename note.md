MVVM架構

#Model

> data

#View Model

> Vue實例

#View

### Dom

> 透過view（dom）的 event 來控制，來影響View Model
> view model 接收操作之後修改 model 資料的內容
> 變更之後再透過 view model 再去修改 dom 的資料內容

Vue分為三大區塊

Vue模板

> v-if , v-else , v-for , v-bind , v-model

Vue實例

> data , props , computed , methods , watch

Vue組件

> single file , commonJS , wabpack ....等

### Vue Basic

v-once
讓methods的值只跑一次

v-html
將data裡面的字串轉換成HTML文字

v-bind （資料綁定在屬性上）縮寫 ":" + 屬性

v-on（監聽事件）縮寫 "@"

### Vue 實例

// 實例instance

// 類別Class

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

### Vue 掛載 $mount 與 模板 template

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

實例的方法，提供vue裡面可以使用function操作data
無法使用箭頭函式，箭頭函式會指向到window

### Vue 實例 - 計算屬性 computed

計算之後的屬性，“物件結構”裡面為函式

computed裡面輸出運算後的結果

computed 可拆分為object物件裡頭的方法有get(){} , set(){}

### Vue 實例 - 監聽器 watch

監聽某個數值是否有被改變，常用於資料被改變時；要做其他事的時候使用watch

### Computed vs Watch

watch 是你想在某個數據變化時做一些事情，如果做的事情是更新其他數據，那其實與把這個要更新的數據項定義成computed是一樣的，這個時候用computed要做的性 ，雖然技術上講watch也可以實現。  
但你也可以在被 wacth 的數據變化時做其他事情啊，稱為調用一個方法，這個是computed做不到也不應該做的

1.如果一個數據依賴於其他數據，那麼把這個數據設計為computed的 
2.如果你需要在某個數據變化時做一些事情，使用watch來觀察這個數據變化






