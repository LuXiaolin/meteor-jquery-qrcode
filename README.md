# jQuery.qrcode for Meteor

[jQuery.qrcode](https://larsjung.de/jquery-qrcode/) (v0.12.0) enables you to dynamically add QR codes to your website. Choose between rendering the code in a `canvas` or with `divs`. The latter will be fine even for older browser. The generated QR code will be in the least possible version required to encode the content (least number of blocks).

See the [demo](https://larsjung.de/jquery-qrcode/latest/demo/) to get a first impression. This plugin is a wrapper for the more generic [QR Code Generator](https://github.com/kazuhikoarase/qrcode-generator) (MIT).

## Installation

`meteor add dschulz:jquery-qrcode`

## Usage

The syntax is very simple. Just use

```javascript
$(selector).qrcode(options);
```

to append a new generated HTML element representing the QR code to the selected elements. If the selected element already is a `canvas` element, then the QR code is drawn onto it.

## Options

```javascript
{
    // render method: 'canvas', 'image' or 'div'
    render: 'canvas',

    // version range somewhere in 1 .. 40
    minVersion: 1,
    maxVersion: 40,

    // error correction level: 'L', 'M', 'Q' or 'H'
    ecLevel: 'L',

    // offset in pixel if drawn onto existing canvas
    left: 0,
    top: 0,

    // size in pixel
    size: 200,

    // code color or image element
    fill: '#000',

    // background color or image element, null for transparent background
    background: null,

    // content
    text: 'no text',

    // corner radius relative to module width: 0.0 .. 0.5
    radius: 0,

    // quiet zone in modules
    quiet: 0,

    // modes
    // 0: normal
    // 1: label strip
    // 2: label box
    // 3: image strip
    // 4: image box
    mode: 0,

    mSize: 0.1,
    mPosX: 0.5,
    mPosY: 0.5,

    label: 'no label',
    fontname: 'sans',
    fontcolor: '#000',

    image: null
}
```

## Example

```html
<template name="hello">   
  <div id="qrcode"></div>
</template>
```

```javascript
if (Meteor.isClient) {
  Template.hello.onRendered(function () {
    $('#qrcode').qrcode({
      size: 400,
      text: "http://larsjung.de/qrcode"
    });
  });
}
```

## Demo

* [Official demo](https://larsjung.de/jquery-qrcode/latest/demo/)
* [Meteor demo](https://jquery-qrcode.meteor.com) ([source code](https://github.com/frabrunelle/jquery-qrcode-demo))

## Documentation

* [Official documentation](https://larsjung.de/jquery-qrcode/)

## License
The MIT License (MIT)

Copyright (c) 2015 Lars Jung (http://larsjung.de)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
