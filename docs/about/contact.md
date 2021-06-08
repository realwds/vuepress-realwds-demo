# Contact Me

::: tip Contact
Delicate facial features are the beginning of the heart, <br />
charming temperament is the abyss of emotion.
:::

If you have any questions, please contact me in the following ways:

- QQ：<a :href="qqUrl" class='qq'>1483166698</a>
- Email：<a href="mailto:disnot@qq.com">disnot@qq.com</a>
- GitHub：<https://github.com/realwds>
- Telegram：<a href="https://t.me/realwds" target="_blank">https://t.me/realwds</a>

<script>
  export default {
    data(){
      return {
        qqUrl: 'tencent://message/?uin=1483166698&Site=&Menu=yes'
      }
    },
    mounted(){
      const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if(flag){
        this.qqUrl = 'mqqwpa://im/chat?chat_type=wpa&uin=1483166698&version=1&src_type=web&web_src=oicqzone.com'
      }
    }
  }
</script>