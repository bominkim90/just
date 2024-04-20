# AXIOS 설치

```JS

  npm i axios  

```
 1. 사용시 임포트
```JS
    import axios from 'axios';
```
 2. 컴포넌트 탬플릿 완성이 되면 실행
   React.useEffect();


# 데이터(Data) 
- JSON
- XML
- TXT
- CSV


            <li><a href="!#" onClick={onClickPopupOpen} className="popup-btn" title="9월 just 쇼핑몰 세일 안내!">9월 just 쇼핑몰 세일 안내!</a><span>2018-09-03</span></li>
            <li><a href="!#" title="불편한 경험은 저희에게도 알려주세요.">불편한 경험은 저희에게도 알려주세요.</a><span>2018-09-02</span></li>
            <li><a href="!#" title="카카오톡 친구 추가하고 할인쿠폰 받아 가세요.">카카오톡 친구 추가하고 할인쿠폰 받아 가세요.</a><span>2018-09-01</span></li>
            <li><a href="!#" title="다른곳에선 못보는~ 매력발산 아이템들 구경해 보실래요?">다른곳에선 못보는~ 매력발산 아이템들 구경해 보실래요?</a><span>2018-08-31</span></li>
            <li><a href="!#" title="just 쇼핑몰을 친구에게 추천하면 할인쿠폰을 드립니다!">just 쇼핑몰을 친구에게 추천하면 할인쿠폰을 드립니다!</a><span>2018-08-30</span></li>

public
[data]
    notice.json => 공지사항목록(게시글, 날짜)
    gallery.json => 갤러리목록(타이틀, 이미지 img src)
    slide.json => 슬라이드(타이틀, 이미지 background-image url)
    category.json => 메인메뉴, 서브메뉴

notice.json
- 시작 => {}
- 문자열은 "겹따옴표사용"
9월 just 쇼핑몰 세일 안내! 2018-09-03
불편한 경험은 저희에게도 알려주세요. 018-09-02
카카오톡 친구 추가하고 할인쿠폰 받아 가세요. 2018-09-01
다른곳에선 못보는~ 매력발산 아이템들 구경해 보실래요? 2018-08-31
just 쇼핑몰을 친구에게 추천하면 할인쿠폰을 드립니다! 2018-08-30


# 프로미스
  axios({}).then(성공시).catch(실패시);


```JSX
 <ul>
    {
      공지사항.map((item, idx)=>{
          return(
              <li>
                  <a href="!#" onClick={onClickPopupOpen} className="popup-btn" title={item.공지}>{item.공지}</a>
                  <span>{item.날짜}</span>
              </li>
          )
      })                
    }    
</ul>
```


# 객체(Object) 키(keys) 속성 확인 후 상태변수 저장
  => ['공지사항', '갤러리'].includes('공지사항')

```JS
console.log( Object.keys(res.data) )
console.log( Object.keys(res.data).includes('공지사항') )
console.log( Object.keys(res.data).includes('갤러리') )
const n = Object.keys(res.data).includes('공지사항');
const g = Object.keys(res.data).includes('갤러리');

```


url(${process.env.PUBLIC_URL}/images/${item.배경이미지})