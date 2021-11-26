<template>
  <div
    class="
      px-4
      py-12
      md:mx-12
      lg:mx-40
      2xl:mx-80
      overflow-hidden
      bg-primary-100
    "
  >
    <div class="c relative">
      <div class="bg-white rounded-full w-72 h-72 relative shadow-md">
        <p class="top-1/2 left-1/2 absolute tran font-Montserrat-Bold text-lg">
          customize
        </p>
      </div>

      <div
        class="bg-primary-100 rounded-full w-28 h-28 top-1/3 left-1/3  absolute    sm:block
        md:block  md:w-28 md:h-28
          hidden"
      ></div>

      <div
        class="
        sm:block
        md:block
          hidden
          bg-white
          rounded-full
          w-24
          h-24
          top-28
          left-1/4
          absolute
          shadow-md
        "
      ></div>

      <div
        class="
           sm:block
        md:block
          hidden
          bg-white
          rounded-full
          w-16
          h-16
          top-32
          left-28
          absolute
          shadow-md
        "
      ></div>

      <div
        class="
           sm:block
        md:block
          hidden
          bg-white
          rounded-full
          w-24
          h-24
          top-28
          right-1/4
          absolute
          shadow-md
        "
      ></div>

      <div
        class="
           sm:block
        md:block
          hidden
          bg-white
          rounded-full
          w-16
          h-16
          top-32
          right-28
          absolute
          shadow-md
        "
      ></div>
    </div>

    <div
      class="
        c
        w-full
        my-12
        p-12
        bg-white
        shadow-sm
        rounded
        flex
        lg:flex-row
        md:flex-col
        flex-col
        sm:flex-col
      "
      v-for="i in sections" :key="i"
    >
      <div class="flex-1" >
        <div class="text-xl py-4">{{i.title}}</div>
        <p class="text-base font-Montserrat-Regular">
            {{i.para}}
        
        </p>
      </div>

      <div class="flex-1">
        <img src="../assets/img/tail1.png" class="rounded-lg shadow-lg " />
      </div>
    </div>




     <div class="c relative">
      <div class="bg-white rounded-full w-72 h-72 relative shadow-md">
        <p class="top-1/2 left-1/2 absolute tran font-Montserrat-Bold text-lg">
          Tailwind & UI
        </p>
      </div>

      <div
        class="bg-primary-100 rounded-full w-28 h-28 top-1/3 left-1/3  absolute    sm:block
        md:block  md:w-28 md:h-28
          hidden"
      ></div>

      <div
        class="
        sm:block
        md:block
          hidden
          bg-white
          rounded-full
          w-24
          h-24
          top-28
          left-1/4
          absolute
          shadow-md
        "
      ></div>

      <div
        class="
           sm:block
        md:block
          hidden
          bg-white
          rounded-full
          w-16
          h-16
          top-32
          left-28
          absolute
          shadow-md
        "
      ></div>

      <div
        class="
           sm:block
        md:block
          hidden
          bg-white
          rounded-full
          w-24
          h-24
          top-28
          right-1/4
          absolute
          shadow-md
        "
      ></div>

      <div
        class="
           sm:block
        md:block
          hidden
          bg-white
          rounded-full
          w-16
          h-16
          top-32
          right-28
          absolute
          shadow-md
        "
      ></div>
    </div>


<div class="    c
        w-full
        my-12
        p-12
        bg-white
        shadow-sm
        rounded"
        v-for="n in section2" :key="n">
    <p class="text-xl font-extrabold text-center">{{n.title}}</p>
    <img :src="n.images" />
</div>


    
          <div
      class="
        c
        w-full
        my-12
        p-12
        bg-white
        shadow-sm
        rounded
        flex
        lg:flex-row
        md:flex-col
        flex-col
        sm:flex-col
      "
    >
      <div class="flex-1">
        <div class="text-xl  ">
            UI </div>
       
        <img src="../assets/img/tail7.png" class="rounded-lg shadow-lg " />
      </div>

      <div class="flex-1">
           <div class="text-xl  ">
            Tailwind CSS</div>
        <img src="../assets/img/tail8.png" class="rounded-lg shadow-lg " />
      </div>
    </div>


    <div class="   c 
        w-full
        my-12
        p-12
        bg-white
        shadow-sm
        rounded">
    <p class="text-xl font-extrabold text-center">Spacing</p>
    <img src="../assets/img/tail9.png" />
</div>


  </div>
</template>




<script>
import img1 from "../assets/img/swatches-04.png"
import img2 from "../assets/img/ui-design-mistakes-7.jpg"

export default {
    data(){
        return{
            sections:[
                {title:'Theme',
                para:'  The theme section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.'},
             {title:'Padding scale',
                para:'  By default, Tailwind provides 19 fixed padding utilities for each side .'},
             {title:'Margin scale',
                para:' By default, Tailwind provides 20 margin utilities for each side .'},
             {title:'Width scale',
                para:' By default, Tailwind’s width scale is a combination of the default spacing scale as well as some additional values specific to widths.'},
           
           ],
           section2:[
               {title:'Colors', images:img1},
               {title:'How to?', images:img2},
               
           ]
        }
    }
}
</script>



<style>
.tran {
  transform: translate(-50%, -50%);
}
.c {
  text-align: -webkit-center;
}
</style>