<template>
    <div class='side-item to-follow'>
        <div class='to-follow-image-wrapper'>
            <img src='./../assets/train.jpg' class='circle' />
        </div>
        <div class="to-follow-body">
            <div class='to-follow-content'>
                <div class='to-follow-name'>{{itemData.name}}</div>
                <div class='to-follow-id light'>{{itemData.id}}</div>
            </div>
            <div class='to-follow-button-wrapper'>
                <div class='to-follow-button'>
                    <span>Follow</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['itemData']
};
</script>