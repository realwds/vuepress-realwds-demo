# 連絡してください

::: tip 連絡する
精緻な五感は心の動きの始まりで、魅惑的な気質は感動の深淵です。
:::

問題があれば、以下の方法で連絡してください：

- QQ：<a :href="qqUrl" class='qq'>1483166698</a>
- メールボックス：<a href="mailto:disnot@qq.com">disnot@qq.com</a>
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