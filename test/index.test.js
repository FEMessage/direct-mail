const env = require('dotenv').config()
const directMail = require('../src/index')

describe('SingleSendMail', () => {
  let singleConfig = {}

  beforeEach(() => {
    singleConfig = {
      AccountName: 'account@mail.levy.ren',
      FromAlias: '邮件昵称',
      ToAddress: 'chenriwei@deepexi.com',
      Subject: '邮件标题',
      HtmlBody: '<html>HtmlBody from SingleSendMail</html>'
    }
  })

  test('send success', done => {
    directMail.SingleSendMail(singleConfig).then(resp => {
      let {status} = resp
      expect(status).toBe(200)
      done()
    })
  })

  test('params required', done => {
    directMail.SingleSendMail().catch(err => {
      // console.log('params required:', err)
      expect(typeof err).toBe('string')
      done()
    })
  })

  test('send fail', done => {
    delete singleConfig.HtmlBody
    directMail.SingleSendMail(singleConfig).catch(err => {
      // console.log(err)
      expect(err.response.status).toBe(400)
      done()
    })
  })
})

describe('BatchSendMail', () => {
  let batchConfig = {
    AccountName: 'account@mail.levy.ren',
    ReceiversName: 'defaultReceivers',
    TemplateName: 'offer'
  }

  test('send success', done => {
    directMail.BatchSendMail(batchConfig).then(resp => {
      let {status} = resp
      expect(status).toBe(200)
      done()
    })
  })

  test('params required', done => {
    directMail.BatchSendMail().catch(err => {
      // console.log('params required:', err)
      expect(typeof err).toBe('string')
      done()
    })
  })
})
