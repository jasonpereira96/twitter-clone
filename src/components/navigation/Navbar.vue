<template>
<header>
        <div id='header-icon-wrapper'>
            <svg viewBox="0 0 24 24">
                <g>
                    <path
                        :d="svg.twitter.path">
                    </path>
                </g>
            </svg>
        </div>
        <div class='nav-wrapper'>
            <nav>
                <NavItem v-for="(nav, index) in navs" :itemId="nav" :key="nav" :active="index === 0"/>
            </nav>
            <div id='tweet-button-wrapper'>
                <div id='tweet-button' class='button-hover'>
                    <span>Tweet</span>
                </div>
            </div>
        </div>
        <UserInfo/>
    </header>
</template>

<script>
import svg from './../../constants/svg';
import NavItem from './NavItem';
import UserInfo from './UserInfo';

export default {
    data() {
        return {
            svg,
            navs: [
                'home',
                'explore',
                'notifications',
                'messages',
                'bookmarks',
                'lists',
                'profile',
                'more'
            ]
        };
    },
    components: {
        NavItem, UserInfo
    }
};
</script>