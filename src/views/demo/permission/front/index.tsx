import { defineComponent, reactive, RenderFunction } from 'vue';

let _render: RenderFunction;
export default defineComponent({
  name: 'FullCom',
  setup() {
    const per = reactive({ name: 'tom', age: 18 });

    _render = () => <div>{per.name}</div>;

    return {
      per,
    };
  },
  render() {
    return _render();
  },
});
