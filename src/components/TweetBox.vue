<template>
    <div id='tweet-box'>
        <div id='avatar-wrapper'>
            <img src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' class='circle'/>
        </div>
        <div id='input-wrapper'>
            <textarea placeholder="What's happening?"></textarea>
            <div id='tweet-box-bar'>
                <div class='tweet-box-svg-wrapper'>
                    <SvgBase v-for="icon in icons" :name="icon.name" :key="icon.name" class='blue-hover'/>
                </div>
                <span class='empty'></span>
                <span class='tweet-button-small button-hover'>Tweet</span>
            </div>
        </div>
    </div>
</template>

<script>
import SvgBase from './icons/SvgBase';

export default {
    data() {
        let icons = [
            'image_icon',
            'gif',
            'poll',
            'emoji',
            'schedule'
        ];
        return {
            icons: icons.map(icon => {
                return {
                    name: icon,
                };
            })
        };
    },
    components: {
        SvgBase
    }
}
</script>