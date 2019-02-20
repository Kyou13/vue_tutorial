  Vue.component('my-component', {
    template: '<p>{{ message }}</p>',
    // dataはオブジェクトを返す関数
    data: function(){
      return {
        message: 'Hello Vue.js'
      }
    }
  })
  Vue.component('comp-child', {
    template: '<p>{{ val }}</p>',
    props: {'val': String}
  })
  Vue.component('idclass-marge-child',{
    template: '<p id="child" class="child">ChildComponent</p>'
  })
  Vue.component('for-child',{
    template: '<li>{{ id }}{{ name }}{{ price }}</li>',
    props: ['id', 'name', 'price']
  })
  Vue.component('child-event',{
    template: '<button v-on:click="handleClick">イベント発火</button>',
    methods: {
      handleClick: function(){
        this.$emit('childs-event')
      }
    }
  })
  // 親が持つデータを操作
  Vue.component('child-attack', {
    template: '<li>{{ id }}{{ name }}{{ price }}<button v-on:click="doAttack"">攻撃</button></li>',
    props: ['id', 'name', 'price'],
    methods: {
      doAttack: function(){
        // this.price -= 10 // ダメ
        this.$emit("attack", this.id)
      }
    }
  })
  Vue.component('slot-child',{
    template: '<div>ここにスロット埋め込む -> <slot name="header"></slot></div>'
  })
  Vue.component('my-calendar',{
    data: function(){
      return {
        message: 'Hello Vue.js'
      }
    }
  })
  Vue.component('my-label',{
    template: '<div>{{ count }}</div>',
    props: ['count']
  })
  var myComponent={
      template: '<p>MyComponent</p>'
  }
  new Vue({
    el: '#app',
    data: {
      message: {
        value: 'Vue.js!'
      },
      deng: 'Form cannot be submitted yet.',
      count: 0,
      isChild: true,
      isActive: true,
      classObject: {
        child: true,
        'is-active': true
      },
      item: {
        height: 100,
        width: 100,
      },
      ok: true,
      cval: true,
      rval: '',
      sval: [],
      width: 700,
      budget: 300,
      limit: 2,
      list: [
        { id: 1, name: 'りんご', price: 100, show: true },
        { id: 2, name: 'ばなな', price: 200, show: true },
        { id: 3, name: 'いちご', price: 400, show: true },
        { id: 4, name: 'おれんじ', price: 300, show: true },
        { id: 5, name: 'めろん', price: 500, show: true }
      ],
      oldVal: "old",
      newVal: "new",
      price: 19800,
      video1: false,
      show: true,
      order: true
    },
    directives: {
      video(el, binding){
        console.log(binding)
        binding.value ? el.play() : el.pause()
      }
    },
    methods: {
      increment: function(){
        setTimeout(() => { this.count++ }, 100)
      },
      incrementlist: function(){
        this.list[0].id += 1
      },
      doRemove: function(index){
        this.list.splice(index, 1)
      },
      doFilter: function(){
        this.list = this.list.filter(function(el){
          return el.id >= 2
        })
      },
      doFilterTransition: function(){
        this.list[0].show = false
      },
// preventDefault()はキャンセル可能なときキャンセルする
      warn: function (message, event) {
        if (event){
          event.preventDefault()
          alert(message)
        }
      },
      handleInput: function(event){
        this.message.value = event.target.value
      },
      handler: function(comment){
        console.log(comment)
      },
      methodHalfWidth: function(){
        return this.width / 2
      },
      parentsMethod: function(){
        alert('イベントをキャッチ')
      },
      handleAttack: function(id) {
        var item = this.list.find(function(el){
          return el.id == id
        })
        if (item !== undefined && item.price > 0) item.price -= 10
      },
      enter: function(el, done) {
      console.log('enter')
      setTimeout(done, 1000) // 1秒後にenterを終了してafter-enterに遷移
      },
      afterEnter: function(el) {
      console.log('afterEnter')
      }
    },
    computed: {
      halfWidth: {
        get: function(){ return this.width / 2},
        set: function(val){ this.width = val * 2},
      },
      matched: function() {
        return this.list.filter(function(el) {
          return el.price <= this.budget
        }, this)
      },
      limited: function() {
        return this.matched.slice(0, this.limit)
      },
      sortedList: function() {
        return _.orderBy(this.list, 'price', this.order ? 'desc' :'asc')
      }
    },
    // Sec17
    watch: {
      watchTest: function(newVal, oldVal){
        this.newVal = newVal
        this.oldVal = oldVal
      }
    },
    filters: {
      localNum: function(val){
        return val.toLocaleString()
      },
      localPlus: function(val){
        return val + 10
      }
    },
    components: {
      'my-component2': myComponent
    }
  })
