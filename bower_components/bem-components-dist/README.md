# bem-components-dist

This is precompiled version of [bem-components](https://en.bem.info/libs/bem-components/) library. All the files are also available at CDN. For more info please refer to [usage documentation](https://en.bem.info/libs/bem-components/current/#usage).

## HTML template to use the dist with

```html
<!DOCTYPE html>
<html class="ua_js_no">
<head>
    <!--[if lt IE 9]><script src="//yastatic.net/es5-shims/0.0.1/es5-shims.min.js"></script><![endif]-->
    <meta charset="utf-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>bem-components dist</title>
    <script>(function(e,c){e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");})(document.documentElement,"className");(function(d,n){d.documentElement.className+=" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");})(document,"createElementNS");</script>
    <!--[if gt IE 8]><!--><link rel="stylesheet" href="dist/desktop/bem-components.css"/>
    <!--<![endif]--><!--[if lte IE 8]><link rel="stylesheet" href="dist/desktop/bem-components.ie.css"/><![endif]-->
</head>
<body class="page page_theme_islands">
<!-- write your code here -->
<script src="dist/desktop/bem-components.js+bemhtml.js"></script>
</body>
</html>
```
