# Direct-mail

[![](https://cdn.nlark.com/yuque/0/2019/svg/224563/1561962031200-ee0155c3-814e-4e69-b76b-87f95dd7a378.svg#align=left&display=inline&height=20&originHeight=20&originWidth=97&size=0&status=done&width=97)](https://travis-ci.com/FEMessage/direct-mail)
[![](https://img.shields.io/npm/dm/@femessage/direct-mail.svg#align=left&display=inline&height=20&originHeight=20&originWidth=134&status=done&width=134)](https://www.npmjs.com/package/@femessage/direct-mail)
[![](https://img.shields.io/npm/v/@femessage/direct-mail.svg#align=left&display=inline&height=20&originHeight=20&originWidth=80&status=done&width=80)](https://www.npmjs.com/package/@femessage/direct-mail)
[![](https://img.shields.io/npm/l/@femessage/direct-mail.svg#align=left&display=inline&height=20&originHeight=20&originWidth=78&status=done&width=78)](https://github.com/FEMessage/direct-mail/blob/master/LICENSE)
[![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg#align=left&display=inline&height=20&originHeight=20&originWidth=90&status=done&width=90)](https://github.com/FEMessage/direct-mail/pulls)
[![](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg#align=left&display=inline&height=20&originHeight=20&originWidth=104&status=done&width=104)](https://github-tools.github.io/github-release-notes/)

Ali Cloud mail push (direct mail) Node. js SDK (compatible with browser side)

<a name="f61d6c3e"></a>
## Table of Contents

- [Feature](https://www.yuque.com/deepexi-serverless/onx52o/rse4eb?translate=en#feature)
- [Install](https://www.yuque.com/deepexi-serverless/onx52o/rse4eb?translate=en#install)
- [Example](https://www.yuque.com/deepexi-serverless/onx52o/rse4eb?translate=en#example)
- [Attention](https://www.yuque.com/deepexi-serverless/onx52o/rse4eb?translate=en#attention)
- [Reference](https://www.yuque.com/deepexi-serverless/onx52o/rse4eb?translate=en#reference)
- [Contributors](https://www.yuque.com/deepexi-serverless/onx52o/rse4eb?translate=en#contributors)
- [License](https://www.yuque.com/deepexi-serverless/onx52o/rse4eb?translate=en#license)

<a name="Feature"></a>
## Feature

- Compatible with Node. js/browser
- Promise style
- Support the following API
  - SingleSendMail single mailing interface, supports sending triggers and other single Mail
  - BatchSendMail batch mailing interface supports sending batch mail by calling templates<br />[⬆Back to Top](https://www.yuque.com/deepexi-serverless/onx52o/rse4eb?translate=en#table-of-contents)

<a name="Install"></a>
## Install

```sh
yarn add @femessage/direct-mail
```

[⬆Back to Top](https://www.yuque.com/deepexi-serverless/onx52o/rse4eb?translate=en#table-of-contents)

<a name="Example"></a>
## Example

<a name="864dc618"></a>
### Send a single mail

```javascript
const directMail = require('@femessage/direct-mail')
const singleConfig = {
  AccountName: 'yourmail@mail.com',
  FromAlias: '化名',
  ToAddress: 'toaddress@mail.com',
  Subject: '标题',
  HtmlBody: '<html>内容</html>',
  AccessKeySecret: '',
  AccessKeyId: ''
}
directMail
  .SingleSendMail(singleConfig)
  .then(resp => {})
  .catch(err => {})
```

<a name="e2a38cfe"></a>
### Send mail in batches

```javascript
const directMail = require('@femessage/direct-mail')
const batchConfig = {
  AccountName: 'yourmail@mail.com',
  ReceiversName: 'defaultReceivers',
  TemplateName: 'offer',
  AccessKeySecret: '',
  AccessKeyId: ''
}
directMail
  .BatchSendMail(batchConfig)
  .then(resp => {})
  .catch(err => {})
```

<a name="dotenv"></a>
### Dotenv

Access KeyID, access keysecret can also be set through the environment.<br />Recommended [Dotenv](https://www.npmjs.com/package/dotenv)

```sh
#.env
ACCESS_KEY_ID=
ACCESS_KEY_SECRET=
```

You can use the access key ID and access key secret when you call.

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

[⬆Back to Top](https://www.yuque.com/deepexi-serverless/onx52o/rse4eb?translate=en#table-of-contents)

<a name="Attention"></a>
## Attention

`HtmlBody` Or `TextBody` The brackets () of the English input method cannot appear, otherwise the signature will not pass.<br />In short, it is best not to have English input characters in the mail content.<br />[⬆Back to Top](https://www.yuque.com/deepexi-serverless/onx52o/rse4eb?translate=en#table-of-contents)

<a name="Reference"></a>
## Reference

- For more Parameter descriptions, please see [Aliyun official docs](https://help.aliyun.com/document_detail/29444.html?spm=a2c4g.11186623.6.597.22653016eJ4hhp)
- Product related manual, please see [FAQ](https://www.yuque.com/deepexi-serverless/onx52o/docs/faq.md)<br />[⬆Back to Top](https://www.yuque.com/deepexi-serverless/onx52o/rse4eb?translate=en#table-of-contents)

<a name="Contributors"></a>
## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

| [![](https://avatars3.githubusercontent.com/u/9384365?v=4#alt=levy&width=100)<br />**levy**](https://github.com/levy9527/blog)<br />[💻](https://github.com/FEMessage/direct-mail/commits?author=levy9527) [⚠️](https://github.com/FEMessage/direct-mail/commits?author=levy9527) [📖](https://github.com/FEMessage/direct-mail/commits?author=levy9527) | [![](https://avatars0.githubusercontent.com/u/9813324?v=4#alt=donhac&width=100)<br />**donhac**](https://github.com/donhac)<br />[💻](https://github.com/FEMessage/direct-mail/commits?author=donhac) [📖](https://github.com/FEMessage/direct-mail/commits?author=donhac) [🚇](#infra-donhac) |
| --- | --- |


