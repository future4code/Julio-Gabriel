describe("Creation of moks", () => {
  test("Mok with true return", () => {
    const validatorMock = jest.fn(() => {
			return true
		})
  })

  test("Mok with false return", () => {
    const validatorMock = jest.fn(() => {
			return false
		})
  })
})