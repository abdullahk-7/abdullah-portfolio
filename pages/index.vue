<script setup>
</script>
<template>
  <!-- Section 1: Header and Paragraph -->
  <section class="relative">
    <h1 class="header-text relative z-10">Abdullah Khan</h1>
    <p class="subheader-text relative z-10">Android App Developer</p>
  </section>

  <!-- Section 2: Biography and Image -->
  <section class="flex flex-col md:flex-row justify-center items-center">
    <div class="bio-text md:w-3/4">
      <h2 class="text-3xl font-bold mt-8 text-white">My Biography</h2>
      <p class="text-lg py-2 text-pink-500">I am a computer engineer</p>
      <p class="text-lg py-2 text-pink-500">I have been writing something and doing all kinds of this stuff</p>
      <p class="text-lg py-2 text-pink-500">In my personal life, I have done a lot</p>
    </div>
    <img src="~/assets/images/check.jpeg" class="bio-image w-1/2 md:max-w-sm p-8 mx-auto"/>
  </section>

  <!-- Section 3: Latest Blog Post -->
  <section>
    <h2 class="latest-blog-header text-3xl font-bold mt-8 text-pink-500">Latest Blog Post</h2>
  </section>

  <!-- Full-Screen Background Video -->
  <video autoplay loop muted playsinline class="fixed inset-0 w-full h-full object-cover z-0">
    <source src="~/assets/videos/video1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<!-- CSS -->
<style scoped>
/* Header Text */
.header-text {
  font-size: 3rem;
  font-weight: bold;
  color: #D3D3D3   ;
  position: relative;
  font-family: 'Source Code Pro', monospace;
  top: 250px;
  left: 750px;
}

/* Subheader Text */
.subheader-text {
  font-size: 1rem;
  color: #D3D3D3 ;
  font-style: italic;
  position: absolute;
  font-family: 'Source Code Pro', monospace;
  top: 310px;
  right: 260px;
}

/* Biography Text */
.bio-text {
  color: #ec4899; /* Pink color */
  font-size: 1.125rem;
}

/* Image Styling */
.bio-image {
  max-width: 100%;
  display: block;
  margin: 20px auto;
}

/* Latest Blog Post Header */
.latest-blog-header {
  font-size: 2rem;
  font-weight: bold;
  color: #ec4899; /* Pink color */
  margin-top: 40px;
}

/* Flex Layout for Biography Section */
.flex {
  display: flex;
}

.md\:flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}
</style>