<template>
    <div class='tweet'>
        <div class='tweet-side'>
            <img src='./../assets/train.jpg' />
        </div>
        <div class='tweet-body'>
            <div class='tweet-heading'>
                <span class='tweeter-name'>{{tweet.tweeter.name}}</span>
                <span class='official-wrapper'><SvgBase name='official' class='official-svg'/></span>
                <span class='tweeter-id'>{{tweet.tweeter.id}}</span>
                <span class='tweeter-dot'>.</span>
                <span class='tweet-time'>{{tweet.tweeter.time}}</span>
            </div>
            <div class='tweet-content'>
                <p>
                    {{tweet.content}}
                </p>
                <div class='tweet-image-wrapper' v-if="tweet.image">
                    <img class='tweet-image' :src="tweet.image.src" />
                    <div class='tweet-image-desc-wrapper'>
                        <div class='tweet-image-desc'>
                            <div class='tweet-image-desc-header'>
                                {{tweet.image.descHeader}}
                            </div>
                            <div class='tweet-image-desc-content'>
                                {{tweet.image.descContent}}
                            </div>
                            <div class='tweet-image-desc-origin'>
                                <SvgBase name='origin' /> {{tweet.image.descOrigin}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class='action-bar'>
                    <div class='action'>
                        <div class='action-cover'>
                            <div class='action-icon-wrapper'>
                                <SvgBase name='reply' />
                            </div>
                            <div class='action-number'><span>14.1K</span></div>
                        </div>
                    </div>
                    <div class='action green'>
                        <div class='action-cover'>
                            <div class='action-icon-wrapper'>
                                <SvgBase name='comment'/>
                            </div>
                            <div class='action-number'><span>14.1K</span></div>
                        </div>
                    </div>
                    <div class='action red'>
                        <div class='action-cover'>
                            <div class='action-icon-wrapper'>
                                <SvgBase name='heart'/>
                            </div>
                            <div class='action-number'><span>14.1K</span></div>
                        </div>
                    </div>
                    <div class='action'>
                        <div class='action-cover'>
                            <div class='action-icon-wrapper'>
                                <SvgBase name='send' />
                            </div>
                            <div class='action-number'><span>14.1K</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SvgBase from './icons/SvgBase';

export default {
    props: [
        'tweetData'
    ],
    data() {
        return {
            tweet: this.tweetData
        };
    },
    components: {
        SvgBase
    }
}
</script>