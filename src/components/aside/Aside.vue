<template>
    <div id='right-section'>
        <div id='search-box'>
            <div class='mag-glass-wrapper'>
                <svg viewBox="0 0 24 24" class="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-18qmn74 r-1hfyk0a r-bnwqim r-1plcrui r-lrvibr">
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
        <SideBox type="happening" :itemData="follow"/>
        <SideBox type="follow" :itemData="happening"/>
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