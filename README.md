# 매실

> 오늘부터 매일매일 실내운동

[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/maesil-ai/maesil-client/pulls)

<p align=center style="line-height: 2;">
  <a href="https://www.npmjs.com/package/@egjs/flicking" target="_blank"><img src="https://img.shields.io/npm/v/@egjs/flicking.svg?style=flat-square&color=007acc&label=version&logo=NPM" alt="version" /></a>


</p>

[![매실](https://i.imgur.com/b0YBYnC.png)](https://maesil.ai)

## 🚩 목차

- [🤖 왜 매실인가](#🤖-왜-매실인가)
- [🐾 튜토리얼](#🐾-튜토리얼)
- [🌏 브라우저 지원](#🌏-브라우저-지원)
- [🔧 개발 환경 설정](#🔧-개발-환경-설정)
- [⚙️ 시스템 구성도](#⚙️-시스템-구성도)
- [🔗 자세한 설명](#🔗-자세한-설명)
- [📜 라이센스](#📜-라이센스)

## 🤖 왜 매실인가

“홈 트레닝계의 유튜브”

매실은 많은 사람들이 매일매일 실내운동을 할 수 있게 도와주는 운동 콘텐츠 플랫폼이다. 누구나 자신만의 운동 동영상 콘텐츠를 올릴 수 있고 이를 보고 홈 트레이닝을 할 수 있다. 이 때 운동 영상을 보면서 운동을 할 때 AI가 동작을 잘 따라하는지에 대한 점수를 매겨준다. 또한 운동들을 모아서 운동 코스를 제작할 수 있고, 개인별로 원하는 운동을 모아 코스를 제작할 수 있다.
개인 운동 기록을 원활히 할 수 있도록 돕는다.
또한, Maesil School을 도입하여, 언택트 시대의 체육 수업 및 강의를 돕는 운동수업 플랫폼이다.

### Play

![main](https://i.imgur.com/LqqYDEb.png)

사용자는 메인화면에서 자신이 원하는 운동 동작을 고를 수 있다.

![practice](https://i.imgur.com/NZMPrwV.png)

![play](https://i.imgur.com/cYCgofQ.png)

자신이 가이드의 자세를 잘 따라하고 있는지 AI 기반으로 실시간으로 점수를 피드백 받을 수 있다.

### Upload

![upload](https://i.imgur.com/Y5VS2fI.gif)

자신만의 운동을 업로드 할 수 있다.


### Feedback
![feedback](https://i.imgur.com/ExkNyMd.png)

운동 최종결과를 정량화된 숫자로 볼 수 있다.

### Coach
![coach](https://i.imgur.com/l32RbLR.png)

통계 시스템, 내가 운동한 기록을 볼 수 있다.



## 🐾 튜토리얼
![maesil](https://i.imgur.com/SgHl9Ur.jpg)

![tutorial](https://i.imgur.com/7zUuP0G.gif)


## ⚙️ 시스템 구성도

### User
<img height="50px" width="50px" src="blob:https://imgur.com/7a01edb2-c488-47c3-9778-2a74a36d5d1e"/> Oauth2를 사용한 Social Login

### 시스템 아키텍처

![architecture](https://i.imgur.com/tFJZW8u.png)


<img src="https://i.imgur.com/g9renu4.png"/>

1. ML Server와 통신을 위해 sqs를 이용
2. 긴 영상 업로드를 원활하게 하기 위해 S3에 5MB씩 나눠서 분할 업로드
3. 후에 많아질 트래픽을 대비해 ELB 이용

### DB 설계

![database](https://i.imgur.com/GirWqq0.png)

### CI/CD

![CI/CD](https://i.imgur.com/EfdPlQw.png)

## 🌏 브라우저 지원

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| O | 10+ | O | O | O |

## 🔧 개발 환경 설정

### 설치

`master` 브랜치를 개인 레포지토리로 포크한다. 로컬 컴퓨터로 클론한다. 노드 모듈을 설치한다. 개발을 시작하기 전에 에러가 없는지 확인해야 한다.

#### 선행 요소

- [깃 설치](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98)
- [Yarn 설치](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

##### 프로젝트 클론

```sh
git clone https://github.com/maesil-ai/maesil-server.git
cd maesil-server
yarn
```

### 개발

#### 개발 모드로 실행

앱을 개발모드로 실행합니다. `http://localhost:3000` 을 열어서 확인 가능합니다.코드를 수정하면 페이지가 새로고침됩니다. 또한 lint 에러를 콘솔에서 볼 수 있습니다.

``` sh
yarn start
```

#### 테스트 스크립트

미구현 기능

``` sh
yarn test
```

#### 프로젝트 빌드

프로젝트를 배포 준비 상태로 만듭니다.

``` sh
yarn build
```

### Pull Request

PR을 하기 전에는 에러가 없는지 체크를 해야합니다. 그리고 나서 commit 과 push를 합니다.

더 정확한 정보를 위해서는 기여 페이지를 참조하세요.

## 🔗 외부 링크

- [매실 위키](https://git.swmgit.org/swmaestro/codeblue/-/wikis/home)
  - [프로젝트 기획](https://git.swmgit.org/swmaestro/codeblue/-/wikis/%EA%B8%B0%ED%9A%8D/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B8%B0%ED%9A%8D)
  - [프로젝트 개발](https://git.swmgit.org/swmaestro/codeblue/-/wikis/%EA%B0%9C%EB%B0%9C/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%9C%EB%B0%9C)
  - [멘토링](https://git.swmgit.org/swmaestro/codeblue/-/wikis/%EB%A9%98%ED%86%A0%EB%A7%81/%EB%A9%98%ED%86%A0%EB%A7%81)
  - [코드블루](https://git.swmgit.org/swmaestro/codeblue/-/wikis/home#%EC%BD%94%EB%93%9C%EB%B8%94%EB%A3%A8)

- [매실 블로그](https://blog.maesil.ai)
  - [두 사람의 동작 유사도를 계산하기](https://blog.maesil.ai/2020/08/04/pose-similarity.html)
  - [Bye-bye master 브랜치](https://blog.maesil.ai/2020/08/10/bye-bye-master.html)

- [매실 트위터](https://twitter.com/maesil_ai)

## 📜 라이센스

[MIT License](https://github.com/maesil-ai/maesil-client/LICENSE) © [매실 - Maesil](https://github.com/maesil-ai).

![codeblue](https://i.imgur.com/QtKhI7x.jpg)
