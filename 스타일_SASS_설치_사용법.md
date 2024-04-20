# SASS 설치
```js
npm i sass
npm i sass-loader

한번에 설치
npm i sass sass-loader
```
# sass

```sass
#foooter
    .left

```

# scss

```scss
#foooter{
    .left{

    }
}

```

# 변수 사용법 

1. 변수사용
```SCSS
$width: 1200px;

#wrap {
    width: $width;
    margin: 0 auto;
}

```

2. 변수사용

윈도키 + R => 실행창 => cmd

```JS
C:\Users\Administrator>ipconfig
Windows IP 구성
이더넷 어댑터 이더넷:
   연결별 DNS 접미사. . . . :
   링크-로컬 IPv6 주소 . . . . : fe80::40e0:d52b:a051:8755%11
   IPv4 주소 . . . . . . . . . : 192.168.136.90
   서브넷 마스크 . . . . . . . : 255.255.255.0
   기본 게이트웨이 . . . . . . : 192.168.136.1

```
$url: 'http://localhost:3000';
$url: 'http://127.0.0.1:3000';
$url: 'http://127.0.0.1';
$url: 'http://192.168.136.90';
$url: 'http://moonjong.dothome.co.kr/shop';
$url: 'http://127.0.0.1';      // IP 주소 
$url: 'http://localhost:3000'; // 로컬은 포트번호 필요함
$url: '../../../../public';  // 상대주소 에서는 반드시 /public 포함

#{$url}

```SCSS
url(#{$url}/public/images/image4.jpg)

```

