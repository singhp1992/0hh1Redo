import sidebar from './sidebar'
describe('sidebar reducer', () =>{
  const reducer = sidebar
  const initialState = { open: true }

  it('sets the intial State of the sidebar to open', () => {
    expect(reducer()).toEqual(initialState)
  })
})
