<template>
    <main>
        <div id='center-section'>
            <div id='heading'>
                <div id='home'>Home</div>
                <div id='sparkle-wrapper' class='blue-hover'>
                    <SvgBase name='sparkle'/>
                </div>
            </div>
            <TweetBox />
            <div class='breaker'></div>
            <div id='tweets'>
                <div class='tweet-wrapper' v-for="tweet in tweets" :key="tweet.id">
                    <Tweet :tweetData="tweet" :key="tweet.id"/>
                </div>
            </div>
        </div>
        <Aside /> 
    </main>
</template>

<script>
import TweetBox from './TweetBox';
import Tweet from './Tweet.vue';
import Aside from './aside/Aside';
import { getTweets } from './../api/data';
import SvgBase from './icons/SvgBase';

export default {
    data() {
        return {
            tweets: []
        }
    },
    mounted() {
        getTweets().then(data => {
            this.tweets = data.tweets
        });
    },
    components: {
        TweetBox, 
        Tweet,
        Aside,
        SvgBase
    }
};
</script>