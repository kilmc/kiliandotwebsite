---
title: Posts index
permalink: posts/
layout: base.njk
---

<main>

## {{title}}

{%- for post in collections.post %}

- [{{post.data.title}}]({{post.url}})

{% endfor %}

</main>
