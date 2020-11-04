<template>
  <div id="app">
    <Navbar/>
    <MainSection/>
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar.vue';
import MainSection from './components/MainSection.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    MainSection
  }
};
</script>

<style>
html, body, #app {
    height: 100%;
    width: 100%;
}
html {
    font-size: 15px;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
#app {
    overflow: hidden;
}
body {
    background-color: white;
    overscroll-behavior-y: none;
    font-weight: bold;
    margin: 0px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
}

#app {
  display:flex;
}

::-webkit-input-placeholder {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
}

svg {
    fill: rgba(29, 161, 242, 1.00);
}

.light {
    font-weight: normal;
    color: rgb(101, 119, 134);
}

.circle {
    border-radius: 50%;
}
.blue-hover {
    border-radius: 9999px;
    padding: 10px;
    transition: background-color 0.5s ease;
}
.blue-hover:hover {
    color: rgba(29, 161, 242, 1.00);
    background-color: rgba(29,161,242,0.1);
    cursor: pointer;
}
.button-hover {
    transition-property: background-color;
    transition-duration: 0.2s;
}
.button-hover:hover {
    background-color: #2883de; /*darker blue*/
    cursor: pointer;
}


header {
    flex: 1;
    overflow-y: scroll;
    /* justify-content: space-between; */
    display: flex;
    flex-direction: column;
    height: 100%;
}
#header-icon-wrapper {
  padding: 10px;
}
#header-icon-wrapper>svg {
    height: 30px;
    width: 47px;
    padding-left: 10px;
}
.nav-wrapper {
    padding-left: 20px;
}
.nav-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.nav-item.active span {
    color: rgba(29, 161, 242, 1.00); 
}

.nav-item.active svg {
    fill: rgba(29, 161, 242, 1.00); 
}

.nav-item-cover {
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    transition: background-color 0.5s ease;
}
.nav-item-cover:hover {
    color: rgba(29, 161, 242, 1.00);
    background-color: rgba(29,161,242,0.1);
    cursor: pointer;
}

.nav-item-cover:hover .nav-item-svg {
    fill: rgba(29, 161, 242, 1.00);
}
.nav-item-cover2 {
    flex: 1;
    display: flex;
}
.nav-svg-wrapper {
    flex: 1;
}

.nav-svg-wrapper > svg {
    fill: black;
    height: 1.75rem;
    width: 1.75rem;
}

.nav-item-text {
    flex: 1;
    text-align: left;
    min-height: 15px;
    padding-top: 5px;
}

.nav-item-text>span {
    font-size: 19px;
    padding-right: 10px;
    margin-left: 20px;
}

nav svg {
    height: 30px;
    width: 47px;
}

#user-info-wrapper {
    display: flex;
    flex: 1;
    width: 100%;
    /* padding: 10px 0px 10px 20px; */
    /* margin-left: 10px; */
    /* margin-right: 10px; */
    /* max-height: 35px; */
    /* margin-top: auto; */
    justify-content: center;
}
.user-info-cover {
    display:flex;
    flex : 1;
    align-items: flex-end;
    padding-left: 20px;
    padding-right: 10px;
    padding-bottom: 10px;
}
#user-info {
    display: flex;
    width: 100%;
    max-height: 40px;
}

.user-info-image-wrapper {
    flex: 1;
}

.user-info-image-wrapper>img {
    width: 37px;
    height: 37px;
}

#user-info svg {
    height: 1.25em;
    width: 1.25em;
}

.user-info-body {
    flex: 3;
}

.user-info-arrow-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    vertical-align: text-bottom;
}

.user-info-arrow-wrapper>svg {
    flex: 1;
}
#tweet-button-wrapper {
}
#tweet-button {
    background-color: rgba(29, 161, 242, 1.00);
    color: white;
    display: flex;
    flex-direction: column;
    /* text-align: center; */
    /* padding-top: 10px; */
    /* padding-bottom: 10px; */
    border-radius: 9999px;
    min-height: 49px;
    align-items:center;
    justify-content: center;
    margin-left: 10%;
    margin-right: 10%;
    cursor: pointer;
    /*TODO hover background color*/
}
#tweet-button:hover {
    background-color: #2883de;
}

main {
    flex: 3.5;
    display: flex;
    overflow-y: scroll;
}

#center-section {
    flex: 3;
    margin-right: 0px;
    margin-left: 0px;
    border-top-width: 0px;
    border-right-width: 1px;
    border-left-width: 1px;
    border-color: rgb(230, 236, 240);
    border-style: solid;
    overflow-y: scroll;
}

#heading, #tweet-box {
    padding-left: 15px;
    padding-right: 15px;
}
#tweet-box {
    padding-bottom: 10px;
    padding-top: 10px;
}
#heading {
    font-size: 19px;
    height: 53px;
    position: sticky;
    top: 0px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(230, 236, 240);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: white;
}
#home {
    flex: 9999;
}
#sparkle-wrapper {
    flex: 1;
    font-size: 15px;
}
#sparkle-wrapper:hover{

}
#heading svg {
    height: 1.5em;
    width: 1.5em;
}

#tweet-box {
    display: flex;
}

#avatar-wrapper {
    flex: 1;
    padding-top: 5px;
}

#input-wrapper {
    flex: 6;
    padding-top: 5px;
}

#input-wrapper>textarea {
    width: 100%;
    height: 100px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom-width: 1px;
    border-bottom-color: rgb(230, 236, 240);
    border-bottom-style: solid;
    font-size: 1.5em;
}

#input-wrapper>textarea::placeholder {
    font-size: 19px;
}

#tweet-box-bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 10px;
}

.tweet-box-svg-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
}

#tweet-box-bar svg {
    width: 1.5em;
    height: 1.5em;
    /* padding-right: 5px; */
    flex: 1;
}

.empty {
    flex: 5;
    align-self: flex-end;
}

#tweet-box-bar>.tweet-button-small {
    flex: 2;
    align-self: flex-end;
    text-align: center;
    background-color: rgba(29, 161, 242, 1.00);
    /*blue*/
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 9999px;
}
.breaker {
    height: 10px;
    background-color: rgb(230, 236, 240);
}
#tweets {
    /* padding-top: 15px; */
    /* padding-right: 35px; */
}
.tweet-wrapper {
    display: flex;
    padding-top: 15px;
}
.tweet-wrapper:hover {
    background-color: #f7f7f7;
    cursor: pointer;
}
.tweet {
    width: 100%;
    display: flex;
    flex: 1;
    padding-left: 15px;
    padding-right: 15px;
    border-bottom: 1px solid rgb(230, 236, 240);
}

.official-svg {
    height: 1.25em;
    vertical-align: text-bottom;
    margin-left: 2px;
}
.tweet-side {
    flex: 1;
}

.tweet-side>img {
    height: 49px;
    width: 49px;
    border-radius: 50%;
}

.tweet-body {
    flex: 8;
}

.tweet-content {
    font-weight: normal;
}

.tweeter-name {}
.tweet-heading:hover > .tweeter-name {
    text-decoration: underline;
}

.tweeter-id {
    font-weight: normal;
    color: rgb(101, 119, 134);
    margin-left: 5px;
}

.tweet-time {
    font-weight: normal;
    color: rgb(101, 119, 134);
    /* margin-left: 5px; */
}
.tweeter-dot {
    padding-left: 5px;
    padding-right: 5px;
    font-weight: normal;
    color: rgb(101, 119, 134);
}


.tweet-image-wrapper {
    width: 100%;
}

.tweet-image {
    height: 379px;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: 1px solid rgb(204, 214, 221);
}

.tweet-image-desc-wrapper {
    /* padding-top: 5px; */
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 1px solid rgb(204, 214, 221);
    border-top: 0px;
}

.tweet-image-desc {
    padding: 10px;
}

.tweet-image-desc-header {
    font-weight: normal;
}

.tweet-image-desc-content {
    font-weight: normal;
    color: rgb(101, 119, 134);
}

.tweet-image-desc-origin {
    color: rgb(101, 119, 134);
}

.tweet-image-desc-origin>svg {
    width: 1.25em;
    height: 1.25em;
    fill: rgb(101, 119, 134);
}

.action-bar {
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 10px;
}
.action {
    flex: 1;
    /* display: flex; */
    /* line-height: 1.3125px; */
    justify-content: flex-start;
    color: rgb(101, 119, 134); /*light*/ 
}
.action svg, .action .action-number {
    transition: background-color 0.5s ease;
}
.action-cover {
    /* flex: 1; */
    width: fit-content;
    display: flex;
}
.action-icon-wrapper {
    flex: 1;
}
.action-icon-wrapper > svg {
    height: 1.25em;
    padding: 8px;
    border-radius: 9999px;
    fill: rgb(101, 119, 134); /*light*/ 
}
.action-number {
    flex: 1;
    font-size: 13px;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
}
.action-number > span {
    flex: 1;
}

.action:hover svg {
    background-color: rgba(29,161,242,0.1);
    cursor: pointer;
}
.action:hover .action-number {
    color: rgba(29, 161, 242, 1.00);
    cursor: pointer;
}

.action:hover.green svg {
    background-color: #ddf2e7;
    fill: #51dc90;
}
.action:hover.green .action-number {
    color: #51dc90;
}

.action:hover.red svg {
    background-color: #f5dde6;
    fill: #f15d95;
}
.action:hover.red .action-number {
    color: #f15d95;
}


#right-section {
    flex: 2;
    margin-top: 10px;
    margin-right: 10px;
    padding-left: 30px; 
    padding-right: 15px; 
    overflow-y: scroll;
}

#search-box {
    display: flex;
    background-color: rgb(230, 236, 240);
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 9999px;
    margin-bottom: 20px;
}

.mag-glass-wrapper {
    display: flex;
    align-items: center;
}

.mag-glass-wrapper>svg {
    padding-left: 10px;
    min-width: 30px;
    height: 1.25em;
    flex: 1;
    vertical-align: text-bottom;
    display: inline-block;
    vertical-align: text-bottom;
    position: relative;
}

.search-input-box-wrapper {
    flex: 1;
}

#search-input {
    border: none;
    background-color: rgb(230, 236, 240);
    width: 85%;
    padding: 10px 0px 10px 10px;
    border-radius: 9999px;
}

.side-box {
    background-color: rgb(245, 248, 250);
    margin-top: 10px;
    border-radius: 20px;
}

.side-header, .side-footer {
    line-height: 1.3125;
    font-size: 19px;
    padding: 10px 15px 10px 15px;
}
.side-item, .side-header {
    border-bottom-width: 1px;
    border-bottom-color: rgb(230, 236, 240);
    border-bottom-style: solid;
}

.side-item {
    padding: 10px 15px 10px 15px;
    font-size: 15px;
    display: flex;
}
.side-item:hover, .side-footer:hover {
    background-color: #edf0f2;
    cursor: pointer;
}

.side-item-body {
    flex: 3;
    padding-right: 10px;
}
.side-item-body-content {
    padding-top: 5px;
}
.side-item-body-title span {
    padding-right: 5px; 
}
.side-item-image-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
}

.side-item-image {
    border-radius: 12px;
    width: 69px;
    height: 69px;
}
.side-item-body-title {}

.side-footer {
    font-weight: normal;
    font-size: 15px;
    color: rgba(29, 161, 242, 1.00); /*blue*/
    cursor: pointer;
}

.to-follow {
    display: flex;
}

.to-follow-image-wrapper {
    flex: 1;
}

.to-follow-body {
    flex: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.to-follow-content {
    flex: 3;
}

.to-follow-button-wrapper {
    flex: 1;
}

.to-follow-image-wrapper>img {
    width: 47px;
    height: 47px;
}

.to-follow-button {
    color: rgba(29, 161, 242, 1.00);
    border: 1px solid rgba(29, 161, 242, 1.00);
    border-radius: 9999px;
    display: flex;
}

.to-follow-button>span {
    flex: 1;
    text-align: center;
    font-size: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
}
</style>
