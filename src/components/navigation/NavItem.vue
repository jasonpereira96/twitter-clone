<template>
    <div :class="active ? 'nav-item active' : 'nav-item'">
        <div class='nav-item-cover'>
            <div class='nav-item-cover2'>
                <div class="nav-svg-wrapper">
                    <SvgBase :name="itemId" class="nav-item-svg"/>
                </div>
                <div class='nav-item-text'>
                    <span>{{itemTitle}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SvgBase from './../icons/SvgBase';

export default {
    props: [
        'itemId',
        'active'
    ],

    computed: {
        itemTitle() {
            return this.itemId.charAt(0).toUpperCase() + this.itemId.slice(1);
        }
    },
    components: {
        SvgBase
    }
}
</script>