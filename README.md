# direct-mail

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/06b730099b254208b079ba23b348e030)](https://app.codacy.com/app/FEMessage/direct-mail?utm_source=github.com&utm_medium=referral&utm_content=FEMessage/direct-mail&utm_campaign=Badge_Grade_Settings)
[![Build Status](https://travis-ci.com/FEMessage/direct-mail.svg?branch=master)](https://travis-ci.com/FEMessage/direct-mail)
[![NPM Download](https://img.shields.io/npm/dm/@femessage/direct-mail.svg)](https://www.npmjs.com/package/@femessage/direct-mail)
[![NPM Version](https://img.shields.io/npm/v/@femessage/direct-mail.svg)](https://www.npmjs.com/package/@femessage/direct-mail)
[![NPM License](https://img.shields.io/npm/l/@femessage/direct-mail.svg)](https://github.com/FEMessage/direct-mail/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/direct-mail/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

Alibaba Cloud Email Service (direct mail) Node. js SDK (compatible with browser side)

[中文文档](./README-zh.md)

## Table of Contents

- [Feature](#feature)
- [Install](#install)
- [Example](#example)
- [Attention](#attention)
- [Reference](#reference)
- [Contributors](#contributors)
- [License](#license)

## Feature

- Compatible with Node.js/browser
- Promise style
- Support the following API
  - SingleSendMail, supports sending triggers and other single mail
  - BatchSendMail, supports sending a batch of mails by calling templates

[⬆Back to Top](#table-of-contents)

## Install

```sh
yarn add @femessage/direct-mail
```

[⬆Back to Top](#table-of-contents)

## Example

### Send A Single Mail

```javascript
const directMail = require('@femessage/direct-mail')
const singleConfig = {
  AccountName: 'yourmail@mail.com',
  FromAlias: '化名',
  ToAddress: 'toaddress@mail.com',
  Subject: '标题',
  HtmlBody: '<html>内容</html>',
  AccessKeyId: process.env.ACCESS_KEY_ID,
  AccessKeySecret: process.env.ACCESS_KEY_SECRET
}
directMail
  .SingleSendMail(singleConfig)
  .then(resp => {})
  .catch(err => {})
```

### Send A Batch of Mails

```javascript
const directMail = require('@femessage/direct-mail')
const batchConfig = {
  AccountName: 'yourmail@mail.com',
  ReceiversName: 'defaultReceivers',
  TemplateName: 'offer',
  AccessKeyId: process.env.ACCESS_KEY_ID,
  AccessKeySecret: process.env.ACCESS_KEY_SECRET
}
directMail
  .BatchSendMail(batchConfig)
  .then(resp => {})
  .catch(err => {})
```

### Dotenv

AccessKeyId, AccessKeySecret can also be set via [dotenv](https://www.npmjs.com/package/dotenv)

```sh
#.env
ACCESS_KEY_ID=
ACCESS_KEY_SECRET=
```

```js
// load the config
require('dotenv').config()
```

Then AccessKeyId and AccessKeySecret can be omitted.

```javascript
const config = {
  AccountName: 'yourmail@mail.com',
  FromAlias: '化名',
  ToAddress: 'toaddress@mail.com',
  Subject: '标题',
  HtmlBody: '<html>内容</html>'
}
directMail
  .SingleSendMail(config)
  .then(resp => {})
  .catch(err => {})
```

[⬆Back to Top](#table-of-contents)

## Attention

- `HtmlBody` Or `TextBody` cannot contain the brackets `()` of the English input method, otherwise the signature will not pass.
- Please only type your link by text when you need hyperlink, DON'T USE "ADD LINK" TOOL.

In short, it is best not to have English input method special characters in the mail content.<br />[⬆Back to Top](#table-of-contents)

## Reference

- For more Parameter descriptions, please see [Aliyun official docs](https://help.aliyun.com/document_detail/29444.html?spm=a2c4g.11186623.6.597.22653016eJ4hhp)
- Product related manual, please see [FAQ](https://github.com/FEMessage/direct-mail/blob/dev/docs/guide-direct-mail.md)

[⬆Back to Top](#table-of-contents)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/levy9527/blog"><img src="https://avatars3.githubusercontent.com/u/9384365?v=4" width="100px;" alt="levy"/><br /><sub><b>levy</b></sub></a><br /><a href="https://github.com/FEMessage/direct-mail/commits?author=levy9527" title="Code">💻</a> <a href="https://github.com/FEMessage/direct-mail/commits?author=levy9527" title="Tests">⚠️</a> <a href="https://github.com/FEMessage/direct-mail/commits?author=levy9527" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/donhac"><img src="https://avatars0.githubusercontent.com/u/9813324?v=4" width="100px;" alt="donhac"/><br /><sub><b>donhac</b></sub></a><br /><a href="https://github.com/FEMessage/direct-mail/commits?author=donhac" title="Code">💻</a> <a href="https://github.com/FEMessage/direct-mail/commits?author=donhac" title="Documentation">📖</a> <a href="#infra-donhac" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://colmugx.github.io"><img src="https://avatars1.githubusercontent.com/u/21327913?v=4" width="100px;" alt="ColMugX"/><br /><sub><b>ColMugX</b></sub></a><br /><a href="https://github.com/FEMessage/direct-mail/commits?author=colmugx" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)

## Inspiration

thanks to [Mttylzq](https://github.com/Mttylzq/ali-email)
