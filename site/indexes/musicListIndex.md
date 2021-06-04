---
title: Music lists
permalink: lists/music/
layout: base.njk
eleventyExcludeFromCollections: true
---

<main>

## {{title}}

{%- for post in collections['cat:music'] %}

- [{{post.data.title}}]({{post.url}})

{% endfor %}

</main>
