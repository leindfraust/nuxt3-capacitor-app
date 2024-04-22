<script setup lang="ts">
import {
    Page,
    Navbar,
    Block,
    Button,
    List,
    ListItem,
    Link,
    BlockTitle,
} from "konsta/vue";
</script>
<template>
    <Page>
        <Navbar title="My App" />

        <Block strong>
            <p>
                Here is your Nuxt 3 & Konsta UI app. Let's see what we have
                here.
            </p>
        </Block>
        <BlockTitle>Navigation</BlockTitle>
        <List>
            <ListItem href="/about/" title="About" />
            <ListItem href="/form/" title="Form" />
        </List>

        <Block strong class="flex space-x-4">
            <Button>Button 1</Button>
            <Button>Button 2</Button>
        </Block>
    </Page>
</template>
