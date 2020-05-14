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
  name: 'test',
  template: `
    <transition name="test-comp-anim" @after-leave="handleAfterLeave">
      <div class="test-comp" v-show="isShow">
        <div>this is test component.</div>
        <div>
          <button @click="add()">add {{n}}</button>
          <button @click="close()">close</button>
        </div>
      </div>
    </transition>
  `,
  data() {
    return {
      isShow: false,
      n: 1,
    };
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
    add() {
      this.n++;
    },
    close() {
      this.isShow = false;
    },
    handleAfterLeave() {
      this.$emit('afterLeave');
    },
  },
};

new Vue({
  template: `
    <div>
      <div>
        <div class="title">open component instance:</div>
        <test-box @open="testOpenComponentInstance($event)"></test-box>
      </div>
      <div>
        <div class="title">open component:</div>
        <test-box @open="testOpenComponent($event)"></test-box>
      </div>
      <div>
        <div class="title">open component options:</div>
        <test-box @open="testOpenComponentOptions($event)"></test-box>
      </div>
    </div>
  `,
  methods: {
    testOpenComponentInstance(boxToAppend) {
      const Component = Vue.extend({ ...testComponentOptions });
      const instance = new Component({ el: document.createElement('div') });
      const res = window.vueOpen.open({ appendTo: boxToAppend, toOpen: instance });
      res.instance.$on('afterLeave', () => {
        res.close();
        res.instance.$destroy();
      });
    },
    testOpenComponent(boxToAppend) {
      const Component = Vue.extend({ ...testComponentOptions });
      const res = window.vueOpen.open({ appendTo: boxToAppend, toOpen: Component });
      res.instance.$on('afterLeave', () => {
        res.close();
      });
    },
    testOpenComponentOptions(boxToAppend) {
      const res = window.vueOpen.open({ appendTo: boxToAppend, toOpen: testComponentOptions });
      res.instance.$on('afterLeave', () => {
        res.close();
      });
    },
  },
}).$mount('#app');
