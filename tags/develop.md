---
layout: simple
title: tag_develop
tag : develop
---
Page title : {{page.title}}


<ul>
{% for post in site.posts %}
  {% if post.tags contains "develop" %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>
