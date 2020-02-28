Vue.component('test-box', {
  template: `
    <div class="test-box">
      <button @click="handleOpen()">open</button>
      <div class="box-to-append" ref="box-to-append"></div>
    </div>
  `,
  methods: {
    handleOpen() {
      this.$emit('open', this.$refs['box-to-append']);
    },
  },
});

const testComponentOptions = {
  template: `
    <transition name="test-comp-anim" @after-leave="handleAfterLeave">
      <div class="test-comp" v-show="isShow">
        <div>this is test component.</div>
        <div>
          <button @click="add()">add {{n}}</button>
        </div>
      </div>
    </transition>
  `,
  data() {
    return {
      isShow: false,
      n: 1,
      leaveAnimOver: false,
    };
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
    add() {
      this.n++;
    },
    handleAfterLeave() {
      this.leaveAnimOver = true;
    },
    callToClose() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.isShow = false;
          const unwatch = this.$watch('leaveAnimOver', () => {
            if (unwatch) {
              unwatch();
            }
            resolve();
          });
        }, 2000);
      });
    },
  },
};

new Vue({
  template: `
    <div>
      <div class="title">open component:</div>
      <test-box @open="testOpenComponent($event)"></test-box>
    </div>
  `,
  methods: {
    testOpenComponent(boxToAppend) {
      const Comp = Vue.extend(testComponentOptions);
      const res = openComponent({ appendTo: boxToAppend, component: Comp, callToClose: 'callToClose' });
      console.log(res);
    },
  },
}).$mount('#app');
