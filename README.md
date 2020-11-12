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

매실은 많은 사람들이 매일매일 실내운동을 할 수 있게 도와주는 운동 콘텐츠 플랫폼이다. 누구나 자신만의 운동 동영상 콘텐츠를 올릴 수 있고 이를 보고 홈 트레이닝을 할 수 있다. 이 때 운동 영상을 보면서 운동을 할 때 AI가 동작을 잘 따라하는지에 대한 점수를 매겨준다. 또한 운동들을 모아서 운동 코스를 제작할 수 있고, 개인에게 맞는 추천 기능, 커뮤니티, 업적, 레벨 등의 기능등을 통해 재미를 느껴 매일매일할 수 있는 동기부여를 유저에게 제공한다.

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

![tutorial](https://i.imgur.com/7zUuP0G.gif)


## ⚙️ 시스템 구성도

### User
<img height="50px" width="50px" src="data:image/png;base64,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"/> Oauth2를 사용한 Social Login

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
