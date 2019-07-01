# 使用阿里云邮件推送

<a name="JTsJC"></a>
## 简介
阿里云[邮件推送](https://www.aliyun.com/product/directmail)(DirectMail)简单易用，本身有每天200封免费邮件的额度，基本能满足日常邮件数量不是很大的场景。

<a name="KNla8"></a>
## 开通账号

- 进入[官网](https://www.aliyun.com/product/directmail)
- 点击申请开通

![image.png](https://cdn.nlark.com/yuque/0/2019/png/160590/1561357380014-b375a4f9-3435-41e2-9e3d-c37aaaec5947.png#align=left&display=inline&height=314&name=image.png&originHeight=628&originWidth=1510&size=349243&status=done&width=755)

<a name="MfeL6"></a>
## 基本设置
我们主要是使用API调用的方式，控制台只需要配置：

- 发信域名
- 发新地址

<a name="1iB9o"></a>
### 发信域名
发信域名配置按照要求在DNS解析加入对应配置即可，未备案域名也可正常使用邮件服务。

新建后，点击配置<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/160590/1561610634119-d2198302-524b-4669-ae4a-01bb0408685f.png#align=left&display=inline&height=229&name=image.png&originHeight=458&originWidth=2530&size=200978&status=done&width=1265)

注意查看三行记录的三个字段：

- 类型
- 主机记录
- 记录值

![image.png](https://cdn.nlark.com/yuque/0/2019/png/160590/1561610708216-22936ee9-77e5-495a-bbc7-cdf8abce4b28.png#align=left&display=inline&height=468&name=image.png&originHeight=936&originWidth=1824&size=332059&status=done&width=912)

进入域名控制台，针对域名添加相应解析<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/160590/1561610924873-83bc30ab-5e0e-4335-b8a4-86eaf6e53eb8.png#align=left&display=inline&height=415&name=image.png&originHeight=830&originWidth=2542&size=528204&status=done&width=1271)

添加记录时，分别填写对应字段<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/160590/1561611022102-f9685dff-2a11-4010-9571-cf6a891a44c7.png#align=left&display=inline&height=523&name=image.png&originHeight=1046&originWidth=1300&size=162965&status=done&width=650)<br />回到邮件服务控制台，点击验证<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/160590/1561611122220-3fa7b826-6ef4-408e-9838-02248fb774a9.png#align=left&display=inline&height=216&name=image.png&originHeight=432&originWidth=2540&size=198719&status=done&width=1270)
<a name="P0YbC"></a>
### 发信地址
待发信域名验证成功后，添加发信地址。

发信地址是我们发送邮件时，在收件方显示的发件邮箱地址。

![image.png](https://cdn.nlark.com/yuque/0/2019/png/160590/1561952869494-b914312a-5ce5-4550-8927-421e0486bc19.png#align=left&display=inline&height=530&name=image.png&originHeight=1060&originWidth=1172&size=230302&status=done&width=586)
<a name="Fhhs2"></a>
### 回信地址
回信地址是对方回复时，我们收到邮件的地址。回信地址最好验证一下，否则无法批量发送。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/160590/1561954231927-f11e0e88-ec5b-4492-ab58-49505db81bc9.png#align=left&display=inline&height=214&name=image.png&originHeight=428&originWidth=2166&size=204330&status=done&width=1083)


<a name="uEm9L"></a>
### 相关视频
更多具体操作，可以查看[官方视频](https://www.aliyun.com/product/directmail?spm=a2c4g.11174283.2.1.54025e7aK130Q1)：

![image.png](https://cdn.nlark.com/yuque/0/2019/png/160590/1561610184019-a3853fea-6ec8-49a1-9fe1-5e39ae7e0918.png#align=left&display=inline&height=377&name=image.png&originHeight=754&originWidth=2186&size=222061&status=done&width=1093)<br />

<a name="gWD4t"></a>
## 单个发送
做好上面的基本配置，就可以使用[sdk](https://github.com/FEMessage/direct-mail)调用api发送邮件了

<a name="UeAKt"></a>
## 批量发送
<a name="hyi9c"></a>
### 新建模板
![image.png](https://cdn.nlark.com/yuque/0/2019/png/197447/1561541082898-9375d394-647a-4264-91a3-a69668726857.png#align=left&display=inline&height=148&name=image.png&originHeight=326&originWidth=1184&size=30835&status=done&width=538.1818065170417)<br />等待审核，大约等待一天时间

其中 `模板名称`  sdk会用到

<a name="GnbBo"></a>
### 新建收件人列表
![image.png](https://cdn.nlark.com/yuque/0/2019/png/197447/1561541263168-2cc69598-1427-4564-aa1a-81550a404eb8.png#align=left&display=inline&height=344&name=image.png&originHeight=756&originWidth=1182&size=74551&status=done&width=537.2727156276547)
> 注意上面截图中，别称地址是随便一个地址，不是真正的收件地址
> 
> 其中 列表名称 sdk会用到

<a name="siYRG"></a>
### 编辑收件列表
![image.png](https://cdn.nlark.com/yuque/0/2019/png/197447/1561541492665-65704ad1-4f56-4919-b8de-eb5e6057e4f7.png#align=left&display=inline&height=245&name=image.png&originHeight=538&originWidth=1154&size=53964&status=done&width=524.5454431762382)<br />上面截图中，邮件地址才是真正的收件人地址

<a name="3PM9i"></a>
## 相关信息
<a name="EjMz0"></a>
### 邮件额度
进入管理控制台，可以查看邮件额度<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/160590/1561357438700-293f300a-7604-490d-be6d-05cfd3c7c812.png#align=left&display=inline&height=535&name=image.png&originHeight=1070&originWidth=2300&size=464499&status=done&width=1150)

<a name="QvZ6H"></a>
### RegionId
左上角是 `RegionId` 相关, 一般而言国内用户默认是杭州<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/160590/1561365305843-64cd6f50-98f4-46c7-94a4-a3d28f08da30.png#align=left&display=inline&height=469&name=image.png&originHeight=938&originWidth=1590&size=365508&status=done&width=795)

