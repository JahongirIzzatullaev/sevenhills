<template>
  <div class="app">
    <home-slider/>
    <div class="container mx-auto">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at consectetur dolor dolore, dolores ducimus
        ipsa ipsum nihil non omnis quidem rem tenetur! Autem culpa dignissimos facilis laudantium magnam, tenetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at consectetur dolor dolore, dolores ducimus
        ipsa ipsum nihil non omnis quidem rem tenetur! Autem culpa dignissimos facilis laudantium magnam, tenetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at consectetur dolor dolore, dolores ducimus
        ipsa ipsum nihil non omnis quidem rem tenetur! Autem culpa dignissimos facilis laudantium magnam, tenetur.
      </p>
      <div
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        123123 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium magnam maiores nihil pariatur
        provident voluptate.
      </div>
      <div data-aos="fade-in">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloremque earum esse et laudantium nam
        nesciunt quas quis? At, fuga, voluptate. Atque eum odit praesentium quod soluta! Blanditiis deserunt dicta
        dignissimos dolor, dolorem doloremque ducimus expedita fugit nostrum, pariatur rerum sapiente! Ab ad at
        blanditiis culpa delectus dignissimos distinctio, earum enim facilis ipsum maxime molestiae molestias nam natus
        nesciunt optio perspiciatis quae qui recusandae rem sapiente similique tempora tempore velit voluptate?
        Consequuntur, similique ut? Ab accusamus accusantium ad aliquam atque beatae blanditiis consequatur ducimus
        eligendi enim eum ex fugiat id iusto maiores minus nisi officiis pariatur quae quaerat quas repellendus sequi,
        tenetur veritatis vero vitae voluptas! Ab deserunt dolores expedita facere mollitia odit officia porro quam
        tempora! Atque commodi corporis dolor dolore eaque earum error et eveniet explicabo facere facilis hic incidunt
        laborum laudantium libero nisi nostrum, numquam quia quibusdam sapiente. Animi dolorem hic id ipsa quaerat, quia
        totam ut.
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeSlider from "~/components/slider/HomeSlider.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {HomeSlider},
})
</script>

