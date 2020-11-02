<template>
    <div class="nav-item">
        <div class="nav-svg-wrapper">
            <svg viewBox="0 0 24 24">
                <g>
                    <path
                        :d="path">
                    </path>
                </g>
            </svg>
        </div>
        <div class='nav-item-text'>
            <span>{{itemTitle}}</span>
        </div>
    </div>
</template>

<script>
import svg from './../../constants/svg';
export default {
    props: [
        'itemId'
    ],
    data() {
        return {
            path: svg[this.itemId].path,
        };
    },
    computed: {
        itemTitle() {
            return this.itemId.charAt(0).toUpperCase() + this.itemId.slice(1);
        }
    }
}
</script>