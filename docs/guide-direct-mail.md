# 使用阿里云邮件推送

<a name="JTsJC"></a>
## 简介
阿里云[邮件推送](https://www.aliyun.com/product/directmail)(DirectMail)简单易用，本身有每天200封免费邮件的额度，基本能满足日常邮件数量不是很大的场景。

<a name="KNla8"></a>
## 开通账号

- 进入[官网](https://www.aliyun.com/product/directmail)
- 点击申请开通

![image.png](https://i.loli.net/2019/11/15/nYlDtAgMixT6OG8.png)

<a name="MfeL6"></a>
## 基本设置
我们主要是使用API调用的方式，控制台只需要配置：

- 发信域名
- 发信地址

<a name="1iB9o"></a>
### 发信域名
发信域名配置按照要求在DNS解析加入对应配置即可，未备案域名也可正常使用邮件服务。

新建后，点击配置<br />![image.png](https://i.loli.net/2019/11/15/69Fh5Z1Ud4KtHAY.png)

注意查看三行记录的三个字段：

- 类型
- 主机记录
- 记录值

![image.png](https://i.loli.net/2019/11/15/uvsw4qS9WZExaJN.png)

进入域名控制台，针对域名添加相应解析<br />![image.png](https://i.loli.net/2019/11/15/nRQFDbHE1XKLkM7.png)

添加记录时，分别填写对应字段<br />![image.png](https://i.loli.net/2019/11/15/VPD4ujGdtCnYNKH.png)<br />回到邮件服务控制台，点击验证<br />![image.png](https://i.loli.net/2019/11/15/xcU7lhzBfI98CpE.png)
<a name="P0YbC"></a>
### 发信地址
待发信域名验证成功后，添加发信地址。

发信地址是我们发送邮件时，在收件方显示的发件邮箱地址。

![image.png](https://i.loli.net/2019/11/15/5IugoU41aRfnABe.png)
<a name="Fhhs2"></a>
### 回信地址
回信地址是对方回复时，我们收到邮件的地址。回信地址最好验证一下，否则无法批量发送。<br />![image.png](https://i.loli.net/2019/11/15/wJtTgkd6SZQ7Yhj.png)


<a name="uEm9L"></a>
### 相关视频
更多具体操作，可以查看[官方视频](https://www.aliyun.com/product/directmail?spm=a2c4g.11174283.2.1.54025e7aK130Q1)：

![image.png](https://i.loli.net/2019/11/15/EY2D6dtUQ89GkVw.png)<br />

<a name="gWD4t"></a>
## 单个发送
做好上面的基本配置，就可以使用[sdk](https://github.com/FEMessage/direct-mail)调用api发送邮件了

<a name="UeAKt"></a>
## 批量发送
<a name="hyi9c"></a>
### 新建模板
![image.png](https://i.loli.net/2019/11/15/fEZgjry7G6IBCpT.png)<br />等待审核，大约等待一天时间

其中 `模板名称`  sdk会用到

<a name="GnbBo"></a>
### 新建收件人列表
![image.png](https://i.loli.net/2019/11/15/BeQlMHdRgxfCKjo.png)
> 注意上面截图中，别称地址是随便一个地址，不是真正的收件地址
> 
> 其中 列表名称 sdk会用到

<a name="siYRG"></a>
### 编辑收件列表
![image.png](https://i.loli.net/2019/11/15/7t9vyxzWwqC1Ygc.png)<br />上面截图中，邮件地址才是真正的收件人地址

<a name="3PM9i"></a>
## 相关信息
<a name="EjMz0"></a>
### 邮件额度
进入管理控制台，可以查看邮件额度<br />![image.png](https://i.loli.net/2019/11/15/g3HEfopk1m9V8qd.png)

<a name="QvZ6H"></a>
### RegionId
左上角是 `RegionId` 相关, 一般而言国内用户默认是杭州<br />![image.png](https://i.loli.net/2019/11/15/7Jc4HMAPnbUER3G.png)

