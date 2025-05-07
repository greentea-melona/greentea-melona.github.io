---
layout: simple
title: tag_develop
type : develop
---
Page title : {{page.title}}


{% for post in page.posts %}
<li>
<a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}