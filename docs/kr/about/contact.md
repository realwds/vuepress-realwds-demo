# 연락 주세요

::: tip 연락 하 다
정교 한 이목 구비 는 심 쿵 의 시작 이 고, 사람 을 매혹 시 키 는 기질 은 감동 의 심연 이다.
:::

문제 가 있 으 면 다음 과 같은 방식 으로 저 에 게 연락 하 십시오：

- QQ：<a :href="qqUrl" class='qq'>1483166698</a>
- 메 일주 소：<a href="mailto:disnot@qq.com">disnot@qq.com</a>
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