# likeLion
-SPA(Single Page Application)
SPA는 웹 애플리케이션에 필요한 모든 정적 리소스를 최초 접근시 단 한번만 다운로드한다.
이후 새로운 페이지 요청 시, 페이지 갱신에 필요한 데이터만을 JSON으로 전달받아 페이지를 갱신하므로 전체적인 트래픽을 감소시킬 수 있고, 변경되는 부분만을 갱신하므로 새로고침이 발생하지 않는다.

-MPA(Multi Page Application)
MPA는 SPA와 달리 새로운 페이지를 요청할 때마다 정적 리소스가 다운로드 되고,
그에 맞춰 전체 페이지를 다시 렌더링한다.

 MPA는 완성된 형태의 HTML파일을 서버로부터 전달받기 때문에 검색 엔진이 페이지를 크롤링하기에 적합하다. 따라서 MPA는 SEO(Search Engine Optimization)관점에 유리하다.



-Virtual DOM이란?
 먼저, DOM은 무엇일까 DOM(Document Object Model)은 문서 객체 모델은 
HTML문서를 파싱하여 '문서의 구성요소들을 객체로 구조화하여 나타낸 것'이다.
Virtual DOM은 DOM과 유사한 역할을 담당하는 객체다.
기존에는 HTML로부터 DOM객체를 생성해서 변경할 때마다 DOM을 변경해서 렌더링하는 방식으로 브라우저가 렌더링 됐다.

Vitrtual DOM을 이용한 렌더링은 Virtual DOM에 변경 내역을 한 번에 모으고 실제 DOM과 변경된 virtual DOM의 차이를 판단한 후, 변경이 된 부분만 찾아 변경하고 렌더링을 한 번만 하는 방식이다.

React는 이 Virtual DOM을 제어하는 역할을 한다.



-브라우저 렌더링 과정
5단계에서 렌더링이 이루어진다.

1.Parsing
:HTML 파일을 해석하여 DOM Tree를 구성한다.
이 과정에서 CSS가 포함되어 있다면 CSS object Model Tree 또한 구성해야한다.

2.Style
:DOM Tree와 CSSOM Tree를 매칭시켜 Render Tree를 구성한다. 
이 Render Tree가 실제로 화면에 그려질 Tree이다.

3.Layout
:Render Tree를 화면에 어떻게 배치해야 할 것인지 노드의 정확한 위치와 크기를 계산한다.

4.Paint
:Layout 단계에서 계산된 값을 이용해 Render Tree의 각 노드를 화면상의 실제 픽셀로 변환한다. 변환된 결과는 하나의 레이어가 아니라 여러 개의 레이어로 관리된다.

5.Composite
:Paint 단계에서 생성된 레이어를 합성하여 웹 페이지에 나타낸다.
