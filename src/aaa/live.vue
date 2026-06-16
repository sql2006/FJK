<template>
    <div class="page-container">
        <h1>百变小范</h1>
        
        <button class="btn" @click="flag1 = !flag1">大中小范</button>
        <!-- 第一组：图片横向排列，文字在图片正上方 -->
        <div class="image-row" v-if="flag1">
            <div class="image-item">
                <h3 class="item-title">小小宝宝范</h3>
                <img src="/src/assets/bb.png" width="300">
            </div>
            <div class="image-item">
                <h3 class="item-title">小宝宝范</h3>
                <img src="/src/assets/18bb.png" width="300">
            </div>
            <div class="image-item">
                <h3 class="item-title">大宝宝范</h3>
                <img src="/src/assets/1.png" width="300">
            </div>
        </div>

        <button class="btn" @click="flag2 = !flag2">小狗小范</button>
        <!-- 第二组：图片横向排列，文字在图片正上方 -->
        <div class="image-row" v-if="flag2">
            <div class="image-item">
                <h3 class="item-title">小狗耍赖</h3>
                <img src="/src/assets/wlnqn.png" width="300">
            </div>
            <div class="image-item">
                <h3 class="item-title">小狗卖萌</h3>
                <img src="/src/assets/cute.png" width="300">
            </div>
            <div class="image-item">
                <h3 class="item-title">小狗小气</h3>
                <img src="/src/assets/find.png" width="300">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const flag1 = ref(false)
const flag2 = ref(false)
</script>

<style scoped>
.page-container {
    padding: 20px;
}

/* 核心：整行横向排列 */
.image-row {
    display: flex;           /* 横向排列 */
    gap: 30px;               /* 每组之间的间距 */
    margin: 20px 0;
    flex-wrap: wrap;         /* 屏幕小自动换行 */
}

/* 单个图文单元（上下结构） */
.image-item {
    display: flex;
    flex-direction: column;  /* 上下排列：文字在上，图片在下 */
    align-items: center;     /* 文字和图片都居中 */
}

/* 文字在图片正上方 */
.item-title {
    text-align: center;
    margin-bottom: 12px;     /* 文字和图片之间的距离 */
    color: #333;
}

.image-item img {
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    height: 300px;
    object-fit: cover;
}

.btn{
    width: 130px;
    height: 40px;
    font-size: 18px;
    background-color: #ffc9c9;
    border-radius: 5px;
    border: none;
    margin-bottom: 6px;
    cursor: pointer;
}

h1{
    background-color: #ffc9c9;
    padding: 50px 30px;
    margin-top: 0;
}
</style>