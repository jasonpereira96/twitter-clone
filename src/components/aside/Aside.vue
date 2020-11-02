<template>
    <div id='right-section'>
        <div id='search-box'>
            <div class='mag-glass-wrapper'>
                <svg viewBox="0 0 24 24">
                    <g>
                        <path
                            :d="svg.search.path">
                        </path>
                    </g>
                </svg>
            </div>
            <div class='search-input-box-wrapper'>
                <input id='search-input' placeholder="Search Twitter" />
            </div>
        </div>
        <SideBox type="happening" :items="happening"/>
        <SideBox type="follow" :items="follow"/>
    </div>
</template>

<script>
import SideBox from './SideBox';
import {getFollow, getHappening} from './../../api/data';
import svg from './../../constants/svg';

export default {
    data() {
        return {
            follow: getFollow(),
            happening: getHappening(),
            svg
        }
    },
    components: {
        SideBox
    }
};
</script>