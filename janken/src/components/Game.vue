<template>
  <div>
    <div v-if="resultMessage">
      <h2>{{resultMessage}}</h2>

      <h3 v-show="miss">これは{{resultDesc}}だよ!</h3>
      <button class="subBtn" @click="start">もう一度！</button>
    </div>
    <div class="imgArea">
      <img v-bind:src="srcList[srcNum]">
    </div>
    <ul class="btnWrapper">
      <li>
        <button class="btn janken" @click="onSelected" value="0">吉田</button>
      </li>
      <li>
        <button class="btn janken" @click="onSelected" value="1">大滝</button>
      </li>
      <li>
        <button class="btn janken" @click="onSelected" value="2">こたっぷ</button>
      </li>
    </ul>
    <div class="logo">
      made with <img src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'game',
    props: {
      'pushScore': {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        srcNum: 0,
        srcList: [
          require('../assets/janken/yoshida.png'),
          require('../assets/janken/otaki.png'),
          require('../assets/janken/kotap.png')
        ],
        name: [
          '吉田',
          '大滝',
          'こたっぷ'
        ],
        timer: null,
        resultMessage: '',
        resultDesc: '',
        miss: ''
      };
    },
    created() {
      this.start()
    },
    methods: {
      changeSrcNum() {
        this.srcNum++;
        this.srcNum = this.srcNum % 3;
      },
      start() {
        this.reset();
        this.timer = setInterval(() => {
          this.changeSrcNum();
      }, 600);
      },
      reset() {
        this.resultMessage = '';
        this.timer = null;
        this.resetBtnClass();
      },
      resetBtnClass() {
        const btns = document.querySelectorAll('.btn');
        for (let btn of btns) {
          btn.removeAttribute('disabled');
          btn.classList.remove('selectedBtn');
        }
      },
      stop() {
        clearInterval(this.timer);
      },
      onSelected (e) {
        const clickedBtn = e.target
        this.stop()
        this.judgeGame(+clickedBtn.value, this.srcNum)// 文字列->数値
        this.pushScore({ msg: this.resultMessage })
        // ボタンを無効化
        this.changeToNoActiveBtn()
        clickedBtn.classList.add('selectedBtn')
      },
      judgeGame (val, _srcNum) {
        switch (_srcNum) {
          case val:
            this.resultMessage = '正解!';
            this.miss = false;
            break;

          default:
            this.resultMessage = '残念..';
            this.resultDesc = this.name[_srcNum];
            this.miss = true;
            break;
        }
      },
      changeToNoActiveBtn () {
        // elementをリストで取得
        const btns = document.querySelectorAll(`.btn`)
        for (let btn of btns) {
          btn.setAttribute('disabled', true)
        }
      }
    }
  }
</script>

<style scoped>
  .btnWrapper {
    display: flex;
    justify-content: center;
  }
  .btnWrapper > li + li {
    margin-left: 24px;
  }
  .imgArea {
    position: relative;
    width: 300px;
    height: 300px;
    text-align: center;
    margin: 0 auto;
  }
  .imgArea img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 210px;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .logo img{
    width: 20px;
    position: absolute;
  }
</style>
