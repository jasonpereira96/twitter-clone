<template>
    <div id='user-info'>
        <div class='user-info-image-wrapper'>
            <img src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' class='circle' />
        </div>
        <div class='user-info-body'>
            <div class='user-info-name'>Jason</div>
            <div class='user-info-id light'>@Jason12345</div>
        </div>
        <div class='user-info-arrow-wrapper'>
            <svg viewBox="0 0 24 24">
                <g>
                    <path :d="arrow"></path>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
import svg from './../../constants/svg';
export default {
    data() {
        return {
            arrow: svg.arrow.path
        };
    }
}
</script>