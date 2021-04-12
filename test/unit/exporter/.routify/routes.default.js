import _default from '../example/_module.svelte'
import _default_admin from '../example/admin/_reset.svelte'
import _default_index_svelte from '../example/index.svelte'
import _default_admin_index_svelte from '../example/admin/index.svelte'
import _default_admin_page_svelte from '../example/admin/page.svelte'
import _default_blog_prefixed_slug__svelte from '../example/blog/prefixed[slug].svelte'
import _default_blog__slug__svelte from '../example/blog/[slug].svelte'

{
  "meta": {},
  "rootName": "default",
  "file": {
    "path": "test/unit/exporter/example/_module.svelte",
    "dir": "test/unit/exporter/example",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "id": "_default",
  "component": _default,
  "children": [
    {
      "meta": {
        "reset": true
      },
      "name": "admin",
      "file": {
        "path": "test/unit/exporter/example/admin/_reset.svelte",
        "dir": "test/unit/exporter/example/admin",
        "base": "_reset.svelte",
        "ext": ".svelte",
        "name": "_reset"
      },
      "id": "_default_admin",
      "component": _default_admin,
      "children": [
        {
          "meta": {},
          "name": "index",
          "file": {
            "path": "test/unit/exporter/example/admin/index.svelte",
            "dir": "test/unit/exporter/example/admin",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "id": "_default_admin_index_svelte",
          "component": _default_admin_index_svelte,
          "children": []
        },
        {
          "meta": {},
          "name": "page",
          "file": {
            "path": "test/unit/exporter/example/admin/page.svelte",
            "dir": "test/unit/exporter/example/admin",
            "base": "page.svelte",
            "ext": ".svelte",
            "name": "page"
          },
          "id": "_default_admin_page_svelte",
          "component": _default_admin_page_svelte,
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "name": "blog",
      "file": {
        "path": "test/unit/exporter/example/blog",
        "dir": "test/unit/exporter/example",
        "base": "blog",
        "ext": "",
        "name": "blog"
      },
      "id": "_default_blog",
      "component": _default_blog,
      "children": [
        {
          "meta": {
            "dynamic": true
          },
          "name": "prefixed[slug]",
          "file": {
            "path": "test/unit/exporter/example/blog/prefixed[slug].svelte",
            "dir": "test/unit/exporter/example/blog",
            "base": "prefixed[slug].svelte",
            "ext": ".svelte",
            "name": "prefixed[slug]"
          },
          "id": "_default_blog_prefixed_slug__svelte",
          "component": _default_blog_prefixed_slug__svelte,
          "children": []
        },
        {
          "meta": {
            "dynamic": true
          },
          "name": "[slug]",
          "file": {
            "path": "test/unit/exporter/example/blog/[slug].svelte",
            "dir": "test/unit/exporter/example/blog",
            "base": "[slug].svelte",
            "ext": ".svelte",
            "name": "[slug]"
          },
          "id": "_default_blog__slug__svelte",
          "component": _default_blog__slug__svelte,
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "name": "index",
      "file": {
        "path": "test/unit/exporter/example/index.svelte",
        "dir": "test/unit/exporter/example",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "id": "_default_index_svelte",
      "component": _default_index_svelte,
      "children": []
    }
  ]
}