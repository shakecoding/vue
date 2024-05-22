<template>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
        <span class="navbar-brand">이날치(LeeNalChi)</span>

        <div class="navClass">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">홈</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">소개</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/members">멤버</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/videos">영상</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {

}
</script>