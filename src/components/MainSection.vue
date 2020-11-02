<template>
    <main>
        <div id='center-section'>
            <div id='heading'>Home</div>
            <TweetBox />
            <div id='tweets'>
                <Tweet v-for="tweet in tweets" :key="tweet.id" :tweetData="tweet"/>
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
        Aside
    }
};
</script>