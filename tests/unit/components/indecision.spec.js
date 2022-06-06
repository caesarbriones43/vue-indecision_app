import { mount, shallowMount } from "@vue/test-utils";
import Indecision from "../../../src/components/Indecision.vue";

describe("Indecision Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Indecision);
  });

  test("should match whit the snapshot", () => {
      expect(wrapper.html()).toMatchSnapshot();
  });
});
