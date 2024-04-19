<template>
    <div>
        <h1>Hello World! Welcome to Nuxt 3 and Capacitor!</h1>
        <button @click="share">Example share button!</button>
    </div>
</template>

<script setup lang="ts">
import { Share } from '@capacitor/share';

async function share() {
    await Share.share({
        title: 'Open Youtube',
        text: 'Check new video on youtube',
        url: 'https://www.youtube.com',
        dialogTitle: 'Share with friends'
    });
}
</script>