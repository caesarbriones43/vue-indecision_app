import { shallowMount, mount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  //   test("Should match whit snapshot", () => {
  //     const wrapper = shallowMount(Counter);
  //     expect(wrapper.html()).toMatchSnapshot();
  //   });

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  test('should h2 tag return default value "Counter"', () => {
    expect(wrapper.find("h2").exists()).toBeTruthy();

    const h2TagName = wrapper.find("h2").text();
    expect(h2TagName).toBe("Counter");
  });

  test("should p tag default values be 100", () => {
    // const pTags = wrapper.findAll("p");

    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe("100");

    // expect(pTags[1].text()).toBe('100');
  });

  test('should increase/decrease when the button is pressed"', async () => {
    const [btnIncrese, btnDecrease] = wrapper.findAll("button");

    await btnIncrese.trigger("click");
    await btnDecrease.trigger("click");
    await btnDecrease.trigger("click");

    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe("99");
  });

  test("should get the default value", () => {
    const { start } = wrapper.props();
    const value = wrapper.find('[data-testid="counter"]').text();

    expect(start).toBe(Number(value));
  });

  test("should show property title", () => {
    const title = "Hola Mundo";
    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    });

    expect(wrapper.find("h2").text()).toBe(title);
  });
});
