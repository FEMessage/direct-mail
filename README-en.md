# direct-mail

[![](https://cdn.nlark.com/yuque/0/2019/svg/224563/1561962031200-ee0155c3-814e-4e69-b76b-87f95dd7a378.svg#align=left&display=inline&height=20&originHeight=20&originWidth=97&size=0&status=done&width=97)](https://travis-ci.com/FEMessage/direct-mail)
[![](https://img.shields.io/npm/dm/@femessage/direct-mail.svg#align=left&display=inline&height=20&originHeight=20&originWidth=134&status=done&width=134)](https://www.npmjs.com/package/@femessage/direct-mail)
[![](https://img.shields.io/npm/v/@femessage/direct-mail.svg#align=left&display=inline&height=20&originHeight=20&originWidth=80&status=done&width=80)](https://www.npmjs.com/package/@femessage/direct-mail)
[![](https://img.shields.io/npm/l/@femessage/direct-mail.svg#align=left&display=inline&height=20&originHeight=20&originWidth=78&status=done&width=78)](https://github.com/FEMessage/direct-mail/blob/master/LICENSE)
[![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg#align=left&display=inline&height=20&originHeight=20&originWidth=90&status=done&width=90)](https://github.com/FEMessage/direct-mail/pulls)
[![](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg#align=left&display=inline&height=20&originHeight=20&originWidth=104&status=done&width=104)](https://github-tools.github.io/github-release-notes/)

Alibaba Cloud Email Service (direct mail) Node. js SDK (compatible with browser side)

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

  - SingleSendMail single mailing interface, supports sending triggers and other single Mail
  - BatchSendMail batch mailing interface supports sending batch mail by calling templates

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
  AccessKeySecret: process.env.ACCESS_KEY_ID,
  AccessKeyId: process.env.ACCESS_KEY_SECRET
}
directMail
  .SingleSendMail(singleConfig)
  .then(resp => {})
  .catch(err => {})
```

### Send Mail In Batches

```javascript
const directMail = require('@femessage/direct-mail')
const batchConfig = {
  AccountName: 'yourmail@mail.com',
  ReceiversName: 'defaultReceivers',
  TemplateName: 'offer',
  AccessKeySecret: process.env.ACCESS_KEY_ID,
  AccessKeyId: process.env.ACCESS_KEY_SECRET
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
- Product related manual, please see [FAQ](https://www.yuque.com/deepexi-serverless/onx52o/docs/faq.md)

[⬆Back to Top](#table-of-contents)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

| [![](https://avatars3.githubusercontent.com/u/9384365?v=4#alt=levy&width=100)<br />**levy**](https://github.com/levy9527/blog)<br />[💻](https://github.com/FEMessage/direct-mail/commits?author=levy9527) [⚠️](https://github.com/FEMessage/direct-mail/commits?author=levy9527) [📖](https://github.com/FEMessage/direct-mail/commits?author=levy9527) | [![](https://avatars0.githubusercontent.com/u/9813324?v=4#alt=donhac&width=100)<br />**donhac**](https://github.com/donhac)<br />[💻](https://github.com/FEMessage/direct-mail/commits?author=donhac) [📖](https://github.com/FEMessage/direct-mail/commits?author=donhac) [🚇](#infra-donhac) |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)

## Inspiration

thanks to [Mttylzq](https://github.com/Mttylzq/ali-email)
