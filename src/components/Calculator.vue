<template lang="pug">
  .calculator
    .calculator__container
      .display
          .display-numbers {{current||0}}
      .keyboard
        .keyboard-row
          button.keyboard-key.keyboard-key--gray AC
          button.keyboard-key.keyboard-key--gray #[span +/-]
          button.keyboard-key.keyboard-key--gray %
          button.keyboard-key.keyboard-key--orange ÷
        .keyboard-row
          button.keyboard-key.keyboard-key--white 7
          button.keyboard-key.keyboard-key--white 8
          button.keyboard-key.keyboard-key--white 9
          button.keyboard-key.keyboard-key--orange ×
        .keyboard-row
          button.keyboard-key.keyboard-key--white 4
          button.keyboard-key.keyboard-key--white 5
          button.keyboard-key.keyboard-key--white 6
          button.keyboard-key.keyboard-key--orange −
        .keyboard-row
          button.keyboard-key.keyboard-key--white 1
          button.keyboard-key.keyboard-key--white 2
          button.keyboard-key.keyboard-key--white 3
          button.keyboard-key.keyboard-key--orange +
        .keyboard-row
          button.keyboard-key.keyboard-key--white.keyboard-key--double 0
          button.keyboard-key.keyboard-key--white .
          button.keyboard-key.keyboard-key--orange =

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
          &:focus{
            outline: 0;
          }
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
