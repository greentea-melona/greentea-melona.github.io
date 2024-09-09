---
layout: simple
title: 마크다운 레코드
---
마크다운 관련 정보를 기록합니다. 

---
# 기본 문법
## 제목
{% highlight markdown %}
\ # 제목 1
\ ## 제목 2
\ ####### 제목 6
{% endhighlight %}
앞에 붙는 정(#)자의 수가 늘어날 수록 크기가 감소합니다.

## 기울이기

{% highlight markdown %}
*기울일 내용*
{% endhighlight %}
*텍스트를 기울입니다.*

## 강조
{% highlight markdown %}
**강조 내용**
{% endhighlight %}
**텍스트를 강조시킵니다.**

## 코드 블록
{% highlight markdown %}
``` 
printf("Hello World");
```
{% endhighlight %}
코드 작문용 영역을 만듭니다.

**TIP** 시작 삼중 백틱(```)에 언어 식별자를 추가하여 코드 구문을 강조할 수 있습니다.

> 언어 식별자 c를 추가한 경우
```c
printf("Hello World");
``` 
> 언어 식별자 ruby를 추가한 경우
```ruby
puts 'Hello World'
```
[깃허브 언어 YAML](https://github.com/github-linguist/linguist/blob/master/lib/linguist/languages.yml) 에서 유효한 키워드를 확인할 수 있습니다.



## 이미지 첨부
{% highlight markdown %}
![이미지 설명](이미지 경로)
{% endhighlight %}
![burst](/assets/img/burst.gif)