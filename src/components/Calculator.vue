<template lang="pug">
  .calculator
    .calculator__container
      .display
          .display-numbers {{current||'0'}}
      .keyboard
        .keyboard-row
          button.keyboard-key.keyboard-key--gray(@click="clearDisplay()") AC
          button.keyboard-key.keyboard-key--gray(@click="changeSign()") #[span +/-]
          button.keyboard-key.keyboard-key--gray(@click="convertPercent()") %
          button.keyboard-key.keyboard-key--orange(@click="division()") ÷
        .keyboard-row
          button.keyboard-key.keyboard-key--white(@click="appendSymbol('7')") 7
          button.keyboard-key.keyboard-key--white(@click="appendSymbol('8')") 8
          button.keyboard-key.keyboard-key--white(@click="appendSymbol('9')") 9
          button.keyboard-key.keyboard-key--orange(@click="multiplication()") ×
        .keyboard-row
          button.keyboard-key.keyboard-key--white(@click="appendSymbol('4')") 4
          button.keyboard-key.keyboard-key--white(@click="appendSymbol('5')") 5
          button.keyboard-key.keyboard-key--white(@click="appendSymbol('6')") 6
          button.keyboard-key.keyboard-key--orange(@click="subtraction()") −
        .keyboard-row
          button.keyboard-key.keyboard-key--white(@click="appendSymbol('1')") 1
          button.keyboard-key.keyboard-key--white(@click="appendSymbol('2')") 2
          button.keyboard-key.keyboard-key--white(@click="appendSymbol('3')") 3
          button.keyboard-key.keyboard-key--orange(@click="addition()") +
        .keyboard-row
          button.keyboard-key.keyboard-key--white.keyboard-key--double(@click="appendSymbol('0')") 0
          button.keyboard-key.keyboard-key--white(@click="convertFloat()") .
          button.keyboard-key.keyboard-key--orange(@click="equal()") =

</template>
<script>
export default {
  data () {
    return {
      current: '',
      previous: null,
      operator: null,
      clickedOperator: null
    }
  },
  methods: {
    clearDisplay () {
      this.current = ''
    },
    appendSymbol (number) {
      if (this.clickedOperator) {
        this.current = ''
        this.clickedOperator = false
      }
      this.current = `${this.current}${number}`
    },
    changeSign () {
      this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`
    },
    convertPercent () {
      this.current = `${parseFloat(this.current) / 100}`
    },
    convertFloat () {
      if (this.current.indexOf('.') === -1) {
        this.appendSymbol('.')
      }
    },
    setPrevious () {
      this.previous = this.current
      this.clickedOperator = true
    },
    addition () {
      this.operator = (a, b) => a + b
      this.setPrevious()
    },
    multiplication () {
      this.operator = (a, b) => a * b
      this.setPrevious()
    },
    division () {
      this.operator = (a, b) => a / b
      this.setPrevious()
    },
    subtraction () {
      this.operator = (a, b) => a - b
      this.setPrevious()
    },
    equal () {
      this.current = `${this.operator(parseFloat(this.current), parseFloat(this.previous))}`
      this.previous = null
    }
  }
}
</script>
<style lang="scss">
@import "@/sass/app.scss";
  .calculator{
    margin: 2rem 0;
    &__container{
      width: 100%;
      padding: 1rem;
      border-radius: 36px;
      background: var(--background-calculator);
      @include screen(mobile-big){
        width: 375px;
        display: block;
        margin: 0 auto;
      }
      .display{
        padding: 2rem;
        &-numbers{
          font-size: 4rem;
          color: var(--key);
          text-align: right;
        }
      }
      .keyboard{
        &-row{
          display: flex;
          justify-content: center;
          flex-direction: row;
          align-items: space-around;
        }
        &-key{
          display: flex;
          justify-content: center;
          align-items: center;
          appearance: none;
          margin: .5rem .5rem;
          width: 65.9px;
          min-width: 65.9px;
          padding: 1.24rem 0.91rem ;
          border-radius: 1rem;
          @extend .box-shadow;
          background-color: var(--background-calculator);
          font-size: 2rem;
          &:active{
            @extend .pressed;
          }
          span{
            font-size: 1.7rem;
          }
          &--double{
            width: 150px;
          }
          &--gray{
            color: var(--key-gray);
          }
          &--orange{
            color: var(--key-orange);
          }
          &--white{
            color: var(--key);
          }
          @include down-screen(mobile-small){
            width: 50px;
            min-width: 50px;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
</style>
