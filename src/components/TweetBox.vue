<template>
    <div id='tweet-box'>
        <div id='avatar-wrapper'></div>
        <div id='input-wrapper'>
            <textarea placeholder="What's happening?"></textarea>
            <div id='tweet-box-bar'>
                <svg viewBox="0 0 24 24" v-for="icon in icons" :key="icon.name">
                    <g>
                        <path :d="icon.path" />        
                    </g>
                </svg>
                <span class='empty'></span>
                <span class='tweet-button-small'>Tweet</span>
            </div>
        </div>
    </div>
</template>

<script>
import svg from './../constants/svg';

export default {
    data() {
        let icons = [
            'image',
            'gif',
            'poll',
            'emoji',
            'schedule'
        ];
        return {
            icons: icons.map(icon => {
                return {
                    name: icon,
                    path: svg[icon].path
                };
            })
        };
    }
}
</script>