describe("Example Component", () => {
  test("Debe de ser mayor a 10", () => {
    //Arrange
    let value = 5;

    //Act
    value = 5 + 10;

    //Assert
    expect(value).toBeGreaterThan(10);

  });
});
