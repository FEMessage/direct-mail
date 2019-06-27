const crypto = require('crypto')
const axios = require('axios')

function SingleSendMail(config = {}) {
  return new Promise((resolve, reject) => {
    const AccessKeyId = config.AccessKeyId || process.env.ACCESS_KEY_ID
    const AccessKeySecret =
      config.AccessKeySecret || process.env.ACCESS_KEY_SECRET

    const errorMsg = checkAccessKey({AccessKeyId, AccessKeySecret}).concat(
      checkConfig(config, ['AccountName', 'ToAddress'])
    )

    if (errorMsg.length) {
      reject(errorMsg.join(','))
    }

    const paramsArray = getParamsArray(
      Object.assign({}, config, {
        AccessKeyId,
        Action: 'SingleSendMail'
      })
    )

    const signature = getSignature({paramsArray, AccessKeySecret})

    request({signature, paramsArray})
      .then(resolve)
      .catch(reject)
  })
}

function BatchSendMail(config = {}) {
  return new Promise((resolve, reject) => {
    const AccessKeyId = config.AccessKeyId || process.env.ACCESS_KEY_ID
    const AccessKeySecret =
      config.AccessKeySecret || process.env.ACCESS_KEY_SECRET

    const errorMsg = checkAccessKey({AccessKeyId, AccessKeySecret}).concat(
      checkConfig(config, ['AccountName', 'TemplateName', 'ReceiversName'])
    )

    if (errorMsg.length) {
      reject(errorMsg.join(','))
    }

    const paramsArray = getParamsArray(
      Object.assign({}, config, {
        AccessKeyId,
        Action: 'BatchSendMail'
      })
    )

    const signature = getSignature({paramsArray, AccessKeySecret})

    request({signature, paramsArray})
      .then(resolve)
      .catch(reject)
  })
}

// return error msg array
function checkAccessKey(params = {AccessKeyId, AccessKeySecret}) {
  return Object.keys(params)
    .filter(key => !params[key])
    .map(param => `${param} required`)
}

// return error msg array
function checkConfig(config = {}, params = []) {
  return params
    .filter(param => !config[param])
    .map(param => `${param} required`)
}

function getParamsArray(config) {
  // https://help.aliyun.com/document_detail/29440.html?spm=a2c4g.11186623.6.592.20f13972khUg03
  const defaultConfig = {
    Format: 'JSON',
    RegionId: 'cn-hangzhou',
    Version: '2015-11-23',
    SignatureMethod: 'HMAC-SHA1',
    Timestamp: new Date().toISOString(),
    SignatureVersion: '1.0',
    SignatureNonce: Date.now(),
    ReplyToAddress: true,
    AddressType: 1
  }

  const params = Object.assign({}, defaultConfig, config)

  return Object.keys(params)
    .map(
      param =>
        `${encodeURIComponent(param)}=${encodeURIComponent(params[param])}`
    )
    .sort()
}

function getSignature({paramsArray, AccessKeySecret}) {
  const signStr = 'POST&%2F&' + encodeURIComponent(paramsArray.join('&'))

  const sign = crypto
    .createHmac('sha1', AccessKeySecret + '&')
    .update(signStr)
    .digest('base64')

  return encodeURIComponent(sign)
}

function request({signature, paramsArray}) {
  return axios({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    url: 'https://dm.aliyuncs.com/',
    data: ['Signature=' + signature].concat(paramsArray).join('&')
  })
}

module.exports = {
  SingleSendMail,
  BatchSendMail
}
