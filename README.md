# My Test Vue App
<br>

## :pushpin: Build Setup
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
<br><br>

## :memo: 퍼블리싱 가이드

### 기본 정보
```
- node version: v16.16.0
- 개발 전달 내용은 '[D]YYMMDD 내용'과 같이 주석 (예: [D]221020 고객 이름 데이터바인딩)
```
### 레이아웃
```
- 최대 가로 사이즈: 1280px
- 최대 세로 사이즈: 800px
- 가로 세로 비율 1.6:1로 유지
- 이미지 크기는 갤럭시a8의 해상도인 2500px X 1600px로 작업 (디바이스 2배)
```
### 경로
```
- 전체 페이지 경로: /guide
- 퍼블리싱 컴포넌트 가이드 경로: /guide
```
### 파일 구조 :open_file_folder:
```
- 이미지: /static/img
- 폰트: /static/font
- CSS(SCSS): 
  - 공통 스타일: /assets/scss/common.scss를 layouts폴더 내 레이아웃에 연결
  - 각 페이지 스타일: /assets/scss/pages폴더 내 파일을 각 페이지에 연결
  - 컴포넌트 스타일: /assets/scss/pages폴더 내 파일을 각 컴포넌트에 연결
```