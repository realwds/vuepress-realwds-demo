# 联系我

::: tip 联系
精致的五官是心动的开始，迷人的气质是动情的深渊。
:::

如有问题，可以通过以下方式联系我：

- QQ：<a :href="qqUrl" class='qq'>1483166698</a>
- 邮箱：<a href="mailto:disnot@qq.com">disnot@qq.com</a>
- GitHub：<https://github.com/realwds>
- Telegram：<a href="https://t.me/realwds" target="_blank">https://t.me/realwds</a>

<img src="/img/about-contact.jpg" width="200"/> 

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