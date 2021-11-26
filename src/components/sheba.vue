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
        class="bg-primary-100 rounded-full w-28 h-28 top-1/3 left-1/3 absolute"
      ></div>

      <div
        class="
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
    >
      <div class="flex-1">
        <div class="text-xl py-4">Theme</div>
        <p class="text-base font-Montserrat-Regular">
          The theme section is where you define your color palette, fonts, type
          scale, border sizes, breakpoints — anything related to the visual
          design of your site.
        </p>
      </div>

      <div class="flex-1">
        <img src="../assets/img/tail1.png" class="rounded-lg shadow-lg " />
      </div>
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
        <div class="text-xl py-4">Padding scale</div>
        <p class="text-base font-Montserrat-Regular">
         By default, Tailwind provides 19 fixed padding utilities for each side .
        </p>
      </div>

      <div class="flex-1">
        <img src="../assets/img/tail4.png" class="rounded-lg shadow-lg " />
      </div>
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
        <div class="text-xl py-4 ">
            Margin scale</div>
        <p class="text-base font-Montserrat-Regular">
        By default, Tailwind provides 20 margin utilities for each side .
        </p>
      </div>

      <div class="flex-1">
        <img src="../assets/img/tail4.png" class="rounded-lg shadow-lg " />
      </div>
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
        <div class="text-xl py-4 ">
            Width scale</div>
        <p class="text-base font-Montserrat-Regular">
            By default, Tailwind’s width scale is a combination of the default spacing scale as well as some additional values specific to widths.
        </p>
      </div>

      <div class="flex-1">
        <img src="../assets/img/tail6.png" class="rounded-lg shadow-lg " />
      </div>
    </div>



    
  </div>
</template>







<style>
.tran {
  transform: translate(-50%, -50%);
}
.c {
  text-align: -webkit-center;
}
</style>