<template>
    <component :is="name">
    </component>
</template>

<script>
import bookmarks from './bookmarks';
import comment from './comment';
import emoji from './emoji';
import explore from './explore';
import gif from './gif';
import heart from './heart';
import home from './home';
import image_icon from './image_icon';
import lists from './lists';
import messages from './messages';
import more from './more';
import notifications from './notifications';
import poll from './poll';
import profile from './profile';
import reply from './reply';
import schedule from './schedule';
import send from './send';
import origin from './origin';
import sparkle from './sparkle';
import official from './official';

export default {
    props: ['name'],
    components: {
        bookmarks,
        comment,
        emoji,
        explore,
        gif,
        heart,
        home,
        image_icon,
        lists,
        messages,
        more,
        notifications,
        poll,
        profile,
        reply,
        schedule,
        send,
        origin,
        sparkle,
        official
    }
};
</script>