# jQuery.qrcode for Meteor

[![license][license-img]][github] [![web][web-img]][web] [![github][github-img]][github]

[jQuery.qrcode][web] v0.12.0, a jQuery plugin for dynamically generating QR codes. It is a wrapper for the more generic [QR Code Generator][qrcode-generator] (MIT).

See the [demo][demo] to get a first impression.

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

* [Official demo][demo]
* [Meteor demo](https://jquery-qrcode.meteor.com) ([source code](https://github.com/frabrunelle/jquery-qrcode-demo))

## Documentation

* [Official documentation][web]

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

[github]: https://github.com/lrsjng/jquery-qrcode
[web]: https://larsjung.de/jquery-qrcode/
[demo]: https://larsjung.de/jquery-qrcode/latest/demo/
[qrcode-generator]: https://github.com/kazuhikoarase/qrcode-generator

[license-img]: https://img.shields.io/badge/license-MIT-a0a060.svg?style=flat-square
[web-img]: https://img.shields.io/badge/web-larsjung.de/qrcode-a0a060.svg?style=flat-square
[github-img]: https://img.shields.io/badge/github-lrsjng/jquery--qrcode-a0a060.svg?style=flat-square
