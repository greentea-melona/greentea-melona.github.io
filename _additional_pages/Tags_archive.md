---
title: Tags Archive
type: test
layout: simple
order: 8
permalink: /test/
---

{% for tag in site.tags %}
<li><a href="/tags/{{tag[0]}}">{{tag[0]}}</a> ({{ tag[1] | size }})</li>
{% endfor %}

[![네이버로 슛](/assets/img/cat1.jpg)](https://www.naver.com)
<!-- 
{% for post in page.posts %}
<li>
<a href="{{ post.url }}">{{ post.type }}</a>
</li>
{% endfor %} -->
