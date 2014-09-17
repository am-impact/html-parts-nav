# html-parts-form

Uitbreiding op [html startup](https://github.com/am-impact/html-startup)

## Bestanden
 * resources/sass/components/_nav.scss
 * resources/scripts/fw.form.js

## Voorbeelden

### Html
    <nav class="mainnav">
        <ul class="mainnav__level0">
            <li class="active"><a href="index.html" title="Home">Home</a></li>
            <li><a href="contact.html" title="Contact">Contact</a></li>
        </ul>
    </nav>

    <script>
        head.js(
            { nav: 'scripts/fw.nav.js' }
        );
    </script>

### Scss
###### _settings.scss
    // niks

### Javascript
###### Subnav vertraging
    FW.nav.apply(".mainnav__level0 > li");