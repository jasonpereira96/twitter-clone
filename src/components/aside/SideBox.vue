<template>
    <section class='side-box'>
        <div class='side-header'>
            What's happening
        </div>
        <div v-if="type === 'happening'">
            <HappeningItem v-for="(item, index) in items" :data="item" :key="index"/>
        </div>
        <div v-else>
            <FollowItem v-for="(item, index) in items" :data="item" :key="index"/>
        </div>
        <div class='side-footer'>
            Show more
        </div>
    </section>
</template>

<script>
import HappeningItem from './items/HappeningItem';
import FollowItem from './items/FollowItem';
export default {
    props: [
        'items',
        'type'
    ],
    components: {
        HappeningItem,
        FollowItem
    }
};
</script>