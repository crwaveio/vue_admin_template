
<template>
<div>
    <side-bar>

        <slot></slot>
    </side-bar>
</div>

</template>

<script>
import SideBar from "./Sidebar/SideBar";

export default {
    name: "BasePage",
    components: {
        SideBar
    }
}
</script>

<style scoped>

</style>
