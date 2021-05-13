<template lang="pug">
.Props
  h1 Props Component
  //- html模板裡面無法使用camel case
  //- 字串模板就可以使用
  //- PropsChild(myMessage="hello 1233")
  //- PropsChild(my-message="hello 1233")
  //- 動態綁定 props
  //- PropsChild(:myMessage="message" v-for="message in posts")
  PropsChild(:text="post.text" :author="post.author" v-for="post in Aposts")
</template>

<script>
import PropsChild from './PropsChild'
export default {
  name: 'Props',
  components: {
    PropsChild
  },
  data () {
    return {
      message: 'text message 1111',
      posts: [
        'hello',
        'world'
      ],
      Aposts: [
        {
          text: 'first',
          author: 'a'
        },
        {
          text: 'second',
          author: 'b'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
