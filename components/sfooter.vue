<script setup>
const links = [
  { name: 'GitHub', href: 'https://github.com', icon: 'entypo-social:github-with-circle' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'entypo-social:twitter' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'entypo-social:facebook' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'entypo-social:linkedin-with-circle' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'entypo-social:instagram' }
];
</script>

<template>
  <footer class="bg-gray-900 relative z-0 w-full">
    
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:py-6 text-gray-300 flex flex-col md:flex-row items-center relative z-0 justify-between">
     
      <p class="text-center md:text-left relative z-0 ">&copy; Abdullah Khan. All Rights Reserved</p>

     
      <div class="flex flex-row justify-center gap-4 mt-4 md:mt-0">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          <Icon :name="link.icon" size="1.5rem" class="text-gray-400 hover:text-pink-500 transition-colors duration-200" />
        </a>
      </div>
    </section>
  </footer>
</template>
