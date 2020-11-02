<template>
    <div class='side-item'>
        <div class='side-item-body'>
            <div class='side-item-body-title light'>
                <span>{{itemData.title}}</span>
                <span>.</span>
                <span>{{itemData.time}}</span>
            </div>
            <div class='side-item-body-content'>
                {{itemData.content}}
            </div>
        </div>
        <div class='side-item-image-wrapper'>
            <img class='side-item-image' src='./../../../assets/train.jpg' />
        </div>
    </div>
</template>


<script>
export default {
    props: ['itemData']
};
</script>